import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Image, View } from "react-native";

// Stores
import cartStore from "../../stores/cartStore";

// NativeBase Components
import {
  ListItem,
  Button,
  Card,
  CardItem,
  Left,
  Picker,
  Text
} from "native-base";

// Style
import styles from "./styles";

class ProductItem extends Component {
  state = {
    // product: this.props.product,
    name: this.props.product.name,
    size: "L",
    quantity: 1
    // total_price: ""
  };

  handlePress = () =>
    this.props.navigation.navigate("ProductDetail", {
      product: this.props.product
    });

  tacklePress = () => {
    cartStore.addItemToCart(this.state);
    cartStore.addItemToAsyncStorage(this.state);
  };

  render() {
    const { product } = this.props;
    return (
      <ListItem button style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem
            style={styles.transparent}
            button
            onPress={this.handlePress}
          >
            <Left>
              <Image
                source={{ uri: product.image }}
                style={{ width: 150, height: 150, left: -9 }}
              />
              <Left style={{ flexDirection: "column" }}>
                <Text style={styles.text}>
                  {product.name}
                  {"\n"}Price: {product.price}KD
                  {"\n"}
                </Text>
                <Button success onPress={this.tacklePress}>
                  <Text>Add to Cart</Text>
                </Button>
              </Left>
            </Left>
          </CardItem>
        </Card>
      </ListItem>
    );
  }
}

export default withNavigation(ProductItem);
