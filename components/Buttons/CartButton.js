import React from "react";
import { withNavigation } from "react-navigation";
import { Icon, Spinner, Text } from "native-base";
import { observer } from "mobx-react";

// Stores
import cartStore from "../../stores/cartStore";

const CartButton = ({ navigation }) => {
  if (cartStore.loading) return <Spinner />;

  return (
    <>
      <Icon
        name="shoppingcart"
        type="AntDesign"
        onPress={() => navigation.navigate("Cart")}
        containerStyle
      />
      <Text>{cartStore.quantity}</Text>
    </>
  );
};

export default withNavigation(observer(CartButton));
