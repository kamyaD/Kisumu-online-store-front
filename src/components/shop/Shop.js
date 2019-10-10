import React, { Component } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import Pagination from "pagination-react";

import "react-toastify/dist/ReactToastify.min.css";
import "./Shop.css";
import ShopItem from "./shopItem";

import img1 from "./img/Sweat.jpg";
import img2 from "./img/shirt.jpg";
import img3 from "./img/shoe.jpeg";
import img4 from "./img/trouser.jpg";
import img5 from "./img/handbag.jpg";
import img6 from "./img/womenshirt.jpg";
import img7 from "./img/womenshirt.jpg";
import img8 from "./img/womenshirt.jpg";
import globalStore from "../../globalStore";

const items = [
  {
    img: img1,
    name: "Mens SweatShirt",
    price: 1500,
    description: "Brand new SweatShirt"
  },
  {
    img: img2,
    name: "Mens office Shirt",
    price: 1200,
    description: "size X white brand new Shirt"
  },
  {
    img: img3,
    name: "Mens Shoe",
    price: 1500,
    description: "Brand new men shoe, white, size 41"
  },
  {
    img: img4,
    name: "Mens Sports pants",
    price: 1000,
    description: "Sports pants, strechy and new"
  },
  {
    img: img5,
    name: "Women hand bag",
    price: 1500,
    description: "Three in one hand bag"
  },
  {
    img: img6,
    name: "Women office Shirt",
    price: 1200,
    description: "size X sky blue brand new Shirt"
  },
  {
    img: img6,
    name: "Women office Shirt",
    price: 1200,
    description: "size X sky blue brand new Shirt"
  },
  {
    img: img6,
    name: "Women office Shirt",
    price: 1200,
    description: "size X sky blue brand new Shirt"
  },
  {
    img: img6,
    name: "Women office Shirt",
    price: 1200,
    description: "size X sky blue brand new Shirt"
  }
];

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  onChange = e => {
    this.setState({
      search: e.target.value
    });
  };
  render() {
    const { search } = this.state;
    const filteredItems = items.filter(item => {
      return (
        item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
      );
    });
  
    return (
      <div className="container">
        <div className="search">
          <input
            placeholder="Search Item.."
            icon="search"
            onChange={this.onChange}
          />
        </div>

        <div className="products-container">
          {filteredItems.map((item, index) => {
            return (
              <ShopItem {...item} key={index} addToCart={this.addToCart} />
            );
          })}
        </div>
        <div className="products-container">
        <Pagination
          count={6}
          groupCount={16}
          selectedCount={1}
          setUpdate={handle => (this.updatePagination = handle)}
          callback={index => console.log(index)}
        />
        </div>
      </div>
    );
  }
}

Shop.contextType = globalStore;

export default Shop;
