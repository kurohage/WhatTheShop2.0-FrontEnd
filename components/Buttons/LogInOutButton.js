import React from "react";
import { withNavigation } from "react-navigation";
import { Icon } from "native-base";
import { observer } from "mobx-react";

// Stores
import authStore from "../../stores/authStore";

const LogInOutButton = ({ navigation }) => {
  return (
    <Icon
      name="login"
      type="Entypo"
      onPress={() => navigation.navigate("LoginScreen")}
      containerStyle
    />
  );
};

export default withNavigation(observer(LogInOutButton));
