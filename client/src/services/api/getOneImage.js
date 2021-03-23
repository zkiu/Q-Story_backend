import axios from 'axios'

//returns image object
export const getOneImage = async () => {
	const {data} = await axios.get('http://localhost:8080/image')
	// return
	return {
		paragraph: '',
		imageID: data.imageID,
		imgSmall: data.imgSmall,
		imgMed: data.imgMed,
		imgLag: data.imgLag,
		width: data.width,
		height: data.height,
	}
}

// !for testing
// getOneImage().then((result) => {
// 	console.log(result)
// })
