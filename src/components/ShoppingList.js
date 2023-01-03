import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [displayItems, setDisplayItems] = useState([...items])

  function onCategoryChange() {
    const categoryFilter = document.getElementById('category-filter')
    setDisplayItems(items.filter(item => item.category === categoryFilter.value))
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select id='category-filter' name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
