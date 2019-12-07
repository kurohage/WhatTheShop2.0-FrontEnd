import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Text } from "native-base";
import { observer } from "mobx-react";

// Stores
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CheckoutButton = ({ navigation }) => {
  const handlePress = () => {
    if (authStore.user) cartStore.checkoutCart();
    else navigation.navigate("Login");
    // Can't clear Cart beacause of the iteration methods running over cart items
  };
  return (
    <>
      <Button full danger onPress={handlePress}>
        <Text>Checkout Total: {cartStore.total_price.toFixed(3)}KD</Text>
      </Button>
    </>
  );
};

export default withNavigation(observer(CheckoutButton));
