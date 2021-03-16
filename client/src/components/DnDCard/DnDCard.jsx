export default function DnDCard({card}) {
	const handleClick = (e) => {
		e.preventDefault()
		console.log(e.currentTarget)
	}
	return (
		<div onClick={handleClick}>
			{/* <h1>Hello</h1> */}
			<img src={card.imgSmall} alt="" />
			<p>{card.paragraph}</p>
			<p>card# {card.position}</p>
		</div>
	)
}
