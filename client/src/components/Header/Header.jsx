import {Link} from 'react-router-dom'

import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'
import SignOutBtn from '../SignOutBtn/SignOutBtn'
import CurrentUserComp from '../CurrentUserComp/CurrentUserComp'
import {useLoginStatus} from '../../services/auth/useLoginStatus'

export default function Header() {
	const {isLoading, userInfo} = useLoginStatus()

	return (
		<header>
			<div className="container">
				<Link to="/" className="appLogo">
					Q-Story
				</Link>
				{!isLoading && userInfo ? (
					<div className="authContainer">
						<CurrentUserComp userInfo={userInfo} />
						<SignOutBtn />
					</div>
				) : (
					<div className="authContainer">
						<LoginModal />
						<RegisterModal />
					</div>
				)}
			</div>
		</header>
	)
}
