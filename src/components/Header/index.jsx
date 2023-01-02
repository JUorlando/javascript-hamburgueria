import React from "react";
import { StyledHeader } from "./style";

export const Header = ({filtredProducts, setFiltredProducts}) => {

  const handleSearch = (event) => {
    event.preventDefault()
    setFiltredProducts(event.target.value)
  }

  return (
    <StyledHeader>
      <h1>
        Burguer<span> Kenzie</span>
      </h1>
      <form>
        <input type="text" placeholder="Pesquise seu lanche" value={filtredProducts} onChange={handleSearch}></input>
        <button>Pesquisar</button>
      </form>
    </StyledHeader>
  );
};
