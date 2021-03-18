import {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './Header/Header'
import CreatePage from './CreatePage/CreatePage'
import AboutPage from './AboutPage/AboutPage'
import TheaterPage from './TheaterPage/TheaterPage'

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					{/* <Route exact path="/" component={CreatePage} /> */}
					{/* <Route exact path="/theater/:id" component={TheaterPage} />
					<Route exact path="/about" component={AboutPage} /> */}
					<Route exact path="/">
						<Header />
						<CreatePage />
					</Route>
					<Route exact path="/project/:projectid">
						<Header />
						<CreatePage />
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
