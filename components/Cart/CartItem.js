import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

// Style
import styles from "./styles";
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <ListItem style={styles.listStyle}>
      <Left>
        <Text style={styles.size}> {item.size} </Text>
        <Text note style={styles.price}>
          {item.price}
        </Text>
      </Left>
      <Body>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </Body>
      <Right>
        <Button transparent onPress={() => cartStore.removeItemFromCart(item)}>
          <Icon name="trash" style={styles.removeItem} />
        </Button>
      </Right>
    </ListItem>
  );
};

export default CartItem;
