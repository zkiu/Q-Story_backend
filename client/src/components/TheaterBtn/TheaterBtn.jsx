import {MdTheaters} from 'react-icons/md'
import {IconContext} from 'react-icons'
import {useHistory} from 'react-router-dom'

export default function TheaterBtn({projectid}) {
	let history = useHistory()

	const handleTheaterMode = (e) => {
		e.preventDefault()
		if (projectid == null) {
			alert('You must save the project first.')
		} else {
			history.push(`/theater/${projectid}`)
		}
	}
	return (
		<div className="theaterbtn" onClick={handleTheaterMode}>
			<IconContext.Provider value={{className: 'theaterbtn--icon'}}>
				<div>
					<MdTheaters />
				</div>
			</IconContext.Provider>
			<span className="theaterbtn--text">
				{/* <br /> */}
				Theater
				<br />
				Mode
			</span>
		</div>
	)
}
