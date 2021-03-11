import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
// import HomePage from './HomePage/HomePage'
// import ErrorPage from './ErrorPage/ErrorPage'

class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					{/* <Route exact path="/" component={HomePage} />
					<Route exact path="/video/:id" component={HomePage} /> */}
					{/* <Route path="*" component={ErrorPage} /> */}
				</Switch>
			</Router>
		);
	}
}

export default App;
