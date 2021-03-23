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
				type="text"
				name="title"
				placeholder="<Enter your project title here>"
				value={title}
				onChange={handleChange}
			/>
		</>
	)
}
