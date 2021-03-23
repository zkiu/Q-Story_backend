import {FcSwitchCamera} from 'react-icons/fc'

import {checkDuplicateImageId} from '../../services/util/checkDuplicateImageId'
import {getOneImage} from '../../services/api/getOneImage'
import {toast} from 'react-toastify'

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
				const {duplicateFound} = checkDuplicateImageId(cards, [card])

				if (duplicateFound) {
					console.log('duplicate found -> so recursive')
					handleClick()
				} else {
					temp[imageIndex] = {
						...temp[imageIndex],
						...card,
						// Below are the properties of each card
						// imageID: data.imageID,
						// imgSmall: data.imgSmall,
						// imgMed: data.imgMed,
						// imgLg: data.imgLg,
						// width: data.width,
						// height: data.height,
					}

					setCards(temp)
				}
			})
			.catch((err) => {
				if (err?.response?.status === 429) {
					toast.dark(
						'The 3rd party API limit for images have been reached. The developer (Kiu) will need money to subscribed to a paid tier of the API to increase image availability.'
					)
					toast.error(err.response.data)
				} else {
					toast.error('An error occurred while requesting an image: ', err)
				}
			})
	}
	// TODO: add onTouchStart for touch service
	return <FcSwitchCamera className="icon" onClick={handleClick} />
}
