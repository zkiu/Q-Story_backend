export default function CarouselSlides({cards}) {
	const slideEl = cards.map((card, index) => {
		return (
			<>
				<div
					className={index === 0 ? 'carousel-item active' : 'carousel-item'}
					key={index}
				>
					<div className="slideCard">
						<img src={card.imgLag} className="d-block w-100" alt="" />
					</div>
				</div>
			</>
		)
	})

	return <div className="carousel-inner">{slideEl}</div>
}
