import React, { Component } from "react";
import { Spinner } from "native-base";
import { StyleSheet } from "react-native";
import AppContainer from "./navigation";

export default class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });

    await Expo.Font.loadAsync({
      Ionicons: require("react-native-ionicons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="white" />;
    }
    return <AppContainer />;
  }
}
