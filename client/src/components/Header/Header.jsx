import {Link} from 'react-router-dom'

import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'
import SignOutBtn from '../SignOutBtn/SignOutBtn'
import CurrentUserComp from '../CurrentUserComp/CurrentUserComp'
import {useLoginStatus} from '../../services/auth/useLoginStatus'

export default function Header() {
	const user = useLoginStatus()

	return (
		<header>
			<Link to="/" className="appLogo">
				Q-Story
			</Link>
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
