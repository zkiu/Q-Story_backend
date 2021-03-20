import {useLoginStatus} from '../../services/auth/useLoginStatus'

export default function CurrentUserComp() {
	const {isLoading, userInfo} = useLoginStatus()
	// userInfo will be null for a brief moment when login out. this will cause an error. hence ? was place before the displayName property
	return (
		<>
			<span className="welcome-message">
				Hello {!isLoading && userInfo?.displayName}!
			</span>
		</>
	)
}
