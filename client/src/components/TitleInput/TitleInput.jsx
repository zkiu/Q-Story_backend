export default function TitleInput({title, setTitle}) {
	const handleChange = (e) => {
		e.preventDefault()
		setTitle(e.target.value)
	}
	return (
		<>
			<label
				className="form-control-label sr-only titleLabel"
				htmlFor="titleinput"
			>
				Title:
			</label>
			<input
				className="projectTitle"
				// className="form-control border border-primary"
				type="text"
				// id="titleinput"
				name="title"
				placeholder="<Enter your project title here>"
				value={title}
				onChange={handleChange}
			/>
		</>
	)
}
