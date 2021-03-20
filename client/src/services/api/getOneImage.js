import axios from 'axios'

//returns image object
export const getOneImage = async () => {
	const {data} = await axios.get('http://localhost:8080/image')
	return data
}

// !for testing
// getOneImage().then((result) => {
// 	console.log(result)
// })
