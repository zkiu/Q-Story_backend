import axios from 'axios'
import {useHistory} from 'react-router-dom'

export default function NewBtn({setCards, setTitle, setImageIndex}) {
	let history = useHistory()

	function handleClick(e) {
		e.preventDefault()
		setTitle('')
		setImageIndex(null)
		history.push('/')
		axios
			.get('http://localhost:8080/image/5')
			.then((response) => {
				const newCards = response.data.map((item) => {
					item.paragraph = 'Your story here.'
					return item
				})
				setCards(newCards)
				history.push('/')
			})
			.catch((err) => {
				alert(
					'An error occurred while requesting an image. Please check the console'
				)
				console.error('An error occurred while requesting an image: ', err)
			})
	}

	return (
		<>
			<button type="button" className="btn btn-primary" onClick={handleClick}>
				New Project
			</button>
		</>
	)
}
