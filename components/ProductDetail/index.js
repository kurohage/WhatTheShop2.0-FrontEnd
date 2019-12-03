import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  List,
  Card,
  Content,
  Left,
  Right,
  Body,
  Text,
  CardItem,
  Button
} from "native-base";

import { Image } from "react-native";

import NumericInput from "react-native-numeric-input";

import Icon from "react-native-ionicons";

// Stores
import cartStore from "../../stores/cartStore";

// Component
import CartButton from "../Buttons/CartButton";
import LogInOutButton from "../Buttons/LogInOutButton";

class ProductDetail extends Component {
  state = {
    glasses_on: false,
    name: this.props.navigation.getParam("product").name,
    size: "",
    quantity: 1,
    total_price: ""
  };

  handleAdd = () => {
    cartStore.addItemToCart(this.state);
  };

  toggleGlasses = () => {
    this.setState({ glasses_on: !this.state.glasses_on });
  };

  render() {
    product = this.props.navigation.getParam("product");
    return (
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>{product.name}</Text>
                <Text note>KWD {product.price}</Text>
              </Body>
            </Left>
            <Right>
              <Text note>KG {product.weight}</Text>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: product.image }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <NumericInput
                selectedValue={this.state.quantity}
                onChange={quantity => this.setState({ quantity })}
                initValue={1}
              />
            </Left>
            <Body>
              <Button full onPress={this.handleAdd}>
                <Text>Add</Text>
              </Button>
            </Body>
            <Right>
              <Icon
                name="glasses"
                style={
                  this.state.glasses_on
                    ? { color: "white" }
                    : { color: "black" }
                }
                onPress={() => this.toggleGlasses}
              ></Icon>
            </Right>
          </CardItem>
        </Card>
        <Text>{product.description}</Text>
      </Content>
    );
  }
}

ProductDetail.navigationOptions = {
  title: "Product Detail",
  headerRight: (
    <>
      <LogInOutButton />
      <CartButton />
    </>
  )
};

export default observer(ProductDetail);
