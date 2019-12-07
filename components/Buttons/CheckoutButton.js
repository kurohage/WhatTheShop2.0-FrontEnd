import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Text } from "native-base";
import { observer } from "mobx-react";

// Stores
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CheckoutButton = ({ navigation }) => {
  const handlePress = () => {
    if (authStore.user) {
      cartStore.checkoutCart();
      // Can't clear Cart beacause of the iteration methods running over cart items
      cartStore.passItems(cartStore.items);
      setTimeout(function() {
        // Block will be executed after a 3 second delay
        navigation.navigate("ProductList");
      }, 3000);
    } else navigation.navigate("Login");
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
