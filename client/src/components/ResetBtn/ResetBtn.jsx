import {BiReset} from 'react-icons/bi'
import axios from 'axios'
import {checkDuplicateImageId} from '../../services/util/checkDuplicateImageId'
import {toast} from 'react-toastify'

export default function ResetBtn({setCards, setImageIndex}) {
	const handleClick = (e) => {
		e.preventDefault()
		axios
			.get('http://localhost:8080/image/6')
			.then((response) => {
				const {newCards} = checkDuplicateImageId(response.data)
				const tempCards = newCards.map((item) => {
					item.paragraph = ''
					return item
				})
				setCards(tempCards)
				setImageIndex(0)
			})
			.catch((err) => {
				if (err.response.status === 429) {
					toast.dark(
						'The 3rd party API limit for images have been reached. The developer (Kiu) will need money to subscribed to a paid tier of the API to increase image availability.'
					)
					toast.error(err.response.data)
				} else {
					toast.error('An error occurred while requesting an image: ', err)
				}
			})
	}
	return <BiReset className="icon" onClick={handleClick} />
}
