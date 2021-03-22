import {ToastContainer, Flip} from 'react-toastify'

export default function ToastComp() {
	return (
		<ToastContainer
			position="bottom-right"
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			transition={Flip}
		/>
	)
}
