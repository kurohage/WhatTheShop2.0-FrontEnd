import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Body,
  Card,
  CardItem,
  Content,
  Left,
  Right,
  Text,
  List,
  View
} from "native-base";

// Stores
import authStore from "../../stores/authStore";

// Components
import OrderItem from "./OrderItem";

class OrderList extends Component {
  render() {
    const { orders } = authStore.user.profile;

    const orderList = orders.map(order => (
      <OrderItem order={order} key={order.id} />
    ));

    return (
      <View>
        {/* Order List */}
        {orderList}
      </View>
    );
  }
}

export default observer(OrderList);
