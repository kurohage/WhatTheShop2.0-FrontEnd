import { computed, decorate, observable } from "mobx";

class CartStore {
  items = [];

  addItemToCart = item => {
    const product = this.items.find(
      product => item.name === product.name && item.price === product.price
    );

    if (product) product.quantity += item.quantity;
    else this.items.push(item);
  };

  get quantity() {
    let total = 0;
    this.items.forEach(item => (total += item.quantity));
    return total;
  }
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

const cartStore = new CartStore();

export default cartStore;
