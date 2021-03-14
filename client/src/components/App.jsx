import {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './Header/Header'
import CreatePage from './CreatePage/CreatePage'

class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={CreatePage} />
					{/* <Route exact path="/theater/:id" component={TheaterPage} />
					<Route exact path="/about" component={AboutPage} /> */}
				</Switch>
			</Router>
		)
	}
}

export default App
