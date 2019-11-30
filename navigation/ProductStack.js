import { createStackNavigator } from "react-navigation-stack";

// Components
import ProductList from "../components/Product";
import CartList from "../components/Cart";

const ProductStack = createStackNavigator(
  {
    ProductList: ProductList,
    Cart: CartList
  },
  {
    defaultNavigationOptions: {
      title: "Product List"
    }
  }
);

export default ProductStack;
