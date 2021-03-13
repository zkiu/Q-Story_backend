import React, {useState} from 'react'
import {signIn} from '../../services/auth/signIn'

export default function LoginModal() {
	const [loginUser, setLoginUser] = useState({
		email: '',
		password: '',
	})

	function handleChange(e) {
		setLoginUser({...loginUser, [e.target.name]: e.target.value})
	}

	function handleSubmit(e) {
		e.preventDefault()
		signIn(loginUser.email, loginUser.password)
			.then((userID) => {
				if (userID) {
					document.getElementById('loginModal-close').click()
				}
			})
			.catch((error) => {
				alert(error)
			})
	}

	return (
		<>
			{/* <!-- Modal Trigger --> */}
			<button
				type="button"
				className="btn btn-primary"
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
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
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
							<div className="form-floating mb-3">
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
								<label htmlFor="floatingLoginEmail">Email address</label>
							</div>
							<div className="form-floating">
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
								<label htmlFor="floatingLoginPassword">Password</label>
							</div>
							<div className="modal-footer ">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Close
								</button>
								<button type="submit" className="btn btn-primary">
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
