import React from 'react'
// props用法
class View extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render(){
        return(<div>{this.props.text}</div>)
    }
}
export default View