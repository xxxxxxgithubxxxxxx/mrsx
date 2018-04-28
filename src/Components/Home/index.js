import React,{ Component } from "react"
import "./index.css"
import logo from "./20180428230526.png"
class Home extends Component {
	render(){
		return (
			<div id="home">
				{
					<div>
						<div id="left">
							<img src={logo} />
						</div>
						<div id="right">
							登录
						</div>
					</div>
				}
				
				home
			</div>
		)
	}
}

export default Home