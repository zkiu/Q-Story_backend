import {fb} from '../../firebase/firebase'
import axios from 'axios'

import {MdTheaters} from 'react-icons/md'
import {IconContext} from 'react-icons'
import {useHistory} from 'react-router-dom'

export default function TheaterBtn({title, cards, projectid}) {
	let history = useHistory()

	const handleClick = (e) => {
		e.preventDefault()
		if (projectid == null) {
			alert('You must save the project first.')
		} else {
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
						}
						// else {
						// 	// else created a new project document
						// 	return axios.post('http://localhost:8080/project/', data, {
						// 		headers: {token},
						// 	})
						// }
					})
					.then(({data}) => {
						alert(data.message)
						// history.push(`/project/${data.projectID}`)
						history.push(`/theater/${projectid}`)
					})
					.catch((err) => {
						console.error(err)
						alert(err)
					})
			} else {
				alert('unable to confirm your log-in status')
			}
		}
	}

	// const handleClick = (e) => {
	// 	e.preventDefault()
	// 	if (projectid == null) {
	// 		alert('You must save the project first.')
	// 	} else {
	// 		history.push(`/theater/${projectid}`)
	// 	}
	// }
	return (
		<div className="mybtn__round" onClick={handleClick}>
			<IconContext.Provider value={{className: 'mybtn__round--icon'}}>
				<div>
					<MdTheaters />
				</div>
			</IconContext.Provider>
			<span className="mybtn__round--text">
				{/* <br /> */}
				Theater
				<br />
				Mode
			</span>
		</div>
	)
}
