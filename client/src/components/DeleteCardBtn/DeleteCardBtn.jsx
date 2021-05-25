import {BsTrash} from 'react-icons/bs'
import {toast} from 'react-toastify'

export default function DeleteCardBtn({
	cards,
	setCards,
	imageIndex,
	setImageIndex,
}) {
	const handleClick = (e) => {
		e.preventDefault()
		if (cards.length === 1) {
			toast.warning("🙅‍♀️ you can't remove the last card")
			return
		}
		const temp = [...cards]
		temp.splice(imageIndex, 1)
		setImageIndex(null)
		setCards(temp)
	}
	// TODO: add onTouchStart for touch service
	return (
		<div className="cardIcon cardIcon--trash" onClick={handleClick}>
			<BsTrash className="icon" />
		</div>
	)
}
