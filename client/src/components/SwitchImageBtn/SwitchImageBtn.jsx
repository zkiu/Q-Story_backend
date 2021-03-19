import axios from 'axios'
import {FcSwitchCamera} from 'react-icons/fc'

export default function SwitchImageBtn({
	cards,
	setCards,
	imageIndex,
	setImageIndex,
}) {
	const handleClick = (e) => {
		e.preventDefault()
		const temp = [...cards]

		axios
			.get('http://localhost:8080/image')
			.then(({data}) => {
				temp[imageIndex] = {
					...temp[imageIndex],
					...data,
					// TODO: use spread operator for data obj as well?
					// imageID: data.imageID,
					// imgSmall: data.imgSmall,
					// imgMed: data.imgMed,
					// imgLag: data.imgLag,
					// width: data.width,
					// height: data.height,
				}

				setCards(temp)
			})
			.catch((err) => {
				alert(
					'An error occurred while requesting an image. Please check the console'
				)
				console.error('An error occurred while requesting an image: ', err)
			})
	}
	// TODO: add onTouchStart for touch service
	return <FcSwitchCamera className="icon" onClick={handleClick} />
}
