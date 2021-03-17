import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {fb} from '../../firebase/firebase'
import DnDComp from '../DnDComp/DnDComp'
import SaveBtn from '../SaveBtn/SaveBtn'
import {useLoginStatus} from '../../services/auth/useLoginStatus'

export default function CreatePage() {
	const [cards, setCards] = useState([])
	const [title, setTitle] = useState('Your Title')
	const [projectID, setProjectID] = useState('')
	// const [projectID, setProjectID] = useState('66oc5xB7qEJxQS3ddf59')

	const user = useLoginStatus()

	useEffect(() => {
		// TODO: may be other conditions not accounted for in this useEffect
		if (projectID.length === 0) {
			axios.get('http://localhost:8080/image/5').then((response) => {
				const newCards = response.data.map((item) => {
					item.paragraph = 'Your story here.'
					return item
				})
				setCards(newCards)
			})
		} else {
			// ! if projectID.length !== 0, then user is not null by inference (currently i can't this of a case outside of this situation)
			if (projectID.length !== 0) {
				fb.auth()
					.currentUser.getIdToken()
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
		}
	}, [projectID])

	return (
		<section className="CreatePage">
			<span></span>
			{cards && <DnDComp cards={cards} setCards={setCards} />}
			{/* <CardEditComp cards={cards} setCards={setCards} /> */}
			{/* <ProjectOptions cards={cards} setCards={setCards} /> */}
			<div className="optionsContainer">
				<p>You are login as {user?.displayName}</p>
				<SaveBtn cards={cards} title={title} projectID={projectID} />
			</div>
		</section>
	)
}

// TODO: check no imageID duplicate when loading a new picture from API
