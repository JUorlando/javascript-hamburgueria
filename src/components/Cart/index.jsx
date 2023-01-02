import React from "react";
import { CartProduct } from "../CartProduct";
import { CardTotal } from "../CartTotal";
import { StyledCart } from "./style";

export const Cart = ({ currentSale, setCurrentSale, removeCard, count, setCount}) => {
  return (
    <StyledCart>
      <h3>Carrinho de compras</h3>
      <ul>
        <CartProduct
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          removeCard={removeCard}
          count={count}
          setCount={setCount}
        />
      </ul>
      <div className="total">
        <CardTotal
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          count={count}
          setCount={setCount}
        />
      </div>
    </StyledCart>
  );
};
