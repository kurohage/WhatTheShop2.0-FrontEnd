import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

// Style
import styles from "./styles";

// Stores
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <ListItem style={styles.listStyle}>
      <Left>
        <Text style={styles.itemStyle}> {item.name} </Text>
        <Text style={styles.itemStyle}> {item.size} </Text>
        <Text style={styles.itemStyle}>{item.quantity}</Text>
        <Text style={styles.itemStyle}>{item.price}</Text>
      </Left>
      <Right>
        <Button transparent onPress={() => cartStore.removeItemFromCart(item)}>
          <Icon name="trash" style={styles.removeItem} />
        </Button>
      </Right>
    </ListItem>
  );
};

export default CartItem;
