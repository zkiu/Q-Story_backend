import {FaGithubAlt, FaLinkedin} from 'react-icons/fa'
import toolstack from '../../assets/images/toolstack.png'

export default function AboutPage() {
	return (
		<section className="l-about">
			<h1 className="">A tale of Q-Story</h1>
			<div className="l-about__container">
				<h2 className="">About the App</h2>
				<div className="profile-container">
					<div className="profile-text">
						<p>
							This is a web app to help with creative writing, to promote
							literacy, to zen out, or just for creating silly stories.
						</p>
						<p>
							In building Q-Story, I tried to make the App simple, intuitive,
							and fun. I put emphasis in keeping this App casual, so that family
							and friends can pick it up during short breaks.
						</p>
						<p>I hope that you have a lot of fun using this App.</p>
					</div>
				</div>

				<h2 className="">The Tools</h2>
				<div className="imgContainer">
					<img src={toolstack} alt="Fullstack icons" />
				</div>
				<h2 className="">The Coder</h2>
				<div className="profile-container">
					<div className="profile-text">
						<p>
							I am a Web Developer with a previous career in Construction
							Project Management. My coding fundamentals come from both being
							self-taught and BrainStation’s Web Development Diploma program. My
							enthusiasm for coding and grit is at an epic level.
						</p>
						<p>
							I would love to hear from you. You can learn more about me via the
							following links:
						</p>
					</div>
					<div className="profile-container-link">
						<a href="https://github.com/zkiu">
							<FaGithubAlt className="profileBtn" />
						</a>
						<a href="https://www.linkedin.com/in/devkiu/">
							<FaLinkedin className="profileBtn" />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
