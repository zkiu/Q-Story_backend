import {toast} from 'react-toastify'
import {CLIENT_URL} from '../../services/envConfig'

export const copyToClipboard = (e, projectID) => {
	e.preventDefault()
	e.stopPropagation()

	const shareableLink = `${CLIENT_URL}/shareable/${projectID}`

	navigator.clipboard.writeText(shareableLink).then(
		function () {
			/* clipboard successfully set */
			toast.info(`Shared Link Copied!`)
		},
		function () {
			/* clipboard write failed */
			toast.info(`Failed to copy project link to clipboard`)
		}
	)
}
