import {getUserInfo} from '../../services/auth/getUserInfo'

export default function SignOutBtn() {
	function handleClick(e) {
		e.preventDefault()
		alert(getUserInfo().displayName)
	}

	return (
		<>
			<button type="button" className="btn btn-primary" onClick={handleClick}>
				User Info
			</button>
		</>
	)
}
