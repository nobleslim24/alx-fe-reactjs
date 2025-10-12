import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("All fields are required!");
    } else {
      setError("");
      console.log("Form submitted:", { username, email, password });
      alert("Form submitted (controlled component)!");
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>

      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
