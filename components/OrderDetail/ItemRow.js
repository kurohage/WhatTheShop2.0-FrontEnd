import React, { Component } from "react";

// Adding this for later, in case when we want to click on a product item and it'll take us to that product's details page
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Body, Card, CardItem, Left, Text, Thumbnail } from "native-base";

class ItemRow extends Component {
  render() {
    const item = this.props.item;
    let image = "http://beanies.mbhbox.net" + item.product.image;

    return (
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri: image
              }}
            />
            <Body>
              <Text>
                {item.quantity} of {item.product.name}
              </Text>
              <Text note>KD {item.price} per piece</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(ItemRow);
