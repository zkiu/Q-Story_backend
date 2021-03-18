import {BiReset} from 'react-icons/bi'
import axios from 'axios'

export default function ResetBtn({setCards}) {
	const handleClick = (e) => {
		e.preventDefault()
		axios.get('http://localhost:8080/image/5').then((response) => {
			const newCards = response.data.map((item) => {
				item.paragraph = 'Your story here.'
				return item
			})
			setCards(newCards)
		})
	}
	return <BiReset className="icon" onClick={handleClick} />
}
