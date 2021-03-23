import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'

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
import TheaterBtn from '../TheaterBtn/TheaterBtn'

//incase backend is down on initial load, load these default data
import backupData from '../../assets/data/data.json'

export default function HomePage() {
	const [cards, setCards] = useState([])
	const [title, setTitle] = useState('')
	const [imageIndex, setImageIndex] = useState(0)

	let history = useHistory()
	let {projectid} = useParams() // either undefined or has projectid param
	const {isLoading, userInfo} = useLoginStatus()

	// -- on homepage (regardless of log status)
	useEffect(() => {
		if (!isLoading && projectid == null) {
			// console.log('1st effect on homepage (regardless of log status)')
			axios
				.get('http://localhost:8080/image/6')
				.then((response) => {
					const {newCards} = checkDuplicateImageId(response.data)
					const tempCards = newCards.map((item) => {
						item.paragraph = ''
						return item
					})
					setCards(tempCards)
					setTitle('')
					setImageIndex(0)
				})
				.catch((err) => {
					if (err?.response?.status === 429) {
						toast.dark(
							'The 3rd party API limit for images have been reached 😢. You can still load previously saved projects.\nFor new images, try again later.'
						)
						// load default data when status error 429 is encountered
						const tempCards = backupData.map((item) => {
							item.paragraph = ''
							return item
						})
						setCards(tempCards)
						setTitle('')
						setImageIndex(0)
					} else {
						toast.error('An error occurred while requesting an image: ', err)
					}
				})
		}
		// ! don't add user as dependency since it will reload whenever login status change, and update the picture
	}, [isLoading, projectid])

	// -- NOT logged && on projectid
	useEffect(() => {
		// -- when loading is complete && user is null (when just opening the app or signing OUT) BUT projectid is true
		if (!isLoading && !userInfo && projectid) {
			// console.log('2nd effect NOT logged && on projectid')
			// reset everything
			setCards([])
			setTitle('')
			setImageIndex(0)
			history.push(`/`)
			toast.dark('please log-in first to access this link')
		}
	}, [isLoading, userInfo, projectid, history])

	// -- Logged IN && on projectid
	useEffect(() => {
		// -- when loading is complete && user exist && projectid exist
		if (!isLoading && userInfo && projectid) {
			// console.log('3rd effect Logged IN && on projectid')
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
					setImageIndex(0)
				})
				.catch((err) => {
					console.error(err)
					toast.error(err)
				})
		}
	}, [isLoading, userInfo, projectid])

	return (
		<section className="HomePage">
			<div className="headingContainer">
				<TitleInput title={title} setTitle={setTitle} />
			</div>
			<h5 className="apiheading">Photos provided by Pexels.com</h5>
			{/* ******************************************** */}
			{cards && (
				<DnDComp
					cards={cards}
					setCards={setCards}
					setImageIndex={setImageIndex}
				/>
			)}
			{/* ******************************************** */}
			<div className="guideContainer">
				<span className="guideLabel">Start . . . </span>
				<div className="toolContainer">
					<AddCardBtn cards={cards} setCards={setCards} />
					<ResetBtn setCards={setCards} setImageIndex={setImageIndex} />
				</div>
				<span className="guideLabel guideLabel--end">. . . End</span>
			</div>
			{/* ******************************************** */}
			<div className="majorEditContainer">
				<section className="editCardContainer">
					<EditCardComp
						cards={cards}
						setCards={setCards}
						imageIndex={imageIndex}
						setImageIndex={setImageIndex}
					/>
				</section>
				{/* ******************************************** */}
				<div className="btnContainer">
					<div className="optionsContainer">
						{userInfo ? (
							<>
								<SaveBtn cards={cards} title={title} projectid={projectid} />
								<ListModal />
								<NewBtn
									setCards={setCards}
									setTitle={setTitle}
									setImageIndex={setImageIndex}
								/>
							</>
						) : (
							<p className="message">Login/ Register to save your project.</p>
						)}
					</div>
					<AboutBtn />
					<TheaterBtn cards={cards} title={title} projectid={projectid} />
				</div>
			</div>
		</section>
	)
}
