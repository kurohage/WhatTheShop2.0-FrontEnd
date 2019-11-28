import { decorate, observable } from "mobx";
import axios from "axios";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class ProductStore {
  products = [];
  loading = true;

  fetchAllProducts = async () => {
    try {
      const res = await instance.get("products/");
      const products = res.data;
      this.products = products;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(ProductStore, {
  products: observable,
  loading: observable
});

const productStore = new ProductStore();
// Persistent Login
productStore.fetchAllProducts();

export default productStore;
