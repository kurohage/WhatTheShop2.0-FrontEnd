import React from "react";
import { withNavigation } from "react-navigation";
import { Icon, Button } from "native-base";
import { observer } from "mobx-react";

// Stores
import authStore from "../../stores/authStore";

const LogInOutButton = ({ navigation }) => {
  const handlePress = () => {
    if (!authStore.user) navigation.navigate("Login");
  };
  return (
    <>
      {authStore.user ? (
        <Icon name="login" type="Entypo" onPress={handlePress} containerStyle />
      ) : (
        <Icon
          name="log-out"
          type="Entypo"
          onPress={handlePress}
          containerStyle
        />
      )}
    </>
  );
};

export default withNavigation(observer(LogInOutButton));
