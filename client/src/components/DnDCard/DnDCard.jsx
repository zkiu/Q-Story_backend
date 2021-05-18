export default function DnDCard({card, index}) {
	return (
		<div className="DnDCard">
			<div className="cardNumber">
				<p>{index + 1}</p>
			</div>
			<img src={card.imgSmall} className="imgLoading" alt="" />
			<div className="textContainer">
				<p>{card.paragraph}</p>
			</div>
		</div>
	)
}
