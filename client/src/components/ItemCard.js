import React, { useState } from 'react'

function ItemCard ({ onUpdateItem, item }) {


  const [isDropped, setIsDropped] = useState(true)
    
  const { has_drop, image_url, title } = item;

  

  return (
    <div className="card">
      <h1>{title}</h1>
      <img src={image_url} alt={title} className="item-avatar" />
      <p className="item-boss">{item.boss.name}: {item.rarity}</p>
      <p className="has-drop">Has Drop: {String(has_drop)}</p>
    </div>
  )
}

export default ItemCard;