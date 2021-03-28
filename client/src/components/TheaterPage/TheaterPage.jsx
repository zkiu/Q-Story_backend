import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'
import {GiExitDoor} from 'react-icons/gi'
import {FaShareAltSquare} from 'react-icons/fa'

import {fb} from '../../firebase/firebase'
import {API_URL} from '../../services/envConfig'
import {useLoginStatus} from '../../services/auth/useLoginStatus'
import CarouselComp from '../CarouselComp/CarouselComp'
import {copyToClipboard} from '../../services/util/copyToClipboard'

export default function TheaterPage({sharedLink}) {
	const [cards, setCards] = useState([])

	let {projectid} = useParams()
	const {isLoading, userInfo} = useLoginStatus()

	useEffect(() => {
		if (sharedLink) {
			axios
				.get(`${API_URL}/project/shareable/${projectid}`)
				.then(({data}) => {
					setCards(data.cards)
				})
				.catch((err) => {
					toast.error('An error has occurred with the shared link.')
				})
		} else if (!isLoading && userInfo) {
			fb.auth()
				.currentUser?.getIdToken()
				.then((token) => {
					return axios.get(`${API_URL}/project/${projectid}`, {
						headers: {token},
					})
				})
				.then(({data}) => {
					setCards(data.cards)
				})
				.catch((err) => {
					toast.error('An error has occurred.')
				})
		}
	}, [sharedLink, projectid, isLoading, userInfo])

	let exitBtn = null
	sharedLink
		? (exitBtn = (
				<Link className="theaterModeBtn" to={`/`}>
					<GiExitDoor />
				</Link>
		  ))
		: (exitBtn = (
				<Link className="theaterModeBtn" to={`/project/${projectid}`}>
					<GiExitDoor />
				</Link>
		  ))

	let shareBtn = (
		<div className="theaterModeBtn">
			<FaShareAltSquare
				onClick={(e) => {
					copyToClipboard(e, projectid)
				}}
			/>
		</div>
	)

	return (
		<section className="theater">
			{cards.length !== 0 && <CarouselComp cards={cards} />}
			<svg
				className="curtains"
				stroke="currentColor"
				fill="currentColor"
				strokeWidth="0"
				viewBox="0 30 512 512"
				preserveAspectRatio="none"
				height="125%"
				width="100%"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M 0 0 v 94.275 c 28.382 -12.57 52.994 -35.202 71.39 -59.734 c -4.662 -3.466 -8.973 -7.064 -12.865 -10.79 C 50.903 16.452 44.723 8.51 40.973 0 z m 61.754 0 c 2.378 3.508 5.41 7.103 9.22 10.75 c 10.73 10.274 26.505 20.414 44.88 29.117 C 152.602 57.274 199.8 69 238 69 s 85.398 -11.726 122.146 -29.133 c 18.375 -8.703 34.15 -18.843 44.88 -29.117 c 3.81 -3.647 6.842 -7.242 9.22 -10.75 z m 373.273 0 c -3.75 8.51 -9.93 16.452 -17.552 23.75 c -3.892 3.726 -8.203 7.324 -12.864 10.79 c 18.396 24.533 43.008 47.166 71.39 59.735 V 0 z z M 86.785 44.78 C 65.37 73.92 35.765 100.415 0 113.788 v 174.035 c 2.116 0.805 4.112 1.178 6 1.178 c 8.312 -0.646 12.295 -5.132 18.324 -9.984 c 29.568 -24.024 49.255 -66.27 65.053 -119.094 c 9.187 -30.72 17.136 -64.91 25.34 -100.78 c -2.216 -0.986 -4.41 -1.986 -6.57 -3.01 c -7.512 -3.557 -14.67 -7.346 -21.362 -11.35 z m 302.43 0 c -6.693 4.006 -13.85 7.795 -21.36 11.353 c -2.162 1.023 -4.356 2.023 -6.572 3.008 c 8.204 35.872 16.153 70.062 25.34 100.782 c 15.798 52.825 35.485 95.07 65.053 119.094 c 5.414 4.648 11.22 9.89 18.324 9.984 c 1.888 0 3.884 -0.373 6 -1.178 V 113.787 c -35.764 -13.373 -65.37 -39.87 -86.785 -69.006 z M 28.13 299.34 C 21.233 304.193 13.793 307 6 307 c -2.025 0 -4.026 -0.197 -6 -0.564 v 123.2 c 6.273 2.01 14.098 3.364 22 3.364 c 12.41 0 24.637 -3.336 30.94 -7.316 c -0.04 -43.556 -0.973 -88.042 -24.81 -126.344 z m 419.74 0 c -23.837 38.302 -24.77 82.788 -24.81 126.344 c 6.303 3.98 18.53 7.316 30.94 7.316 c 7.902 0 15.727 -1.353 22 -3.363 v -123.2 c -1.974 0.366 -3.975 0.563 -6 0.563 c -7.792 0 -15.232 -2.807 -22.13 -7.66 z z"></path>
			</svg>
			<div className="footer">
				<div className="btnContainer">
					{exitBtn} {shareBtn}
				</div>
			</div>
		</section>
	)
}
