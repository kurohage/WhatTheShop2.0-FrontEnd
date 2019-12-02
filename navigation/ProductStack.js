import { createStackNavigator } from "react-navigation-stack";

// Components
import ProductList from "../components/Product";
import ProductDetail from "../components/ProductDetail";
import CartList from "../components/Cart";

const ProductStack = createStackNavigator(
  {
    ProductList: ProductList,
    ProductDetail: ProductDetail,
    Cart: CartList
  },
  {
    defaultNavigationOptions: {
      title: "Product List"
    }
  }
);

export default ProductStack;
