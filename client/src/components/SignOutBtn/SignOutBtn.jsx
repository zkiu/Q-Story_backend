import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'
import {signOut} from '../../services/auth/signOut'

export default function SignOutBtn({setRegDisplayName}) {
	let history = useHistory()

	function handleClick(e) {
		e.preventDefault()
		setRegDisplayName('')
		history.push('/')
		signOut()
			.then((result) => {
				// TODO: add toast
				toast.info('You have been signed out')
			})
			.catch((error) => {
				toast.error(error)
			})
	}

	return (
		<>
			<button type="button" className="mybtn" onClick={handleClick}>
				Sign Out
			</button>
		</>
	)
}
