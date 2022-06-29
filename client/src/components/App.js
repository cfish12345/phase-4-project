import React, { useEffect, useState } from "react";
import Boss from "./Boss"
import Item from "./Item"
import Tasklist from "./Tasklist"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home";
import HomeLogin from './HomeLogin'


function App() {

  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  if(!currentUser) return <Home setCurrentUser={setCurrentUser}/>

  return (
    <>
      <Navbar />
      <div className="app" >
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Boss" element={<Boss />} />
          <Route path="/Item" element={<Item />} />
          <Route path="/Tasklist" element={<Tasklist />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
