export default function LoaderComp() {
	return (
		<div className="d-flex">
			<div
				className="spinner-border text-secondary"
				style={{
					width: '6rem',
					height: '6rem',
					borderWidth: '1rem',
				}}
				role="status"
			>
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	)
}
