import React from "react";
import { withNavigation } from "react-navigation";
import { Icon, Button } from "native-base";
import { observer } from "mobx-react";

// Stores
import authStore from "../../stores/authStore";

const LoginLogoutButton = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Login");
  };
  return (
    <>
      {!authStore.user ? (
        <Icon name="login" type="Entypo" onPress={handlePress} containerStyle />
      ) : (
        <Icon
          name="log-out"
          type="Entypo"
          onPress={() => authStore.logout(navigation)}
          containerStyle
        />
      )}
    </>
  );
};

export default withNavigation(observer(LoginLogoutButton));
