import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Text } from "native-base";
import { observer } from "mobx-react";

// Stores
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CheckoutButton = ({ navigation }) => {
  const handlePress = () => {
    if (authStore.user) cartStore.checkoutCart;
    navigation.navigate("Login");
  };
  return (
    <>
      <Button full danger onPress={handlePress}>
        <Text>Checkout</Text>
      </Button>
    </>
  );
};

export default withNavigation(observer(CheckoutButton));
