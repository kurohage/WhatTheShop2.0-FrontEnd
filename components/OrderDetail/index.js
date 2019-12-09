import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Body, Card, CardItem, Content, Left, Right, Text } from "native-base";

// Stores
import authStore from "../../stores/authStore";

// Component
import CartButton from "../Buttons/CartButton";
import LoginLogoutButton from "../Buttons/LoginLogoutButton";
import ItemRow from "./ItemRow";

class OrderDetail extends Component {
  // Calculate the total price of all items in a given object -- this should go into a store somewhere, and it should be sent the current order object
  getTotalItems = order => {
    let total = 0;
    order.items.forEach(item => (total += item.price * item.quantity));
    return total;
  };

  render() {
    //order = this.props.navigation.getParam("order"); // uncomment when profile order list is done -- each item should send an order object here
    order = authStore.user.profile.orders[1]; // Take the second order from the array for testing purposes -- works for admin as the user has 2 items in that order
    //console.log("Order detail: ", order);

    const itemList = order.items.map(item => (
      <ItemRow item={item} key={item.id} />
    ));

    return (
      <Content>
        {/* Order details page header */}
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Body>
                <Text>{Date(order.date)}</Text>
                <Text note>Order ID: {order.id}</Text>
              </Body>
            </Left>
            <Right>
              <Text note>KD {this.getTotalItems(order)}</Text>
            </Right>
          </CardItem>
        </Card>

        {/* Odder details: items section */}

        {itemList}
      </Content>
    );
  }
}

OrderDetail.navigationOptions = {
  title: "Order Detail",
  headerRight: (
    <>
      <LoginLogoutButton />
      <CartButton />
    </>
  )
};

export default observer(OrderDetail);
