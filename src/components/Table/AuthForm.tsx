import React, { useState } from "react";
import "./AuthForm.css";

const AuthForm: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ login, password });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="center">Authorization</h2>
      <div>
        <label>Login:</label>
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Authorize</button>
    </form>
  );
};

export default AuthForm;