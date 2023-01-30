import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  const liClass = isInCart ? 'in-cart' : ''
  const btnText = isInCart ? 'Remove from Cart' : 'Add to Cart'

  function handleClick(event) {
    setIsInCart(prevValue => !prevValue)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className="add"
        onClick={handleClick} >{btnText}</button>
    </li>
  );
}

export default Item;
