import {fb} from '../../firebase/firebase'

import axios from 'axios'

export default function SaveBtn({title, cards}) {
	function handleClick(e) {
		e.preventDefault()

		let data = {
			dateCreated: Date.now(),
			title,
			cards,
		}

		if (fb.auth().currentUser) {
			fb.auth()
				.currentUser.getIdToken()
				.then((token) => {
					return axios.post('http://localhost:8080/project/', data, {
						headers: {token},
					})
				})
				.then((result) => {
					// console.log(result)
					alert(result.data.message)
				})
				.catch((err) => {
					console.error(err)
					alert('An error has occured. You are likely not logged in.')
				})
		} else {
			alert('unable to confirm your log-in status')
		}
	}

	return (
		<>
			<button type="button" className="btn btn-primary" onClick={handleClick}>
				Save your Project
			</button>
		</>
	)
}
