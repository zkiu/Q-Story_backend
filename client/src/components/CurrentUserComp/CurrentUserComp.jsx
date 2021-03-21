export default function CurrentUserComp({userInfo, regDisplayName}) {
	// TODO: displayName will be initially null when registering because of the following
	// -> adding displayName property to userCredentials is a separate process from registering with email
	// -> and userInfo prop is not triggered by this change
	// firebase currently doesn't have an observer for this

	return (
		<>
			<span className="welcome-message">
				Hello {userInfo.displayName || regDisplayName}
			</span>
		</>
	)
}
