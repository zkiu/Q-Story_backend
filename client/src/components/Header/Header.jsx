import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'
import SignOutBtn from '../SignOutBtn/SignOutBtn'
import CurrentUserComp from '../CurrentUserComp/CurrentUserComp'

import {useLoginStatus} from '../../services/auth/useLoginStatus'

export default function Header() {
	const user = useLoginStatus()

	return (
		<header>
			<h1>Q-Story</h1>
			{user ? (
				<div className="authContainer">
					<CurrentUserComp />
					<SignOutBtn />
				</div>
			) : (
				<div className="authContainer">
					<LoginModal />
					<RegisterModal />
				</div>
			)}
		</header>
	)
}
