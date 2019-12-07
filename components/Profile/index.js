import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const Profile = props => {
  // const profile = await AsyncStorage.getItem("myProfile");
  // console.log(profile);
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
  // cleaned
  return (
    <Card>
      <Text>Hello {authStore.user.user_id}</Text>
      <CardItem>
        <Button danger onPress={authStore.logout}>
          <Text>Logout</Text>
        </Button>
      </CardItem>
    </Card>
  );
};
export default observer(Profile);
