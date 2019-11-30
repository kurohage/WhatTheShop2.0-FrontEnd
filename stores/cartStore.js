import { computed, decorate, observable } from "mobx";

class CartStore {
  items = [];

  addItemToCart = item => {
    const existingItem = this.items.find(
      existingItem =>
        item.option === existingItem.option && item.drink === existingItem.drink
    );

    if (existingItem) existingItem.quantity += item.quantity;
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
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

const cartStore = new CartStore();

export default cartStore;
