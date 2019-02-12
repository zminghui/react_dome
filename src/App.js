import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './home'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
class App extends React.Component{
  render(){
    return(
      <Router>
          <div style={{margin:'10px'}}>
            <Route path="/" component={Home} />
            <Route path="/Page1" component={Page1} />
            <Route path="/Page2" component={Page2}/>
            <Route path="/page3" component={Page3}/>
          </div>
      </Router>
    )
  }
}


export default App