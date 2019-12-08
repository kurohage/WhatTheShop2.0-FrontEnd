import { computed, decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";
import { instance } from "./instance";

class CartStore {
  items = [];

  addItemToCart = async item => {
    const product = this.items.find(product => item.name === product.name);

    if (product) product.quantity += item.quantity;
    else this.items.push(item);

    await AsyncStorage.setItem("Cart", JSON.stringify(this.items));
    console.log("Items Added" + JSON.stringify(this.items));
  };

  removeItemFromCart = async item => {
    this.items = this.items.filter(filteringitem => item !== filteringitem);
    await AsyncStorage.setItem("Cart", JSON.stringify(this.items));
    console.log("Items Now" + JSON.stringify(this.items));
  };

  checkoutCart = async () => {
    let list = { items: this.items };
    try {
      console.log("Before", list);
      await instance.post("order_create/", list);
      this.errors = null;
      this.items = [];
      await AsyncStorage.setItem("Cart", JSON.stringify(this.items));
      alert("Thank you for shopping with us!");
    } catch (err) {
      console.log("ERROR", err);
      this.errors = errToArray(err.response.data);
    }
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
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

const cartStore = new CartStore();
cartStore.retrieveItems();
export default cartStore;
