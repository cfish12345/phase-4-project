import React, { useState, useEffect } from 'react'
import Header from "./Header"
import HomeLogin from "./HomeLogin"

function Home() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/auth").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }


  return (
    <div>
      <Header user={user} onLogout={handleLogout}/>
      <HomeLogin onLogin={handleLogin}/>
    </div>
  )
}

export default Home