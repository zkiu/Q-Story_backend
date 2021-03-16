export default function DnDCard({card}) {
	const handleClick = (e) => {
		e.preventDefault()
		console.log(e.currentTarget)
	}
	return (
		<div onClick={handleClick}>
			<h1>Hello</h1>
			<p>{card.paragraph}</p>
			<p>card# {card.position}</p>
			<img src={card.imgSmall} alt="" />
		</div>
	)
}
