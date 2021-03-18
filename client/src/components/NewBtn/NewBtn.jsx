import axios from 'axios'

export default function NewBtn({setProjectID, setCards, setTitle}) {
	function handleClick(e) {
		e.preventDefault()
		setProjectID('')
		setTitle('')
		axios.get('http://localhost:8080/image/5').then((response) => {
			const newCards = response.data.map((item) => {
				item.paragraph = 'Your story here.'
				return item
			})
			setCards(newCards)
		})
	}

	return (
		<>
			<button type="button" className="btn btn-primary" onClick={handleClick}>
				New Project
			</button>
		</>
	)
}
