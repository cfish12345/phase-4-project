import React, { useState, useEffect } from 'react'
import ItemContainer from "./ItemContainer"

function Item() {

    const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/items", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then((r) => r.json())
      .then(setItems);
  }, []);

  function handleUpdateItem(updatedItem) {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
  }



  return (
    <div>
        <ItemContainer
        items={items}
        onUpdateItem={handleUpdateItem}
        />
    </div>
  )
}

export default Item