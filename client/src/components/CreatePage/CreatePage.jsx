import React, {useState, useEffect} from 'react'
import axios from 'axios'

import DnDComp from '../DnDComp/DnDComp'

export default function CreatePage() {
	const [cards, setCards] = useState([])

	// -- loading 5 new cards when 1st mounted
	useEffect(() => {
		axios.get('http://localhost:8080/image/5').then((response) => {
			const newCards = response.data.map((item, index) => {
				item.id = '' + index
				item.position = index
				item.paragraph = 'Your story here.'
				return item
			})
			setCards(newCards)
		})
	}, [])

	return (
		<section>
			<span></span>
			{cards && <DnDComp cards={cards} setCards={setCards} />}
			{/* <CardEditComp cards={cards} setCards={setCards} /> */}
			{/* <ProjectOptions cards={cards} setCards={setCards} /> */}
		</section>
	)
}
