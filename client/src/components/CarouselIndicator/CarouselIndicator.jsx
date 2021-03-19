export default function CarouselIndicator({cards}) {
	const buttonEl = cards.map((card, index) => {
		return (
			<button
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide-to={index}
				aria-label={'Slide ' + (index + 1)}
				key={index}
				className={index === 0 ? 'active' : ''}
				aria-current={index === 0 ? 'true' : 'false'}
			></button>
		)
	})

	return <div className="carousel-indicators">{buttonEl}</div>
}
