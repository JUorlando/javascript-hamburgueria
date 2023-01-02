import { ProductCart } from "./style";
import { FiTrash2 } from "react-icons/fi"

export const CartProduct = ({currentSale, count, setCount, setCurrentSale, removeCard}) => {

  return (
    <>
    {currentSale.map(element => (
        <ProductCart key={element.id}>
          <img src={element.img} alt={element.name}/>
          <div className="text">
          <div className="nameButton">
          <h2>{element.name}</h2>
          <button onClick={() => removeCard(element.id)}><FiTrash2/></button>
          </div>
          <p>{element.category}</p>
          </div>
        </ProductCart>
    ))}
    </>
  );
};
