import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'
import {signOut} from '../../services/auth/signOut'

export default function SignOutBtn({setRegDisplayName}) {
	let history = useHistory()

	function handleClick(e) {
		e.preventDefault()
		setRegDisplayName('')
		signOut()
			.then((result) => {
				toast.info('You have been signed out')
				history.push('/')
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
