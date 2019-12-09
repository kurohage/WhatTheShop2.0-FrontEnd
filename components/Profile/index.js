import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const Profile = props => {
  if (!authStore.user)
    return (
      <Card>
        <CardItem>
          <Button danger onPress={() => props.navigation.navigate("Login")}>
            <Text>Login</Text>
          </Button>
        </CardItem>
      </Card>
    );

  console.log("PROFILE", authStore.user.profile.email);
  return (
    <Card>
      <Text>
        Hello {authStore.user.user_id}
        {"\n"}
        {authStore.user.profile.user.first_name}{" "}
        {authStore.user.profile.user.last_name}
        {"\n"}
        {authStore.user.profile.email}
        {"\n"}@{authStore.user.profile.user.username}
      </Text>
      <CardItem>
        <Button danger onPress={authStore.logout}>
          <Text>Logout</Text>
        </Button>
      </CardItem>
    </Card>
  );
};
export default observer(Profile);
