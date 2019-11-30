import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Stores
import productStore from "../../stores/productStore";

// Component
import Item from "./Item";
import CartButton from "../Buttons/CartButton";
import LogInOutButton from "../Buttons/LogInOutButton";

const ProductList = () => {
  if (productStore.loading) return <Spinner />;
  const productList = productStore.products.map(product => (
    <Item product={product} key={product.id} />
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
      <LogInOutButton />
      <CartButton />
    </>
  )
};

export default observer(ProductList);
