import {useLoginStatus} from '../../services/auth/useLoginStatus'

export default function CurrentUserComp() {
	const user = useLoginStatus()

	return (
		<>
			<span className="welcome-message">
				Good to see you {user && user.displayName}
			</span>
		</>
	)
}
