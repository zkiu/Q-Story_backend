import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {checkDuplicateImageId} from '../../services/util/checkDuplicateImageId'

export default function NewBtn({setCards, setTitle, setImageIndex}) {
	let history = useHistory()

	function handleClick(e) {
		e.preventDefault()
		setTitle('')
		setImageIndex(0)
		history.push('/')
		axios
			.get('http://localhost:8080/image/5')
			.then((response) => {
				const {newCards} = checkDuplicateImageId(response.data)
				const tempCards = newCards.map((item) => {
					item.paragraph = 'Your story here.'
					return item
				})
				setCards(tempCards)
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

	return (
		<>
			<button type="button" className="mybtn" onClick={handleClick}>
				New Project
			</button>
		</>
	)
}
