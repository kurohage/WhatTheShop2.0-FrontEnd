import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Right,
  Body,
  // Image,
  Content
} from "native-base";
import { View, Image } from "react-native";

// Stores
import authStore from "../../stores/authStore";

// Components
import CartButton from "../Buttons/CartButton";
import LoginLogoutButton from "../Buttons/LoginLogoutButton";

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

  return (
    <Content>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Image
              source={{
                uri:
                  "https://ca.slack-edge.com/T06U9C8QK-UN7QT3US2-8e9cce964e79-512"
              }}
              style={{
                width: 130,
                height: 130,
                left: -9,
                borderRadius: 130 / 2,
                overflow: "hidden"
              }}
            />
            <Body>
              <Text style={{ fontSize: 22, align: "center" }}>
                {authStore.user.profile.user.first_name}{" "}
                {authStore.user.profile.user.last_name}
              </Text>
              <Text note style={{ fontSize: 19 }}>
                @{authStore.user.profile.user.username}
              </Text>
              <Text note style={{ fontSize: 16 }}>
                {authStore.user.profile.email}
              </Text>
              <Text style={{ fontSize: 16, lineHeight: 40 }}>
                Total Orders: {authStore.user.profile.orders.length}
              </Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    </Content>
  );
};

Profile.navigationOptions = {
  title: "Profile Page",
  headerRight: (
    <>
      <LoginLogoutButton />
      <CartButton />
    </>
  )
};

export default observer(Profile);
