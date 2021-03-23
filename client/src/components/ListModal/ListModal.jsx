import axios from 'axios'
import React, {useState} from 'react'
import {API_URL} from '../../services/envConfig'
import {fb} from '../../firebase/firebase'
import {useHistory, useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import {BsTrash} from 'react-icons/bs'
import {deleteProject} from '../../services/api/deleteProject'

export default function LoginModal() {
	const [projects, setProjects] = useState([])
	let history = useHistory()
	let {projectid} = useParams()

	function handleClick(e, projectID) {
		e.preventDefault()
		history.push(`/project/${projectID}`)
	}

	function handleDelete(e, projectID) {
		e.preventDefault()
		e.stopPropagation()
		deleteProject(projectID).then((result) => {
			toast.info(`🧹 Project has been deleted`)
			setProjects(
				projects.filter((project) => {
					return project.id !== projectID
				})
			)
			if (projectid === projectID) {
				history.push(`/`)
			}
		})
	}

	const handleLoad = (e) => {
		e.preventDefault()
		// ! no need to test if user is logged in -> because can only reach this component when logged-in
		fb.auth()
			.currentUser.getIdToken()
			.then((token) => {
				return axios.get(`${API_URL}/project/projectlist`, {
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
											<BsTrash
												className="icon"
												onClick={(e) => {
													handleDelete(e, project.id)
												}}
											/>
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
