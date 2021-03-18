import {BsPlusSquare} from 'react-icons/bs'
import axios from 'axios'

export default function AddCardBtn({cards, setCards}) {
	const handleClick = (e) => {
		e.preventDefault()
		const tempCards = [...cards]
		axios.get('http://localhost:8080/image').then(({data}) => {
			tempCards.push(data)
			setCards(tempCards)
		})
	}
	return <BsPlusSquare className="icon" onClick={handleClick} />
}
