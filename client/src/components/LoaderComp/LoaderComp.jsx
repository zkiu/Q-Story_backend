import React, {useState, useEffect} from 'react'

export default function LoaderComp() {
	const [message, setMessage] = useState('')

	useEffect(() => {
		let unsubscribe = setTimeout(() => {
			setMessage(
				<p>
					Please be patient as we wake the Heroku dyno 🙇‍♂️
					<br />
					after a 30min span of inactivity.
					<br /> (The server is currently on a free tier 😅)
				</p>
			)
		}, 2000)
		return () => {
			clearTimeout(unsubscribe)
		}
	}, [])

	return (
		<div className="loaderContainer">
			<div
				className="spinner-border text-secondary"
				style={{
					width: '6rem',
					height: '6rem',
					borderWidth: '1rem',
				}}
				role="status"
			>
				<span className="visually-hidden">Loading...</span>
			</div>
			{message}
		</div>
	)
}
