import axios from 'axios'
import {FcSwitchCamera} from 'react-icons/fc'

import {checkDuplicateImageId} from '../../services/util/checkDuplicateImageId'
import {getOneImage} from '../../services/api/getOneImage'

export default function SwitchImageBtn({
	cards,
	setCards,
	imageIndex,
	setImageIndex,
}) {
	const handleClick = (e) => {
		e.preventDefault()
		const temp = [...cards]

		getOneImage()
			.then((card) => {
				const {duplicateFound, newCards} = checkDuplicateImageId(cards, [card])

				if (duplicateFound) {
					console.log('duplicate found -> so recursive')
					handleClick()
				} else {
					temp[imageIndex] = {
						...temp[imageIndex],
						...card,
						// TODO: use spread operator for data obj as well?
						// imageID: data.imageID,
						// imgSmall: data.imgSmall,
						// imgMed: data.imgMed,
						// imgLag: data.imgLag,
						// width: data.width,
						// height: data.height,
					}

					setCards(temp)
				}
			})

			// axios
			// 	.get('http://localhost:8080/image')
			// .then(({data}) => {
			// 	temp[imageIndex] = {
			// 		...temp[imageIndex],
			// 		...data,
			// 		// TODO: use spread operator for data obj as well?
			// 		// imageID: data.imageID,
			// 		// imgSmall: data.imgSmall,
			// 		// imgMed: data.imgMed,
			// 		// imgLag: data.imgLag,
			// 		// width: data.width,
			// 		// height: data.height,
			// 	}

			// 	setCards(temp)
			// })
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
	// TODO: add onTouchStart for touch service
	return <FcSwitchCamera className="icon" onClick={handleClick} />
}
