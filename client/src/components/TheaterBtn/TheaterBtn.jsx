import {fb} from '../../firebase/firebase'
import axios from 'axios'

import {MdTheaters} from 'react-icons/md'
import {IconContext} from 'react-icons'
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'

export default function TheaterBtn({title, cards, projectid}) {
	let history = useHistory()

	const handleClick = (e) => {
		e.preventDefault()
		if (projectid == null) {
			toast.dark('🛑 You must save this project first.')
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
					})
					.then(({data}) => {
						toast(data.message)
						history.push(`/theater/${projectid}`)
					})
					.catch((err) => {
						toast.error(err)
					})
			} else {
				toast.dark('Unable to confirm your log-in status.')
			}
		}
	}

	return (
		<div className="mybtn__round" onClick={handleClick}>
			<IconContext.Provider value={{className: 'mybtn__round--icon'}}>
				<div>
					<MdTheaters />
				</div>
			</IconContext.Provider>
			<span className="mybtn__round--text">
				Theater
				<br />
				Mode
			</span>
		</div>
	)
}
