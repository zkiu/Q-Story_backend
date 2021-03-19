import {BsTrash} from 'react-icons/bs'

export default function DeleteCardBtn({
	cards,
	setCards,
	imageIndex,
	setImageIndex,
}) {
	const handleClick = (e) => {
		e.preventDefault()
		const temp = [...cards]

		temp.splice(imageIndex, 1)
		setImageIndex(null)
		setCards(temp)
	}
	// TODO: add onTouchStart for touch service
	return <BsTrash className="icon" onClick={handleClick} />
}
