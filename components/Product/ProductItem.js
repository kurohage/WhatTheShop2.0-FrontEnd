import React from "react";
import { withNavigation } from "react-navigation";
import { Image, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles.js";

const Product = ({ product, navigation }) => {
  const handlePress = () =>
    navigation.navigate("ProductDetailsList", {
      productId: product.id,
      productName: product.name
    });

  return (
    <>
      <View style={styles.overlay} />
      <ListItem button onPress={handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Image
                source={{ uri: product.image_url }}
                style={{ width: 150, height: 150, left: -9 }}
              />
              <Text style={styles.text}>
                {product.name}
                {"\n"}
                {"\n"}Price: {product.price}
              </Text>
            </Left>
          </CardItem>
        </Card>
      </ListItem>
    </>
  );
};

export default withNavigation(Product);
