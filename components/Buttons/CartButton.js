import React from "react";
import { withNavigation } from "react-navigation";
import { Icon, Text } from "native-base";
import { observer } from "mobx-react";

// Stores
import cartStore from "../../stores/cartStore";

const CartButton = ({ navigation }) => {
  return (
    <>
      <Text>{cartStore.quantity}</Text>
      <Icon
        name="shoppingcart"
        type="AntDesign"
        onPress={() => navigation.navigate("Cart")}
        containerStyle
      />
    </>
  );
};

export default withNavigation(observer(CartButton));
