import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Image, View } from "react-native";

// Stores
import productStore from "../../stores/productStore";
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

// const Product = ({ product, navigation }) => {
class ProductItem extends Component {
  state = {
    name: "",
    size: "L",
    quantity: 1
  };

  handlePress = () =>
    navigation.navigate("ProductDetailsList", {
      productId: product.id,
      productName: product.name
    });

  tacklePress = () => cartStore.addItemToCart(this.state);

  // changeSize = value =>
  //   this.setState({
  //     size: value
  //   });

  updateName = value =>
    this.setState({
      name: value
    });

  render() {
    const { product } = this.props;
    return (
      <ListItem button style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Image
                source={{ uri: product.image }}
                style={{ width: 150, height: 150, left: -9 }}
              />
              <Left style={{ flexDirection: "column" }}>
                <Text style={styles.text}>
                  {product.name}
                  {"\n"}
                  {product.description}
                  {"\n"}Price: {product.price}KD
                </Text>
                {/* <Picker
                  note
                  mode="dropdown"
                  style={styles.picker}
                  onValueChange={this.changeSize}
                  selectedValue={this.state.size}
                  placeholder="Choose Size"
                >
                  <Picker.Item label="Small" value="S" />
                  <Picker.Item label="Medium" value="M" />
                  <Picker.Item label="Large" value="L" />
                </Picker> */}
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
