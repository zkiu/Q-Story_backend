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
	const [projectID, setProjectID] = useState('')
	// const [projectID, setProjectID] = useState('66oc5xB7qEJxQS3ddf59')
	let history = useHistory()
	let {projectid} = useParams()
	const user = useLoginStatus()

	useEffect(() => {
		// console.log(projectid)
		if (projectid && user) {
			// console.log('1st effect: with param and user')
			setProjectID(projectid)
		}
	}, [projectid, user])

	useEffect(() => {
		if (projectID.length !== 0 && user) {
			// console.log('2nd effect with projectID and user ')

			fb.auth()
				.currentUser?.getIdToken()
				.then((token) => {
					return axios.get(`http://localhost:8080/project/${projectID}`, {
						headers: {token},
					})
				})
				.then(({data}) => {
					setCards(data.cards)
					setTitle(data.title)
				})

				.catch((err) => {
					console.error(err)
					alert('An error has occured. You are likely not logged in.')
				})
		}
	}, [projectID, user])

	useEffect(() => {
		if (projectID.length === 0) {
			// console.log('3rd effect: no project id')
			axios
				.get('http://localhost:8080/image/5')
				.then((response) => {
					const newCards = response.data.map((item) => {
						item.paragraph = 'Your story here.'
						return item
					})
					setCards(newCards)
				})
				.catch((err) => {
					alert(
						'An error occurred while requesting an image. Please check the console'
					)
					console.error('An error occurred while requesting an image: ', err)
				})
		}
	}, [projectID])

	const handleTheaterMode = (e) => {
		e.preventDefault()
		if (projectID.length === 0) {
			alert('You must save the project 1st.')
		} else {
			history.push(`/theater/${projectID}`)
		}
	}

	return (
		<section className="HomePage">
			<TitleInput title={title} setTitle={setTitle} />
			<h5>Photos provided by Pixabay.com</h5>
			{cards && <DnDComp cards={cards} setCards={setCards} />}
			{/* <CardEditComp cards={cards} setCards={setCards} /> */}
			{/* <ProjectOptions cards={cards} setCards={setCards} /> */}
			<div className="toolContainer">
				<AddCardBtn cards={cards} setCards={setCards} />
				<ResetBtn setCards={setCards} />
			</div>
			<div className="guideContainer">
				<span>Start</span>
				<span>End</span>
			</div>
			<div className="optionsContainer">
				<p>You are login as {user?.displayName}</p>
				{user && <ListModal setProjectID={setProjectID} user={user} />}
				<SaveBtn
					cards={cards}
					title={title}
					projectID={projectID}
					setProjectID={setProjectID}
				/>
				<NewBtn
					setProjectID={setProjectID}
					setCards={setCards}
					setTitle={setTitle}
				/>
				<AboutBtn />
			</div>
			<EditCardComp />
			<div className="theaterContainer">
				<div className="btn btn-primary" onClick={handleTheaterMode}>
					<span>Theater Mode</span>
				</div>
			</div>
		</section>
	)
}

// TODO: check no imageID duplicate when loading a new picture from API
