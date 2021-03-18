import {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './Header/Header'
import HomePage from './HomePage/HomePage'
import AboutPage from './AboutPage/AboutPage'
import TheaterPage from './TheaterPage/TheaterPage'

class App extends Component {
	render() {
		return (
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
						<TheaterPage />
					</Route>
				</Switch>
			</Router>
		)
	}
}

// TODO: use animated transition between create and theater page: https://reactrouter.com/web/example/animated-transitions

export default App
