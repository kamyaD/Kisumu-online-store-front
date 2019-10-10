import React from "react";
import ShopItems from "./shopItem";
import GlobalStore from "../../globalStore";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

class Cart extends ShopItems {
  state = {
    cart: this.context.cart,
    total: 0
  };

  componentDidMount() {
    const { cart } = this.state;
    if (cart.length > 0) {
      const total = this.getTotal(cart);
      this.setState({
        total
      });
    }
  }

  getTotal = cart => {
    const price = [];
    cart.map(el => {
      price.push(el.price);
    });
    return price.reduce((el, curr) => el + curr);
  };

  remove = itemName => {
    const { cart } = this.state;
    const updatedCart = cart.filter(el => itemName !== el.name);
    this.context.updateCart(updatedCart);
    const total =
      updatedCart.length === 0
        ? 0
        : updatedCart.length === 1
        ? updatedCart[0].price
        : this.getTotal(updatedCart);
    this.setState({
      cart: updatedCart,
      total
    });
  };

  handleToken = (token, addresses) => {
    const { cart, total } =  this.state;
    const response = axios
      .post("http://localhost:8080/checkout", {
        token,
        product: {name: cart.map(el => el.name), price: this.state.total}
      })
      .then(response => {
        console.log(response);
        const { status } = response.data;
        if (status === "success") {
          toast.success("Success! check email for details!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        } else {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { cart, total } = this.state;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      onClick={() => this.remove(item.name)}
                      class="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <th>Total</th>
              <th></th>
              <th>{total}</th>
              <td>   <StripeCheckout
          stripeKey="pk_test_DO50XJ4J9hdj601hlm6ZzNXf000NzQIhYi"
          token={this.handleToken}
          billingAddress
          shippingAddress
          amount={Number(total)}
          name={cart.map(el => el.name)}
        /></td>
            </tr>
          </tbody>
        </table>
     

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </div>
    );
  }
}

Cart.defaultProps = {
  items: []
};

Cart.contextType = GlobalStore;

export default Cart;
