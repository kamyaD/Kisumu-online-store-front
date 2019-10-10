import React, { Component } from "react";
import "./Shop.css";
import GlobalStore from "../../globalStore";

class ShopItem extends Component {
  add = () => {
    this.context.addToCart({...this.props});
  }
    
  render() {
    if (!this.props.name) return <div className="product"></div>;

    return (
      <div className="product">
        <img src={this.props.img} alt="" />
        <p>
          <b>{this.props.name}</b>
        </p>
        <p>
          <b>On Sale:</b>KShs.{this.props.price}
        </p>
        <p>
          <b>Description:</b>
          {this.props.description}
        </p>
        <p>
          <button type="button" onClick={this.add} class="btn btn-primary">
            Add to cart
          </button>
        </p>
      </div>
    );
  }
}

ShopItem.contextType = GlobalStore;

export default ShopItem;
