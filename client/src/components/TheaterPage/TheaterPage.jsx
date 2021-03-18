import {GiTheaterCurtains} from 'react-icons/gi'
import {useParams} from 'react-router-dom'

export default function TheaterPage() {
	let {projectid} = useParams()
	return (
		<section className="theater">
			<GiTheaterCurtains className="curtains" />
			<p>For the project {projectid}</p>
			{/* // todo implement collection group to search for projectID via a share api endpoint /share/:projectID */}
		</section>
	)
}
