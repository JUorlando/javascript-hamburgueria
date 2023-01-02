import React from "react";
import { StyledProducts } from "./styles";

export const Products = ({ products, handleClick }) => {
  return (
    <>
      {products.map((iten) => (
        <StyledProducts key={iten.id}>
          <div>
          <img src={iten.img} alt={iten.name} />
          </div>
          <h2>{iten.name}</h2>
          <p>{iten.category}</p>
          <p className="price">R$ {iten.price}</p>
          <button id={iten.id} onClick={() => handleClick(iten.id)}>
            Adicionar
          </button>
        </StyledProducts>
      ))}
    </>
  );
};
