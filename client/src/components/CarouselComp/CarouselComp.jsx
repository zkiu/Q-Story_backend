import CarouselIndicator from '../CarouselIndicator/CarouselIndicator'
import CarouselSlides from '../CarouselSlides/CarouselSlides'

export default function CarouselComp({cards}) {
	return (
		<section className="carousel">
			<div
				id="carouselExampleCaptions"
				className="carousel"
				data-bs-ride="carousel"
			>
				<CarouselSlides cards={cards} />
				<CarouselIndicator cards={cards} />
				{/* next and previous slides arrow */}
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</section>
	)
}
