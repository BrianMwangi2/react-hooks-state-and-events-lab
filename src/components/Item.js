import React, { useState } from "react";

function Item({ name, category }) {
  // State variable to track whether the item is in the cart or not
  const [isInCart, setIsInCart] = useState(false);

  // Function to handle adding or removing the item from the cart
  const toggleCartStatus = () => {
    setIsInCart(prevStatus => !prevStatus);
  };

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Button dynamically changes text based on cart status */}
      <button className="add" onClick={toggleCartStatus}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
