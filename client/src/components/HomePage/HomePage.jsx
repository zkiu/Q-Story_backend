import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'

import {fb} from '../../firebase/firebase'

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
			// console.log('3rd effect: no projectID')
			axios
				.get('http://localhost:8080/image/5')
				.then((response) => {
					const newCards = response.data.map((item) => {
						item.paragraph = 'Your story here.'
						return item
					})
					setCards(newCards)
					setTitle('')
					setImageIndex(null)
				})
				.catch((err) => {
					alert(
						'An error occurred while requesting an image. Please check the console'
					)
					console.error('An error occurred while requesting an image: ', err)
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
			<TitleInput title={title} setTitle={setTitle} />
			<h5>Photos provided by Pexel</h5>
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
				<p>You are login as {userInfo?.displayName}</p>
				{userInfo && <ListModal />}
				{/* {userInfo && <ListModal setProjectID={setProjectID} userInfo={userInfo} />} */}
				<SaveBtn cards={cards} title={title} projectid={projectid} />
				<NewBtn
					setCards={setCards}
					setTitle={setTitle}
					setImageIndex={setImageIndex}
				/>
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
