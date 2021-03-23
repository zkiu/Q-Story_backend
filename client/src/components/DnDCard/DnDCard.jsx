export default function DnDCard({card}) {
	return (
		<div className="DnDCard">
			<img src={card.imgSmall} alt="" />
			<div className="textContainer">
				<p>{card.paragraph}</p>
			</div>
		</div>
	)
}
