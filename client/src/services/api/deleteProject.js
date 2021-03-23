import axios from 'axios'
import {fb} from '../../firebase/firebase'
import {API_URL} from '../../services/envConfig'

export const deleteProject = async (projectID) => {
	/*******************************************************************/
	if (fb.auth().currentUser) {
		fb.auth()
			.currentUser.getIdToken()
			.then((token) => {
				// if a project id is provided, overwrite the existing document
				return axios.delete(`${API_URL}/project/${projectID}`, {
					headers: {token},
				})
			})
			.then(({data}) => {
				return data
			})
		/*******************************************************************/
		// const {data} = await axios.delete(`${API_URL}/project/${projectID}`, {
		// 	headers: {token},
		// })
		// return data
	}
}
