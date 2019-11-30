import React from "react";
import { withNavigation } from "react-navigation";
import { Image, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Text, Left, Button } from "native-base";

// Style
import styles from "./styles.js";
import { green } from "ansi-colors";

const Product = ({ product, navigation }) => {
  const handlePress = () =>
    navigation.navigate("ProductDetailsList", {
      productId: product.id,
      productName: product.name
    });
  const tacklePress = () => cartStore.addItemToCart(this.state);

  return (
    <>
      {/* <View style={styles.overlay} /> */}
      <ListItem button onPress={handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Image
                source={{ uri: product.image_url }}
                style={{ width: 150, height: 150, left: -9 }}
              />
              <Left style={{ flexDirection: "column" }}>
                <Text style={styles.text}>
                  {product.name}
                  {"\n"}
                  {product.description}
                  {"\n"}Price: {product.price}KD
                </Text>
                <Button success>
                  <Text>Add to Cart</Text>
                </Button>
              </Left>
            </Left>
          </CardItem>
        </Card>
      </ListItem>
    </>
  );
};

export default withNavigation(Product);
