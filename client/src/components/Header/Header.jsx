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
				<div className="logoContainer">
					<Link to="/" className="appLogo hover">
						Q-Story
					</Link>
				</div>

				{!isLoading && userInfo ? (
					<>
						<CurrentUserComp userInfo={userInfo} />
						<div className="authContainer">
							<SignOutBtn />
						</div>
					</>
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
