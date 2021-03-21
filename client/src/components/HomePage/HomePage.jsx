import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'

import {fb} from '../../firebase/firebase'
import {checkDuplicateImageId} from '../../services/util/checkDuplicateImageId'
import {useLoginStatus} from '../../services/auth/useLoginStatus'
import DnDComp from '../DnDComp/DnDComp'
import SaveBtn from '../SaveBtn/SaveBtn'
import NewBtn from '../NewBtn/NewBtn'
import AboutBtn from '../AboutBtn/AboutBtn'
import ListModal from '../ListModal/ListModal'
import TitleInput from '../TitleInput/TitleInput'
import AddCardBtn from '../AddCardBtn/AddCardBtn'
import ResetBtn from '../ResetBtn/ResetBtn'
import EditCardComp from '../EditCardComp/EditCardComp'

export default function HomePage() {
	const [cards, setCards] = useState([])
	const [title, setTitle] = useState('')
	const [imageIndex, setImageIndex] = useState(null)

	let history = useHistory()
	let {projectid} = useParams() // either undefined or has projectid param
	const {isLoading, userInfo} = useLoginStatus()

	// -- on homepage (regardless of log status)
	useEffect(() => {
		if (!isLoading && projectid == null) {
			console.log('1st effect on homepage (regardless of log status)')
			axios
				.get('http://localhost:8080/image/5')
				.then((response) => {
					const {newCards} = checkDuplicateImageId(response.data)
					const tempCards = newCards.map((item) => {
						item.paragraph = 'Your story here.'
						return item
					})
					setCards(tempCards)
					setTitle('')
					setImageIndex(null)
				})
				.catch((err) => {
					if (err.response.status === 429) {
						alert(
							'The 3rd party API limit for images have been reached. The developer (Kiu) will need money to subscribed to a paid tier of the API to increase image availability.'
						)
						console.error(err.response.data)
					} else {
						console.error('An error occurred while requesting an image: ', err)
					}
				})
		}
		// ! don't add user as dependency since it will reload whenever login status change, and update the picture
	}, [isLoading, projectid])

	// -- NOT logged && on projectid
	useEffect(() => {
		// -- when loading is complete && user is null (when just opening the app or signing OUT) BUT projectid is true
		if (!isLoading && !userInfo && projectid) {
			console.log('2nd effect NOT logged && on projectid')
			// reset everything
			setCards([])
			setTitle('')
			setImageIndex(null)
			history.push(`/`)
			alert('please log-in first to access this link')
		}
	}, [isLoading, userInfo, projectid, history])

	// -- Logged IN && on projectid
	useEffect(() => {
		// -- when loading is complete && user exist && projectid exist
		if (!isLoading && userInfo && projectid) {
			console.log('3rd effect Logged IN && on projectid')
			fb.auth()
				.currentUser.getIdToken()
				.then((token) => {
					return axios.get(`http://localhost:8080/project/${projectid}`, {
						headers: {token},
					})
				})
				.then(({data}) => {
					setCards(data.cards)
					setTitle(data.title)
					setImageIndex(null)
				})
				.catch((err) => {
					console.error(err)
					alert(err)
				})
		}
	}, [isLoading, userInfo, projectid])

	const handleTheaterMode = (e) => {
		e.preventDefault()
		if (projectid == null) {
			alert('You must save the project first.')
		} else {
			history.push(`/theater/${projectid}`)
		}
	}

	return (
		<section className="HomePage">
			<div className="headingContainer">
				<TitleInput title={title} setTitle={setTitle} />
			</div>
			<h5 className="apiheading">Photos provided by Pexels.com</h5>

			{cards && (
				<DnDComp
					cards={cards}
					setCards={setCards}
					setImageIndex={setImageIndex}
				/>
			)}
			<div className="toolContainer">
				<AddCardBtn cards={cards} setCards={setCards} />
				<ResetBtn setCards={setCards} setImageIndex={setImageIndex} />
			</div>
			{/* ******************************************** */}
			<div className="guideContainer">
				<span>Start</span>
				<span>End</span>
			</div>
			{/* ******************************************** */}
			<div className="optionsContainer">
				{userInfo ? (
					<>
						<ListModal />
						<SaveBtn cards={cards} title={title} projectid={projectid} />
						<NewBtn
							setCards={setCards}
							setTitle={setTitle}
							setImageIndex={setImageIndex}
						/>
					</>
				) : (
					<p>Login/Register to save your project.</p>
				)}

				<AboutBtn />
			</div>
			{/* ******************************************** */}
			<EditCardComp
				cards={cards}
				setCards={setCards}
				imageIndex={imageIndex}
				setImageIndex={setImageIndex}
			/>
			{/* ******************************************** */}
			<div className="theaterContainer">
				<div className="btn btn-primary" onClick={handleTheaterMode}>
					<span>Theater Mode</span>
				</div>
			</div>
		</section>
	)
}

// TODO: check no imageID duplicate when loading a new picture from API
