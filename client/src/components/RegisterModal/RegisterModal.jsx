import React, {useState} from 'react'
// import {signIn} from '../../services/auth/signIn'

export default function RegisterModal() {
	const [regData, setRegData] = useState({
		displayName: '',
		email: '',
		password: '',
	})

	function handleChange(e) {
		setRegData({
			...regData,
			[e.target.name]: e.target.value,
		})
	}

	function handleSubmit(e) {
		e.preventDefault()

		let registrationInfo = {
			displayName: regData.displayName,
			email: regData.email,
			password: regData.password,
		}

		console.log(regData)
	}

	return (
		<>
			{/* <!-- Modal Trigger --> */}
			<button
				type="button"
				className="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#registerModal"
			>
				Register
			</button>
			{/* <!-- Modal --> */}
			<div
				className="modal fade register-modal"
				id="registerModal"
				tabIndex="-1"
				aria-labelledby="registerModalLabel"
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
									type="text"
									className="form-control"
									id="floatingName"
									placeholder="Display Name"
									required
									autoComplete="true"
									autoFocus
									name="displayName"
									value={regData.displayName}
									onChange={handleChange}
								/>
								<label htmlFor="floatingName">Display Name</label>
							</div>
							<div className="form-floating mb-3">
								<input
									type="email"
									className="form-control"
									id="floatingRegEmail"
									placeholder="name@example.com"
									required
									autoComplete="true"
									name="email"
									value={regData.email}
									onChange={handleChange}
								/>
								<label htmlFor="floatingRegEmail">Email address</label>
							</div>
							<div className="form-floating">
								<input
									type="password"
									className="form-control"
									id="floatingPassword"
									placeholder="Password"
									required
									autoComplete="true"
									name="password"
									value={regData.password}
									onChange={handleChange}
								/>
								<label htmlFor="floatingPassword">Password</label>
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
									Register
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
