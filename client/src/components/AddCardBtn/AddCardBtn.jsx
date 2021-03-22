import {BsPlusSquare} from 'react-icons/bs'
import {toast} from 'react-toastify'

import {checkDuplicateImageId} from '../../services/util/checkDuplicateImageId'
import {getOneImage} from '../../services/api/getOneImage'

export default function AddCardBtn({cards, setCards}) {
	const handleClick = (e) => {
		e.preventDefault()
		// const tempCards = [...cards]
		// const targetNumber = cards.length + 1

		getOneImage()
			.then((card) => {
				const {duplicateFound, newCards} = checkDuplicateImageId(cards, [card])

				if (duplicateFound) {
					console.log('duplicate found -> so recursive')
					handleClick()
				} else {
					setCards(newCards)
				}
			})
			// axios
			// 	.get('http://localhost:8080/image')
			// 	.then(({data}) => {
			// 		tempCards.push(data)
			// 		setCards(tempCards)
			// 	})
			.catch((err) => {
				if (err.response.status === 429) {
					toast.dark(
						'The 3rd party API limit for images have been reached 😢. The developer (Kiu) will need money to subscribed to a paid tier of the API to increase image availability.'
					)
					toast.error(err.response.data)
				} else {
					toast.error('An error occurred while requesting an image: ', err)
				}
			})
	}
	return <BsPlusSquare className="icon" onClick={handleClick} />
}
