import {useEffect, useState} from 'react'
import {addAuthListener} from './addAuthListener'
import {getLoggedInUserInfo} from './getLoggedInUserInfo'

/*
useAuth is a custom React Hook. 
https://reactjs.org/docs/hooks-custom.html
On user login status change, it load and return the login credentials
*/
export const useLoginStatus = () => {
	const [userInfo, setUserInfo] = useState(() => {
		const user = getLoggedInUserInfo()
		return user
	})

	useEffect(() => {
		const unsubscribe = addAuthListener((user) => {
			setUserInfo(user)
		})
		// -- call unsubscribe when the hook/component unmounts
		return unsubscribe
	}, [])

	// -- the value of the 'user' key will be null when not logged in or when logging out
	return userInfo
}
