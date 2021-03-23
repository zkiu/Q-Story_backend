import React, {useState} from 'react'
import {toast} from 'react-toastify'
import {registerUser} from '../../services/auth/registerUser'

// -- No confidential info is kept, so the registration process is simple.
// TODO: hash and salt the password before sending
export default function RegisterModal({setRegDisplayName}) {
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
		if (e.target.name === 'displayName') {
			setRegDisplayName(e.target.value)
		}
	}

	function handleSubmit(e) {
		e.preventDefault()

		let registrationInfo = {
			displayName: regData.displayName,
			email: regData.email,
			password: regData.password,
		}

		registerUser(registrationInfo)
			.then((message) => {
				toast(message.message)
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
				className="mybtn"
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
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="registerModalLabel">
								REGISTER - to treasure your work
							</h5>
							<button
								id="registerModal-close"
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<form className="modal-body" onSubmit={handleSubmit}>
							{/* modal body */}
							{/* ********************************************************** */}
							<label htmlFor="floatingRegName">Display Name:</label>
							<input
								type="text"
								className="form-control"
								id="floatingRegName"
								placeholder="Display Name"
								required
								autoComplete="true"
								autoFocus
								name="displayName"
								value={regData.displayName}
								onChange={handleChange}
							/>
							<label htmlFor="floatingRegEmail">Email:</label>
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
							<label htmlFor="floatingRegPassword">Password</label>
							<input
								type="password"
								className="form-control"
								id="floatingRegPassword"
								placeholder="Password"
								required
								autoComplete="true"
								name="password"
								value={regData.password}
								onChange={handleChange}
							/>
							{/* ********************************************************** */}
							<div className="modal-footer ">
								<button type="button" className="mybtn" data-bs-dismiss="modal">
									Close
								</button>
								<button type="submit" className="mybtn">
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
