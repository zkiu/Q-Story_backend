// export default function AboutBtn() {
// 	let history = useHistory()

// 	const handleClick = (e) => {
// 		history.push('/about')
// 	}
// 	return (
// 		<>
// 			<button
// 				type="button"
// 				className="mybtn mybtn--bottom"
// 				onClick={handleClick}
// 			>
// 				About Page
// 			</button>
// 		</>
// 	)
// }

import {TiInfoLarge} from 'react-icons/ti'
import {IconContext} from 'react-icons'
import {useHistory} from 'react-router-dom'

export default function AboutBtn() {
	let history = useHistory()

	const handleClick = (e) => {
		history.push('/about')
	}

	return (
		<div className="mybtn__round mybtn__round--small" onClick={handleClick}>
			<IconContext.Provider
				value={{className: 'mybtn__round--icon mybtn__round--small--icon'}}
			>
				<div>
					<TiInfoLarge />
				</div>
			</IconContext.Provider>
			<span className="mybtn__round--text mybtn__round--small--text">
				{/* <br /> */}
				About
				<br />
				Page
			</span>
		</div>
	)
}
