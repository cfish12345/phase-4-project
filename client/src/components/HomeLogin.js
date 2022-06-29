import React, { useState } from 'react'

const HomeLogin = ({ onLogin }) => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState('')
    const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username, password
    }
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then( e => setErrors(Object.entries(e.error).flat()))
      }
    });
  }

  return (
    <div className="home-login">
        <form onSubmit={handleSubmit}>
            <h2>Login with username/password</h2>
            <input 
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Enter username..."
            className="input-text"
            />
            <br />
            <input
            type="text"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter password..."
            className="input-text" 
            />
            <input type="submit" value="Sign up" />
            <input type="submit" value="Login" onClick={() => setLogin(true)} />
        </form>
    </div>
  )
}

export default HomeLogin