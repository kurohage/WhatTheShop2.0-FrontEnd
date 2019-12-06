import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Stores
import productStore from "../../stores/productStore";

// Component
import ProductItem from "./ProductItem";
import CartButton from "../Buttons/CartButton";
import LoginLogoutButton from "../Buttons/LoginLogoutButton";

const ProductList = () => {
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
  title: "Product List",
  headerRight: (
    <>
      <LoginLogoutButton />
      <CartButton />
    </>
  )
};

export default observer(ProductList);
