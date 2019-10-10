import React, {Component} from 'react';



class Routing extends Component {
  render(){
    return(
      <Router>
        <Route path="/checkout" component={Checkout}></Route>
      </Router>
    )
  }
}

export default Routing;