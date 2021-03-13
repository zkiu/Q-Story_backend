import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'
import SignOutBtn from '../SignOutBtn/SignOutBtn'

export default function Header() {
	return (
		<header>
			<LoginModal />
			<RegisterModal />
			<SignOutBtn />
			<span>current user is:</span>
		</header>
	)
}
