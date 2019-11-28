import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Button, Text, Spinner } from "native-base";

// Stores
import productStore from "../../stores/productStore";

// Component
import ProductItem from "./ProductItem";

const ProductList = ({ navigation }) => {
  if (productStore.loading) return <Spinner />;
  const productList = productStore.products.map(product => (
    <ProductItem product={product} key={product.id} />
  ));
  return (
    <Content>
      <List>{productList}</List>
    </Content>
  );
};

ProductList.navigationOptions = {
  title: "Product List"
};

export default observer(ProductList);
