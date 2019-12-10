import React, { Component } from "react";
import { Button } from "native-base";

// Navigation
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Body, Card, CardItem, Left, Text, Thumbnail } from "native-base";

class OrderRow extends Component {
  handlePress = () =>
    this.props.navigation.navigate("OrderDetail", {
      order: this.props.order
    });

  render() {
    const order = this.props.order;
    return (
      <Card style={{ flex: 0 }}>
        <CardItem button onPress={this.handlePress}>
          <Left>
            <Button sucess onPress={this.handlePress}>
              <Text>Preview</Text>
            </Button>
            <Body>
              <Text>
                Order of {order.items.length} items placed on {Date(order.date)}
              </Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(OrderRow);
