import { decorate, observable } from "mobx";
import jwt_decode from "jwt-decode";

import { instance } from "./instance";

// Async Storage
import { AsyncStorage } from "react-native";

class AuthStore {
  user = null;
  loading = true;

  setUser = async token => {
    if (token) {
      // Save token to localStorage.
      await AsyncStorage.setItem("myToken", token);
      // Set token to Auth header.
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      // Set current user.
      this.user = jwt_decode(token);
      this.loading = false;
    } else {
      await AsyncStorage.removeItem("myToken");
      delete instance.defaults.headers.common.Authorization;
      this.user = null;
      this.loading = true;
    }
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;
      await this.setUser(user.access);
      navigation.navigate("Profile");
      // Instead navigate to previous page.
      // navigation.goBack();
    } catch (err) {
      console.error("something went wrong logging in", err);
    }
  };

  logout = async navigation => {
    await this.setUser();
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info.
      const user = jwt_decode(token);
      // Check token expiration.
      if (user.exp >= currentTime) {
        // Set Auth token header.
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };

  register = async (userData, navigation) => {
    try {
      await instance.post("register/", userData);
      this.login(userData, navigation);
    } catch (err) {
      console.error("signup error", err);
    }
  };
}

decorate(AuthStore, {
  user: observable,
  loading: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
