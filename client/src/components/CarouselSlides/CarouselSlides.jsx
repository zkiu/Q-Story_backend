export default function CarouselSlides({cards}) {
	const slideEl = cards.map((card, index) => {
		return (
			<div
				className={index === 0 ? 'carousel-item active' : 'carousel-item'}
				key={index}
			>
				<div className="slideCard">
					{/* *************************************** */}
					{/* <img
						src={card.imgLg}
						className={
							card.width >= card.height ? 'd-block w-100' : 'd-block h-100'
						}
						alt=""
					/>
					<div className="textContainer">
						<p>{card.paragraph}</p>
					</div> */}
					<div
						className="imageContainer"
						style={{
							backgroundImage: `url('${card.imgMed}')`,
						}}
					>
						{/*  */}
					</div>
					<div className="textContainer">
						<p className="carouselText">{card.paragraph}</p>
					</div>
					{/* *************************************** */}
				</div>
			</div>
		)
	})

	return <div className="carousel-inner">{slideEl}</div>
}
