import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

// Style
import styles from "./styles";
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return <ListItem style={styles.listStyle}></ListItem>;
};

export default CartItem;
