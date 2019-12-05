import { computed, decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";

class CartStore {
  items = [];

  addItemToCart = item => {
    const product = this.items.find(product => item.name === product.name);

    if (product) product.quantity += item.quantity;
    else this.items.push(item);
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

  addItemToAsyncStorage = async item => {
    // if (item) {
    //   await AsyncStorage.setItem("myItem", item);
    //   console.log("Item", this.item);
    // }
    try {
      var items_list = [];

      var item = {
        name: item.name,
        size: item.size,
        quantity: item.quantity
        // price: item.price
      };

      AsyncStorage.getItem("Cart", (err, res) => {
        if (!res) {
          alert("Empty Cart!");
          AsyncStorage.setItem("Cart", JSON.stringify([items_list]));
        } else {
          items_list.push(item);
          AsyncStorage.setItem(
            "Cart",
            JSON.stringify(items_list),
            console.log("Item added" + JSON.stringify(items_list))
          );
          alert("Item added to cart");
          console.log(items_list);
        }
      });
    } catch (error) {
      alert(err);
    }
  };
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

const cartStore = new CartStore();

export default cartStore;
