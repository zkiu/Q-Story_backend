import {fb} from '../../firebase/firebase'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export default function SaveBtn({title, cards, projectid}) {
	let history = useHistory()

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
					if (projectid != null) {
						return axios.post(
							`http://localhost:8080/project/${projectid}`,
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
					alert(data.message)
					history.push(`/project/${data.projectID}`)
				})
				.catch((err) => {
					console.error(err)
					alert(err)
				})
		} else {
			alert('unable to confirm your log-in status')
		}
	}

	return (
		<>
			<button type="button" className="btn btn-primary" onClick={handleClick}>
				{projectid != null ? 'Update Project' : 'Save Project'}
			</button>
		</>
	)
}
