import DeleteCardBtn from '../DeleteCardBtn/DeleteCardBtn'
import SwitchImageBtn from '../SwitchImageBtn/SwitchImageBtn'

export default function EditCardComp({
	cards,
	setCards,
	imageIndex,
	setImageIndex,
}) {
	function handleChange(e) {
		const temp = [...cards]

		temp[imageIndex] = {
			...temp[imageIndex],
			[e.target.name]: e.target.value,
		}

		setCards(temp)
	}
	return (
		<>
			{cards[imageIndex] != null && (
				<form className="editcard">
					<div
						className="imageContainer"
						style={{
							backgroundImage: `url('${cards[imageIndex].imgMed}')`,
						}}
					></div>
					<div className="editCardContainer">
						<div className="inputGroup">
							<label className="cardParagraph--label" htmlFor="cardParagraph">
								Story Text:
							</label>
							<textarea
								className="cardParagraph--input"
								placeholder="Your story here:"
								id="cardParagraph"
								name="paragraph"
								value={cards[imageIndex].paragraph}
								onChange={handleChange}
							></textarea>
						</div>

						<div className="btnContainer">
							<SwitchImageBtn
								cards={cards}
								setCards={setCards}
								imageIndex={imageIndex}
								setImageIndex={setImageIndex}
							/>
							<DeleteCardBtn
								cards={cards}
								setCards={setCards}
								imageIndex={imageIndex}
								setImageIndex={setImageIndex}
							/>
						</div>
					</div>
				</form>
			)}
		</>
	)
}
