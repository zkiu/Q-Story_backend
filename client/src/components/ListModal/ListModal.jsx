import axios from 'axios'
import React, {useState} from 'react'
import {fb} from '../../firebase/firebase'
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'

export default function LoginModal() {
	const [projects, setProjects] = useState([])
	let history = useHistory()

	function handleClick(e, projectID) {
		e.preventDefault()
		history.push(`/project/${projectID}`)
	}

	const handleLoad = (e) => {
		e.preventDefault()
		// ! no need to test if user is logged in -> because can only reach this component when logged-in
		fb.auth()
			.currentUser.getIdToken()
			.then((token) => {
				return axios.get(`http://localhost:8080/project/projectlist`, {
					headers: {token},
				})
			})
			.then(({data}) => {
				setProjects(data)
			})
			.catch((err) => {
				toast.error('An error occurred while retrieving the project list')
			})
	}

	return (
		<>
			{/* <!-- Modal Trigger --> */}
			<button
				type="button"
				className="mybtn"
				data-bs-toggle="modal"
				data-bs-target="#listModal"
				onClick={handleLoad}
			>
				Load Project
			</button>
			{/* <!-- Modal --> */}
			<div
				className="modal fade list-modal"
				id="listModal"
				tabIndex="-1"
				aria-labelledby="listModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered modal-xl">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="listModalLabel">
								Your saved projects:
							</h5>
							<button
								id="listModal-close"
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<ul className="modal-body list-group list-group-flush">
							{projects.length === 0 ? (
								<span className="listMessage">
									You do not have any saved projects.
								</span>
							) : (
								projects.map((project) => {
									return (
										<li
											className="list-group-item"
											key={project.id}
											onClick={(e) => {
												handleClick(e, project.id)
											}}
										>
											<span>{project.title}</span>
											<span>Num. of Cards: {project.cards.length}</span>
											<span>
												Date Saved:{' '}
												{new Date(project.dateCreated).toDateString()}
											</span>
										</li>
									)
								})
							)}
						</ul>
						<div className="modal-footer ">
							<button type="button" className="mybtn" data-bs-dismiss="modal">
								Close
							</button>
							<button type="button" className="mybtn" data-bs-dismiss="modal">
								Okay
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
