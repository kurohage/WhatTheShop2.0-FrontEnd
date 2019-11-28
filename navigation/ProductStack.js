import { createStackNavigator } from "react-navigation-stack";

// Components
import ProductList from "../components/Product/";

const ProductStack = createStackNavigator(
  {
    ProductList: ProductList
  },
  {
    defaultNavigationOptions: {
      title: "Product List"
    }
  }
);

export default ProductStack;
