import React, {useState} from 'react'

import {Link} from 'react-router-dom'

import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'
import SignOutBtn from '../SignOutBtn/SignOutBtn'
import CurrentUserComp from '../CurrentUserComp/CurrentUserComp'
import {useLoginStatus} from '../../services/auth/useLoginStatus'

export default function Header() {
	// ! this is a hack to overcome the realtime limits of Firebase updateProfile() with displayName
	const [regDisplayName, setRegDisplayName] = useState('')

	const {isLoading, userInfo} = useLoginStatus()

	return (
		<header>
			<div className="container">
				<div className="logoContainer">
					<Link to="/" className="logo hover">
						Q-Story
					</Link>
				</div>

				{!isLoading && userInfo ? (
					<>
						<CurrentUserComp
							userInfo={userInfo}
							regDisplayName={regDisplayName}
						/>
						<div className="authContainer">
							<SignOutBtn setRegDisplayName={setRegDisplayName} />
						</div>
					</>
				) : (
					<div className="authContainer">
						<LoginModal setRegDisplayName={setRegDisplayName} />
						<RegisterModal setRegDisplayName={setRegDisplayName} />
					</div>
				)}
			</div>
		</header>
	)
}
