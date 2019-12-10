import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

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
  Content,
  Spinner
} from "native-base";
import { View, Image } from "react-native";

// Stores
import authStore from "../../stores/authStore";

// Components
import CartButton from "../Buttons/CartButton";
import LoginLogoutButton from "../Buttons/LoginLogoutButton";
import OrderList from "../Order";

//const Profile = props => {
class Profile extends Component {
  render() {
    if (!authStore.user) this.props.navigation.replace("Login");
    if (authStore.loading) return <Spinner />;
    console.log("profile image: ", authStore.user.profile.image);

    return (
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Image
                source={{
                  uri: authStore.user.profile.image
                }}
                style={{
                  width: 120,
                  height: 120,
                  left: -9,
                  borderRadius: 120 / 2,
                  overflow: "hidden"
                }}
              />
              <Body>
                <Text style={{ fontSize: 20 }}>
                  {authStore.user.profile.user.first_name}
                  {"\n"}
                  {authStore.user.profile.user.last_name}
                </Text>
                <Text note style={{ fontSize: 16 }}>
                  @{authStore.user.profile.user.username}
                </Text>
                <Text note style={{ fontSize: 16 }}>
                  {authStore.user.profile.email}
                </Text>
                <Text style={{ fontSize: 16, lineHeight: 20 }}>
                  Total Orders: {authStore.user.profile.orders.length}
                </Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <OrderList />
      </Content>
    );
  }
}

Profile.navigationOptions = {
  title: "Profile Page",
  headerRight: (
    <>
      <LoginLogoutButton />
      <CartButton />
    </>
  )
};

export default withNavigation(observer(Profile));
