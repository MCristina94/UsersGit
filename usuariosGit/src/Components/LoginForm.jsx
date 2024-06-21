import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({login}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
      if(username === 'admin' && password==='1234'){
        login();
      }else{
        alert('Incorrect Credentials')
      }
    }


  return (
    <div>
      <form
        onSubmit={handleSubmit}
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "100px" }}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              placeholder="Enter your pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
