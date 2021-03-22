import {fb} from '../../firebase/firebase'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'

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
					toast(data.message)
					history.push(`/project/${data.projectID}`)
				})
				.catch((err) => {
					toast.error(err)
				})
		} else {
			toast.error('unable to confirm your log-in status')
		}
	}

	return (
		<>
			<button type="button" className="mybtn mybtn--top" onClick={handleClick}>
				{projectid != null ? 'Save Changes' : 'Save Project'}
			</button>
		</>
	)
}
