import React, {useState} from 'react'
import {toast} from 'react-toastify'
import {signIn} from '../../services/auth/signIn'

export default function LoginModal({setRegDisplayName}) {
	const [loginUser, setLoginUser] = useState({
		email: '',
		password: '',
	})

	function handleChange(e) {
		setLoginUser({...loginUser, [e.target.name]: e.target.value})
	}

	function handleSubmit(e) {
		e.preventDefault()
		setRegDisplayName('')
		signIn(loginUser.email, loginUser.password)
			.then((userID) => {
				// -- this remove() is required since bootstrap creates this div but this component is removed in the virtual dom once the user is signed in WITHOUT removing the modal-backdrop div created by Bootstrap
				document.querySelector('.modal-backdrop').remove()
			})
			.catch((error) => {
				toast.error(error)
			})
	}

	return (
		<>
			{/* <!-- Modal Trigger --> */}
			<button
				type="button"
				className="mybtn mybtn--spaceRight"
				data-bs-toggle="modal"
				data-bs-target="#loginModal"
			>
				Login
			</button>
			{/* <!-- Modal --> */}
			<div
				className="modal fade login-modal"
				id="loginModal"
				tabIndex="-1"
				aria-labelledby="loginModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="loginModalLabel">
								LOG - into your creativity
							</h5>
							<button
								id="loginModal-close"
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<form className="modal-body" onSubmit={handleSubmit}>
							{/* modal body */}
							<label htmlFor="floatingLoginEmail">Email address</label>
							<input
								type="email"
								className="form-control"
								id="floatingLoginEmail"
								placeholder="name@example.com"
								required
								autoComplete="true"
								autoFocus
								name="email"
								value={loginUser.email}
								onChange={handleChange}
							/>
							<label htmlFor="floatingLoginPassword">Password</label>
							<input
								type="password"
								className="form-control"
								id="floatingLoginPassword"
								placeholder="Password"
								required
								autoComplete="true"
								name="password"
								value={loginUser.password}
								onChange={handleChange}
							/>
							<div className="modal-footer ">
								<button type="button" className="mybtn" data-bs-dismiss="modal">
									Close
								</button>
								<button type="submit" className="mybtn">
									Log-in
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
