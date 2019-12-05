import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Button,
  Content,
  Form,
  Item,
  Header,
  Input,
  Label,
  Text,
  View
} from "native-base";

import { StyleSheet, TouchableOpacity } from "react-native";

import Accordion from "react-native-collapsible/Accordion";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    activeSections: []
  };

  handleLogin = () => {
    authStore.login(
      { username: this.state.username, password: this.state.password },
      this.props.navigation
    );
  };

  handleRegister = () => {
    authStore.register(this.state, this.props.navigation);
  };

  ComponentDidMount() {
    if (authStore.user) {
      this.props.navigation.navigate("Profile");
    }
  }

  // Accordion rendering functions
  _renderSectionTitle = section => {
    return (
      <View>
        <Text></Text>
      </View>
    );
  };

  _renderHeader = section => {
    if (this.state.activeSections.length == 0)
      return (
        <View>
          <Text style={styles.buttonReg}>Register +</Text>
        </View>
      );
    else
      return (
        <View>
          <Text style={styles.buttonRegCollapsed}>Register -</Text>
        </View>
      );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  _renderContent = section => {
    return (
      <Form>
        <Item floatingLabel rounded>
          <Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First Name</Label>
          <Input
            autoCapitalize="none"
            onChangeText={first_name => this.setState({ first_name })}
          />
        </Item>
        <Item floatingLabel rounded>
          <Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last Name</Label>
          <Input
            autoCapitalize="none"
            onChangeText={last_name => this.setState({ last_name })}
          />
        </Item>
        <Item floatingLabel rounded>
          <Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email Address</Label>
          <Input
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
          />
        </Item>
        <Text></Text>
        <Button dark onPress={this.handleRegister}>
          <Text>Register</Text>
        </Button>
      </Form>
    );
  };

  render() {
    return (
      <>
        <Form>
          <Item floatingLabel rounded>
            <Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Username</Label>
            <Input
              autoCapitalize="none"
              onChangeText={username => this.setState({ username })}
            />
          </Item>
          <Item floatingLabel rounded>
            <Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password</Label>
            <Input
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Text></Text>
          {this.state.activeSections.length ? (
            <>
              <Text></Text>
              <Text></Text>
            </>
          ) : (
            <Button success full onPress={this.handleLogin}>
              <Text>Login</Text>
            </Button>
          )}
        </Form>

        <Accordion
          activeSections={this.state.activeSections}
          sections={["Register"]}
          renderHeader={this._renderHeader}
          renderSectionTitle={this._renderSectionTitle}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </>
    );
  }
}
export default observer(Login);

// Styles
const styles = StyleSheet.create({
  buttonReg: {
    backgroundColor: "blue",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 12,
    color: "white",
    fontSize: 16,
    //fontWeight: "bold",
    overflow: "hidden",
    padding: 12,
    textAlign: "center"
  },
  buttonRegCollapsed: {
    backgroundColor: "transparent",
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 12,
    color: "red",
    fontSize: 16,
    //fontWeight: "bold",
    overflow: "hidden",
    padding: 12,
    textAlign: "center"
  }
});
