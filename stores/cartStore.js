import { computed, decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";
import { instance } from "./instance";

class CartStore {
  items = [];

  addItemToCart = async item => {
    const product = this.items.find(product => item.name === product.name);

    if (product) product.quantity += item.quantity;
    else this.items.push(item);

    AsyncStorage.setItem("Cart", JSON.stringify(this.items));
    console.log("Items Added" + JSON.stringify(this.items));
  };

  removeItemFromCart = item => {
    this.items = this.items.filter(filteringitem => item !== filteringitem);
    AsyncStorage.setItem("Cart", JSON.stringify(this.items));
    console.log("Items Now" + JSON.stringify(this.items));
  };

  checkoutCart = () => {
    this.items = [];
    alert("Thank you for shopping with us!");
  };

  get quantity() {
    let total = 0;
    this.items.forEach(item => (total += item.quantity));
    return total;
  }

  get total_price() {
    let total_price = 0;
    this.items.forEach(item => (total_price += item.quantity * item.price));
    return total_price;
  }

  retrieveItems = async () => {
    retrieved_items = await AsyncStorage.getItem("Cart");
    this.items = JSON.parse(retrieved_items);
    console.log("Items", retrieved_items);
  };

  // postToBackend = async items => {
  //   try {
  //     const res = await instance.post("orders/", items);
  //     const items = res.data;
  //     // this.items.unshift(items);
  //     this.errors = null;
  //   } catch (err) {
  //     this.errors = errToArray("Error", err.response.data);
  //   }
  // };

  // submit = async event => {
  //   event.preventDefault();
  //   await cartStore.postToBackend(this.items);
  // };
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

const cartStore = new CartStore();
cartStore.retrieveItems();
export default cartStore;
