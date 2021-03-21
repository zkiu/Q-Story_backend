export default function DnDCard({card}) {
	// const handleClick = (e) => {
	// 	e.preventDefault()
	// 	// console.log(e.currentTarget)
	// }
	return (
		<div className="DnDCard">
			{/* <div onClick={handleClick}> */}
			{/* <h1>Hello</h1> */}
			<img src={card.imgSmall} alt="" />
			<div className="textContainer">
				<p>{card.paragraph}</p>
			</div>
		</div>
	)
}
