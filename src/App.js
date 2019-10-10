import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Shop from "./components/shop/Shop";
import GlobalStore from "./globalStore";
import { tsConstructorType } from "@babel/types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/shop/Checkout";

const ItemsView = () => {
  return (
    <React.Fragment>
      <Shop />
    </React.Fragment>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      addToCart: this.addToCart,
      updateCart: this.updateCart
    };
  }

  addToCart = item => this.setState(state => ({ cart: [...state.cart, item] }));

  updateCart = (cart) => {
    this.setState({
      cart
    })
  }

  render() {
    return (
      <GlobalStore.Provider value={this.state}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/shop" component={ItemsView}/>
              <Route exact path="/checkout" component={Checkout} />
            </Switch>
          </div>
        </Router>
      </GlobalStore.Provider>
    );
  }
}

export default App;
