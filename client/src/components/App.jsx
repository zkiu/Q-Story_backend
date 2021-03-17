import {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './Header/Header'
import CreatePage from './CreatePage/CreatePage'
import AboutPage from './AboutPage/AboutPage'

class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					{/* <Route exact path="/" component={CreatePage} /> */}
					{/* <Route exact path="/theater/:id" component={TheaterPage} />
					<Route exact path="/about" component={AboutPage} /> */}
					<Route exact path="/">
						<CreatePage />
					</Route>
					<Route exact path="/about">
						<AboutPage />
					</Route>
				</Switch>
			</Router>
		)
	}
}

// TODO: use animated transition between create and theater page: https://reactrouter.com/web/example/animated-transitions

export default App
