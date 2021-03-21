import {MdTheaters} from 'react-icons/md'
import {IconContext} from 'react-icons'
import {useHistory} from 'react-router-dom'

export default function TheaterBtn({projectid}) {
	let history = useHistory()

	const handleClick = (e) => {
		e.preventDefault()
		if (projectid == null) {
			alert('You must save the project first.')
		} else {
			history.push(`/theater/${projectid}`)
		}
	}
	return (
		<div className="mybtn__round" onClick={handleClick}>
			<IconContext.Provider value={{className: 'mybtn__round--icon'}}>
				<div>
					<MdTheaters />
				</div>
			</IconContext.Provider>
			<span className="mybtn__round--text">
				{/* <br /> */}
				Theater
				<br />
				Mode
			</span>
		</div>
	)
}
