export default function CarouselSlides({cards}) {
	const slideEl = cards.map((card, index) => {
		if (index === 0) {
			return (
				<div className="carousel-item active" key={index}>
					<div className="slideCard">
						<img src={card.imgLag} className="d-block w-100" alt="" />
						{/* <div className="carousel-caption">
							<p>{card.paragraph}</p>
						</div> */}
					</div>
				</div>
			)
		} else {
			return (
				<div className="carousel-item" key={index}>
					<div className="slideCard">
						<img src={card.imgLag} className="d-block w-100" alt="" />
						{/* <div className="carousel-caption"> */}
						{/* <div className="carousel-caption d-none d-md-block"> */}
						{/* <h5>Second slide label</h5> */}
						{/* <p>{card.paragraph}</p>
						</div> */}
					</div>
				</div>
			)
		}
	})

	return <div className="carousel-inner">{slideEl}</div>
}
