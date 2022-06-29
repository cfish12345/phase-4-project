import React from 'react'
import { Link } from "react-router-dom";

function Header ({ user, onLogout }) {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }


  return (
    <div id="boss-header">Welcome to OsrsLogger!
        <img src ="https://oldschool.runescape.wiki/images/thumb/Theatre_of_Blood_monumental_chest.gif/200px-Theatre_of_Blood_monumental_chest.gif?b769d" 
        alt="boss header"
        />
        {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/"></Link>
      )}
    </div>
  )
}

export default Header