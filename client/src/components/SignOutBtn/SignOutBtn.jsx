import {signOut} from '../../services/auth/signOut'

export default function SignOutBtn() {
	function handleClick(e) {
		e.preventDefault()
		signOut()
			.then((result) => {
				// TODO: add toast
				alert('You have been signed out')
			})
			.catch((error) => {
				alert(error)
			})
	}

	return (
		<>
			<button type="button" className="btn btn-primary" onClick={handleClick}>
				Sign Out
			</button>
		</>
	)
}
