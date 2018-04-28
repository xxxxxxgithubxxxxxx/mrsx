import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from "react-router-dom"
import React from "react"
 
import App from "../Components/App"
import Home from "../Components/Home"

const router = (
	<Router>
		<App>
			<Switch>
				<Route path="/home" component={Home}/>
				<Redirect path="/" to="/home" />
			</Switch>
		</App>
	</Router>
)

export default router