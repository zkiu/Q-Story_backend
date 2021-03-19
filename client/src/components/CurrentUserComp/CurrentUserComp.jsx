import {useLoginStatus} from '../../services/auth/useLoginStatus'

export default function CurrentUserComp() {
	const {isLoading, userInfo} = useLoginStatus()

	return (
		<>
			<span className="welcome-message">
				Hello {!isLoading && userInfo.displayName}!
			</span>
		</>
	)
}
