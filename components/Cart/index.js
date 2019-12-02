import React, { Component } from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";

class CartList extends Component {
  render() {
    const cartItems = cartStore.items.map(item => (
      <CartItem item={item} key={`${item.size} ${item.price}`} />
    ));

    return (
      <List>
        {cartItems}
        <Button full danger onPress={cartStore.checkoutCart}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

CartList.navigationOptions = {
  title: "Items in Cart"
};

export default observer(CartList);
