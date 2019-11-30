import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text, Label } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: ""
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

  render() {
    return (
      <>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input
              autoCapitalize="none"
              onChangeText={username => this.setState({ username })}
            />
          </Item>
          <Item last>
            <Input
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button full onPress={this.handleLogin}>
            <Text>Login</Text>
          </Button>
        </Form>

        <Form>
          <Item>
            <Input
              placeholder="First Name"
              autoCapitalize="none"
              onChangeText={first_name => this.setState({ first_name })}
            />
          </Item>
          <Item>
            <Input
              placeholder="Last Name"
              autoCapitalize="none"
              onChangeText={last_name => this.setState({ last_name })}
            />
          </Item>
          <Item>
            <Input
              placeholder="Email Address"
              autoCapitalize="none"
              textContentType="emailAddress"
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Button full onPress={this.handleRegister}>
            <Text>Register</Text>
          </Button>
        </Form>
      </>
    );
  }
}
export default observer(Login);
