import React, { Component } from "react";

// NativeBase Components
import { List, Spinner } from "native-base";

// Component
import CheckoutButton from "../Buttons/CheckoutButton";
import CartItem from "./CartItem";
import { observer } from "mobx-react";

// Stores
import cartStore from "../../stores/cartStore";

class CartList extends Component {
  render() {
    if (cartStore.loading) return <Spinner />;

    const cartItems = cartStore.items.map(item => (
      <CartItem item={item} key={`${item.size} ${item.price}`} />
    ));

    return (
      <List>
        {cartItems}
        <CheckoutButton />
      </List>
    );
  }
}

CartList.navigationOptions = {
  title: "Items in Cart"
};

export default observer(CartList);
