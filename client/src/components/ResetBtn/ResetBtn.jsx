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
				if (err.response.status === 429) {
					alert(
						'The 3rd party API limit for images have been reached. The developer (Kiu) will need money to subscribed to a paid tier of the API to increase image availability.'
					)
					console.error(err.response.data)
				} else {
					console.error('An error occurred while requesting an image: ', err)
				}
			})
	}
	return <BiReset className="icon" onClick={handleClick} />
}
