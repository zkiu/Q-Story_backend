export default function CarouselIndicator({cards}) {
	const buttonEl = cards.map((card, index) => {
		if (index === 0) {
			return (
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to={index}
					className="active"
					aria-current="true"
					aria-label={'Slide ' + (index + 1)}
					key={index}
				></button>
			)
		} else {
			return (
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to={index}
					aria-label={'Slide ' + (index + 1)}
					key={index}
				></button>
			)
		}
	})

	return <div className="carousel-indicators">{buttonEl}</div>
}
