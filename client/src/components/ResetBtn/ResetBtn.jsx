import {BiReset} from 'react-icons/bi'
import axios from 'axios'

export default function ResetBtn({setCards, setImageIndex}) {
	const handleClick = (e) => {
		e.preventDefault()
		axios
			.get('http://localhost:8080/image/5')
			.then((response) => {
				const newCards = response.data.map((item) => {
					item.paragraph = 'Your story here.'
					return item
				})
				setCards(newCards)
				setImageIndex(null)
			})
			.catch((err) => {
				alert(
					'An error occurred while requesting an image. Please check the console'
				)
				console.error('An error occurred while requesting an image: ', err)
			})
	}
	return <BiReset className="icon" onClick={handleClick} />
}
