import {getUserInfo} from '../../services/auth/getUserInfo'

export default function CurrentUserComp() {
	function handleClick(e) {
		e.preventDefault()
		const displayName = getUserInfo()?.displayName
		alert(displayName)
	}

	return (
		<>
			<button type="button" className="btn btn-primary" onClick={handleClick}>
				User Info
			</button>
		</>
	)
}
