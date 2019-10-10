import React, { Component } from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";
import Shop from "./../shop/Shop";
import "./Menu.css";
import GlobalStore from "../../globalStore";
import { Link } from "react-router-dom";

class Menu extends Component {
  constructor() {
    super();
    this.state = [
      {
        name: "",
        description: "",
        Price: ""
      }
    ];
  }

  render() {
    let store = this.context;
    return (
      <div className="menu">
        <div className="container menu-content">
            <ul>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <a href="#car">Car Rental</a>
              </li>
              <li>
                <a href="#computer">Computer Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <Link to="/checkout">
                  <MaterialIcon icon="shopping_cart" />
                  <span>{store.cart.length}</span>
                </Link>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}

Menu.contextType = GlobalStore;

export default Menu;
