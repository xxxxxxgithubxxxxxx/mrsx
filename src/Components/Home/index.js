import React,{ Component } from "react"
import "./index.css"
import logo from "./20180428230526.png"
//import ReactSwiper from 'react-swiper'
import axios from "axios"

class Home extends Component {
	constructor(props){
        super(props);
        this.state={
            datalist:[],
        }
    }
	componentWillMount(){
        console.log(this.state.datalist.length)
        axios.get('/show/page/block?pageType=5').then(res=>{
            
            if(res.data.data){
                this.setState({
                    datalist:res.data.data
                })
            }
        })
       
    }
	render(){
		return (
			<div id="home">
				<nav>
					<div id="left">
						<img src={logo}/>
					</div>
					<div id="right">
						<span>登录</span>
					</div>
				</nav>
				
			{	
//				<ReactSwiper className="carousel" swipeOptions={{continuous:true,auto:3000}} key={this.state.datalist.length}>
//               {
//                   this.state.datalist.map((item)=>
//                       <div key={item.id}>
//                            <img src={"oss.static.nubia.cn/" + item.small_image
//} style={{width:'100%'}} />
//                       </div>
//                   )
//               }
//             </ReactSwiper>
            }
               
               
				
				<div>
				</div>
				
				<div>
				</div>
				
				<div>
				</div>
				
			</div>
		)
	}
}

export default Home