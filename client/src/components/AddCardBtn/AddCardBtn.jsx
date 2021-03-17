import {BsPlusSquare} from 'react-icons/bs'
import axios from 'axios'

export default function AddCardBtn({cards, setCards}) {
	const handleClick = (e) => {
		e.preventDefault()
		const tempCards = [...cards]
		console.log(`Output for -> cards`, cards)
		// console.log(`Output for -> tempCards`, tempCards)

		axios.get('http://localhost:8080/image').then(({data}) => {
			// console.log(`Output for -> data`, data)
			tempCards.push(data)
			// console.log(`Output for -> tempCards`, tempCards)

			setCards(tempCards)
		})
	}

	return <BsPlusSquare className="icon" onClick={handleClick} />
}
