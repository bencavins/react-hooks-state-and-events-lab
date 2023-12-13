import React from "react";
import Item from "./Item";

import { useState } from "react";

function ShoppingList({ items }) {
  const [selectedCat, setSelectedCat] = useState("All")

  function handleChange(event) {
    // console.log(event.target.value)
    setSelectedCat(event.target.value)
  }

  const filteredItems = items.filter(item => {
    // this if/else is redundant
    // if (item.category === selectedCat) {
    //   return true
    // } else {
    //   return false
    // }

    // if (selectedCat === 'All') {
    //   return true
    // } else {
    //   return item.category === selectedCat // true or false
    // }

    return (selectedCat === 'All') || (item.category === selectedCat)
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange} value={selectedCat}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
