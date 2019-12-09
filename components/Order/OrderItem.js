import React, { Component } from "react";

// Navigation
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Body, Card, CardItem, Left, Text, Thumbnail } from "native-base";

class OrderRow extends Component {
  render() {
    const order = this.props.order;
    return (
      <Text>
        Order of {order.items.length} items placed on {order.date}
      </Text>
    );
  }
}

export default withNavigation(OrderRow);
