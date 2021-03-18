import {fb} from '../../firebase/firebase'

import axios from 'axios'

export default function SaveBtn({title, cards, projectID, setProjectID}) {
	function handleClick(e) {
		e.preventDefault()

		const tempTitle = title || '<Untitled Project>'

		let data = {
			dateCreated: Date.now(),
			title: tempTitle,
			cards,
		}

		if (fb.auth().currentUser) {
			fb.auth()
				.currentUser.getIdToken()
				.then((token) => {
					// if a project id is provided, overwrite the existing document
					if (projectID.length !== 0) {
						return axios.post(
							`http://localhost:8080/project/${projectID}`,
							data,
							{
								headers: {token},
							}
						)
					} else {
						// else created a new project document
						return axios.post('http://localhost:8080/project/', data, {
							headers: {token},
						})
					}
				})
				.then(({data}) => {
					console.log(`Output for -> data.projectID`, data.projectID)

					setProjectID(data.projectID)
					alert(data.message)
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
				{projectID.length !== 0 ? 'Update Project' : 'Save Project'}
			</button>
		</>
	)
}
