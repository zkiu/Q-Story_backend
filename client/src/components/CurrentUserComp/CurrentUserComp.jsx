export default function CurrentUserComp({userInfo, regDisplayName}) {
	/**
	 * NOTE DisplayName will be initially null from the userInfo prop when registering because of the following
	 * -> adding displayName property to userCredentials is a separate process from registering with email
	 * -> and userInfo prop is not triggered by this change
	 * -> firebase currently doesn't have an observer for this
	 * hence we are retrieving this data from firestore user doc
	 */
	return (
		<div className="welcome-message">
			<span>Hello {userInfo.displayName || regDisplayName}</span>
		</div>
	)
}
