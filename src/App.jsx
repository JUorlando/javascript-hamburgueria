import React from "react";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Container } from "./styles/container";
import { useState } from "react";
import { toast } from "react-toastify";

export const App = () => {
  const [products, setProducts] = useState([]);

  const [filtredProducts, setFiltredProducts] = useState("");

  const [currentSale, setCurrentSale] = useState([]);

  const [count, setCount] = useState(1);

  const showProducts = !filtredProducts
    ? products
    : products.filter((iten) =>
        iten.name.toLowerCase().includes(filtredProducts.toLowerCase())
      );

  function handleClick(id) {

    const current = products.find((element) => element.id === id);

    setCurrentSale((oldProducts) => { 

      if(!oldProducts.find((element) => element.id === current.id)){

        return [...oldProducts, current]
      } else {

        toast.warn("Iten já adicionado ao Carrinho")

        return oldProducts
      }
    });

  }

  function removeCard(id) {
    const newList = currentSale.filter((card) => card.id !== id);
    setCurrentSale(newList);
  }

  return (
    <>
      <Header
        filtredProducts={filtredProducts}
        setFiltredProducts={setFiltredProducts}
      />
    <Container>
      <ProductList
        products={showProducts}
        setProducts={setProducts}
        handleClick={handleClick}
        count={count}
        setCount={setCount}
      />
      <Cart
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        removeCard={removeCard}
        count={count}
        setCount={setCount}
      />
    </Container>
    
    </>
  );
};
