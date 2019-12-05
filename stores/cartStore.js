import { computed, decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";

class CartStore {
  items = [];

  addItemToCart = async item => {
    const product = this.items.find(product => item.name === product.name);

    if (product) product.quantity += item.quantity;
    else this.items.push(item);

    AsyncStorage.setItem("Cart", JSON.stringify(this.items));
    console.log("Items Added" + JSON.stringify(this.items));
  };

  removeItemFromCart = item =>
    (this.items = this.items.filter(filteringitem => item !== filteringitem));

  checkoutCart = () => {
    this.items = [];
    alert("Thank you for shopping with us!");
  };

  get quantity() {
    let total = 0;
    this.items.forEach(item => (total += item.quantity));
    return total;
  }

  retrieveCart = async () => {
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
cartStore.retrieveCart();
export default cartStore;
