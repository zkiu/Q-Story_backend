import {useEffect, useState} from 'react'
import {addAuthListener} from './addAuthListener'
import {getLoggedInUserInfo} from './getLoggedInUserInfo'

/*
useAuth is a custom React Hook. 
https://reactjs.org/docs/hooks-custom.html
On user login status change, it load and return the login credentials
*/
export const useLoginStatus = () => {
	const [user, setUserInfo] = useState(() => {
		const userInfo = getLoggedInUserInfo()
		const isLoading = !userInfo
		return {
			userInfo,
			isLoading,
		}
	})
	// ! isLoading true on initial mount (during initialization or if the user is already logged-in), and will be false thereafter because we now have a defined value for via the listener addAuthListener
	useEffect(() => {
		const unsubscribe = addAuthListener((userInfo) => {
			setUserInfo({isLoading: false, userInfo})
		})
		// -- call unsubscribe when the hook/component unmounts
		return unsubscribe
	}, [])

	// -- the value of the 'userInfo' key will be null when not logged in or when logging out
	return user
}
