import axios from 'axios'

export const getOneImage = async () => {
	const {data} = await axios.get('http://localhost:8080/image')
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
