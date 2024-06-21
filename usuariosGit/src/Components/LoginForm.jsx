import React, { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }


  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div>
          <div>
            <label>Username: </label>
            <input
              type="text"
              placeholder="Enter your username"
              style={{ width: "100px" }}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              placeholder="Enter your pass"
              style={{ width: "100px" }}
            />
          </div>
          <button type="submit" style={{margin: '15px'}}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
