// import React, {useState, useEffect} from 'react'
import DeleteCardBtn from '../DeleteCardBtn/DeleteCardBtn'
import SwitchImageBtn from '../SwitchImageBtn/SwitchImageBtn'

export default function EditCardComp({
	cards,
	setCards,
	imageIndex,
	setImageIndex,
}) {
	// const [card, setCard] = useState(() => {
	// 	if (imageIndex !== null) {
	// 		return cards[imageIndex]
	// 	} else {
	// 		return {
	// 			imageID: '',
	// 			imgSmall: '',
	// 			imgMed: '',
	// 			imgLag: '',
	// 			width: '',
	// 			height: '',
	// 			paragraph: '',
	// 		}
	// 	}
	// })

	// useEffect(() => {
	// 	if (imageIndex !== null) {
	// 		let info = cards[imageIndex]
	// 		setCard(info)
	// 	}
	// }, [imageIndex, cards])

	// function handleChange(e) {
	// setCard({
	// 	...card,
	// 	[e.target.name]: e.target.value,
	// })
	// const formEl = document.querySelector('form[name=cardform]')
	// // console.log(formEl)
	// formEl.submit()
	// // const temp = [...cards]
	// // temp.splice(imageIndex, 1, card)
	// // setCards(temp)
	// var event = new Event('submit', {
	// 	bubbles: true,
	// 	cancelable: true,
	// })
	// formEl.dispatchEvent(event)
	// }
	function handleChange(e) {
		// setCard({
		// 	...card,
		// 	[e.target.name]: e.target.value,
		// })

		const temp = [...cards]

		temp[imageIndex] = {
			...temp[imageIndex],
			[e.target.name]: e.target.value,
		}

		setCards(temp)
	}

	/*******************************************************************/
	// function submitEdit() {
	// 	var ele = document.getElementById('edit')
	// 	ele.submit()

	// 	var event = new Event('submit', {
	// 		bubbles: true,
	// 		cancelable: true,
	// 	})
	// 	ele.dispatchEvent(event)
	// }
	// submitEdit()

	// function validate() {
	// 	console.log('form submitted')
	// }
	/*******************************************************************/

	// function handleSubmit(e) {
	// 	e.preventDefault()
	// 	const temp = [...cards]
	// 	temp.splice(imageIndex, 1, card)
	// 	setCards(temp)
	// 	// TODO: trigger toast to say things are saved
	// 	// console.log(regData)
	// }

	// console.log(cards[imageIndex])

	// const info
	const cardForm = (
		<>
			{/* Card info here {imageIndex} */}
			{cards[imageIndex] != null && (
				<form
					className="form-card editcard"
					// onSubmit={handleSubmit}
					name="cardform"
				>
					<img src={cards[imageIndex].imgMed} alt="" />

					<div className="form-floating">
						<textarea
							className="form-control"
							placeholder="Describe your imagination"
							id="floatingCardParagraph"
							name="paragraph"
							value={cards[imageIndex].paragraph}
							onChange={handleChange}
						></textarea>
						<label htmlFor="floatingCardParagraph">Story Text</label>
					</div>

					<DeleteCardBtn
						cards={cards}
						setCards={setCards}
						imageIndex={imageIndex}
						setImageIndex={setImageIndex}
					/>
					<SwitchImageBtn
						cards={cards}
						setCards={setCards}
						imageIndex={imageIndex}
						setImageIndex={setImageIndex}
					/>
					{/* <div className="footer">
						<button type="submit" className="mybtn">
							Update Text
						</button>
					</div> */}
				</form>
			)}
		</>
	)
	return cardForm
}
