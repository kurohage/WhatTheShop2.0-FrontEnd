import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import OrderDetailScreen from "../components/OrderDetail";
import LoginScreen from "../components/Login";
import CartList from "../components/Cart";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    Cart: CartList,
    OrderDetail: OrderDetailScreen
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default ProfileStack;
