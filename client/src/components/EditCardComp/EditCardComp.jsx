import React, {useState, useEffect} from 'react'
import DeleteCardBtn from '../DeleteCardBtn/DeleteCardBtn'

export default function EditCardComp({
	cards,
	setCards,
	imageIndex,
	setImageIndex,
}) {
	const [card, setCard] = useState({
		imageID: '',
		imgSmall: '',
		imgMed: '',
		imgLag: '',
		width: '',
		height: '',
		paragraph: '',
	})

	useEffect(() => {
		if (imageIndex !== null) {
			let info = cards[imageIndex]
			setCard(info)
		}
	}, [imageIndex, cards])

	function handleChange(e) {
		setCard({
			...card,
			[e.target.name]: e.target.value,
		})
	}

	function handleSubmit(e) {
		e.preventDefault()
		const temp = [...cards]
		temp.splice(imageIndex, 1, card)
		setCards(temp)
		// TODO: trigger toast to say things are saved
		// console.log(regData)
	}

	// const info
	const cardForm = (
		<section className="editcard">
			Card info here {imageIndex}
			<form className="form-card" onSubmit={handleSubmit}>
				<img src={card.imgMed} alt="" />

				<div className="form-floating">
					<textarea
						className="form-control"
						placeholder="Descripbe your imagination"
						id="floatingCardParagraph"
						name="paragraph"
						value={card.paragraph}
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
				<div className="footer">
					<button type="submit" className="btn btn-primary">
						Update Card
					</button>
				</div>
			</form>
		</section>
	)
	return imageIndex !== null && cardForm
}
