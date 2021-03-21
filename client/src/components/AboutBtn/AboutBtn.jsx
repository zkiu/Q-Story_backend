import {useHistory} from 'react-router-dom'

export default function AboutBtn() {
	let history = useHistory()

	const handleClick = (e) => {
		history.push('/about')
	}
	return (
		<>
			<button
				type="button"
				className="mybtn mybtn--bottom"
				onClick={handleClick}
			>
				About Page
			</button>
		</>
	)
}
