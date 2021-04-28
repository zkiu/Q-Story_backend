export default function DnDCard({card}) {
	return (
		<div className="DnDCard">
			<img src={card.imgSmall} className="imgLoading" alt="" />
			<div className="textContainer">
				<p>{card.paragraph}</p>
			</div>
		</div>
	)
}
