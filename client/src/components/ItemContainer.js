import React, { useState } from 'react';
import ItemCard from './ItemCard';

function ItemContainer ({ onUpdateItem, items }) {

    const itemCards = items.map((item) => (
        <ItemCard
            key={item.id}
            item={item}
            onUpdateItem={onUpdateItem}
        />
    ));



  return (
    <div id="item-collection">{itemCards}</div>
  )
}

export default ItemContainer