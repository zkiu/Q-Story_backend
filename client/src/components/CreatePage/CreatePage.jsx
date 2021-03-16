import React, {useState, useEffect} from 'react'
import axios from 'axios'

import DnDComp from '../DnDComp/DnDComp'
import SaveBtn from '../SaveBtn/SaveBtn'
import {useLoginStatus} from '../../services/auth/useLoginStatus'

export default function CreatePage() {
	const [cards, setCards] = useState([])
	const [title, setTitle] = useState('Your Title')

	const user = useLoginStatus()

	// -- loading 5 new cards when 1st mounted
	useEffect(() => {
		axios.get('http://localhost:8080/image/5').then((response) => {
			const newCards = response.data.map((item) => {
				item.paragraph = 'Your story here.'
				return item
			})
			setCards(newCards)
		})
	}, [])

	return (
		<section className="CreatePage">
			<span></span>
			{cards && <DnDComp cards={cards} setCards={setCards} />}
			{/* <CardEditComp cards={cards} setCards={setCards} /> */}
			{/* <ProjectOptions cards={cards} setCards={setCards} /> */}
			<div className="optionsContainer">
				<p>You are login as {user?.displayName}</p>
				<SaveBtn cards={cards} title={title} />
			</div>
		</section>
	)
}

// TODO: check no imageID duplicate when loading a new picture
// TODO: used userid for the backend access by sending token in header or body
