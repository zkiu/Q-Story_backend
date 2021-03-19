export default function CarouselSlides({cards}) {
	const slideEl = cards.map((card, index) => {
		return (
			<div
				className={index === 0 ? 'carousel-item active' : 'carousel-item'}
				key={index}
			>
				<div className="slideCard">
					<img
						src={card.imgLag}
						className={
							card.width >= card.height ? 'd-block w-100' : 'd-block h-100'
						}
						alt=""
					/>
					<div className="textContainer">
						<p>{card.paragraph}</p>
					</div>
				</div>
			</div>
		)
	})

	return <div className="carousel-inner">{slideEl}</div>
}
