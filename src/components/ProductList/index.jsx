import React, { useEffect, useState } from "react";
import { Products } from "../Products";
import { getProducts } from "../../services/api";
import { StyledProductList } from "./style";

export const ProductList = ({products, setProducts, handleClick}) => {

  useEffect(() => {
    function onSucess(data) {
      setProducts(data);
    }

    function onError(error) {
      return error.message
    }

    getProducts(onSucess, onError);
  }, []);

  return (
    <StyledProductList>
      <ul>
        <Products
          products={products}
          handleClick={handleClick}
        />
      </ul>
    </StyledProductList>
  );
};
