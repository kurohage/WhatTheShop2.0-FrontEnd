import React from "react";
import { withNavigation } from "react-navigation";
import { ImageBackground, View } from "react-native";

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
              <Thumbnail
                bordered
                source={{ uri: product.image_url }}
                style={styles.thumbnail}
              />
              <Text style={styles.text}>{product.name}</Text>
              <Text note style={styles.text}>
                {product.price}
              </Text>
            </Left>
          </CardItem>
        </Card>
      </ListItem>
    </>
  );
};

export default withNavigation(Product);
