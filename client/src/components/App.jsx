import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ToastComp from './ToastComp/ToastComp'

import Header from './Header/Header'
import HomePage from './HomePage/HomePage'
import AboutPage from './AboutPage/AboutPage'
import TheaterPage from './TheaterPage/TheaterPage'

export default function App() {
	return (
		<main>
			<Router>
				<Switch>
					{/* <Route exact path="/" component={HomePage} /> */}
					{/* <Route exact path="/theater/:id" component={TheaterPage} />
					<Route exact path="/about" component={AboutPage} /> */}
					<Route exact path="/">
						<Header />
						<HomePage />
					</Route>
					<Route exact path="/project/:projectid">
						<Header />
						<HomePage />
					</Route>
					<Route exact path="/about">
						<Header />
						<AboutPage />
					</Route>
					<Route exact path="/theater/:projectid">
						<TheaterPage sharedLink={false} />
					</Route>
					<Route exact path="/shareable/:projectid">
						<TheaterPage sharedLink={true} />
					</Route>
				</Switch>
			</Router>
			<ToastComp />
		</main>
	)
}
