import React from 'react'
import { Link } from 'react-router-dom';
import {Segment,Menu,Image} from 'semantic-ui-react'
class Home extends React.Component{
    render(){
        return(
            <div>
                <Image rounded src={require("./img/timg.jpg")}/>
                <Menu>
                    <Menu.Item>
                        <Link to="/Page1/" style={{color:'black'}}>
                            <div>点击跳转page1</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/Page2/" style={{color:'black'}}>
                            <div>点击跳转page2</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/Page3/" style={{color:'black'}}>
                            <div>点击跳转page3</div>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
            
        )
    }
}
export default Home