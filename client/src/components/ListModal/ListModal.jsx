import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {fb} from '../../firebase/firebase'

export default function LoginModal({setProjectID, user}) {
	const [projects, setProjects] = useState([])

	function handleClick(e, projectID) {
		e.preventDefault()
		setProjectID(projectID)
	}

	const handleLoad = (e) => {
		e.preventDefault()
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
				console.error(err)
				alert('An error occured while retrieving the project list')
			})
	}

	const arr = projects.map((project) => {
		return (
			<li
				key={project.id}
				onClick={(e) => {
					handleClick(e, project.id)
				}}
			>
				<span>{project.title}</span>
				<span>Num. of Cards: {project.cards.length}</span>
				<span>Date Saved: {new Date(project.dateCreated).toDateString()}</span>
			</li>
		)
	})

	return (
		<>
			{/* <!-- Modal Trigger --> */}
			<button
				type="button"
				className="btn btn-primary"
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
				<div className="modal-dialog modal-dialog-centered">
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
						<ul className="modal-body">
							{/* modal body */}
							{/* <li className="listheadings">
								<span>Title</span>
								<span>Number of Cards</span>
								<span>Date saved</span>
							</li> */}
							{arr}
						</ul>
						<div className="modal-footer ">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
