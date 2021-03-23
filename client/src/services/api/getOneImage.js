import axios from 'axios'
import {API_URL} from '../../services/envConfig'

export const getOneImage = async () => {
	const {data} = await axios.get(`${API_URL}/image`)
	return {
		paragraph: '',
		imageID: data.imageID,
		imgSmall: data.imgSmall,
		imgMed: data.imgMed,
		imgLg: data.imgLg,
		width: data.width,
		height: data.height,
	}
}

// !for testing
// getOneImage().then((result) => {
// 	console.log(result)
// })
