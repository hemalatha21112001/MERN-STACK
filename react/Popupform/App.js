import React, { useState } from "react";

const App = () => {
  const [page, setPage] = useState("home"); // home | details | login
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Handle form input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login
  const handleLogin = () => {
    setLoginSuccess(true);
    setPage("login");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

    //Home page/
      {page === "home" && (
        <div>
          <h1> Home Page</h1>
          <button onClick={() => setPage("details")}>Go to Details Page</button>
        </div>
      )}

    //Details//
      {page === "details" && (
        <div>
          <h1> Details Page</h1>

          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          /><br /><br />

          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          /><br /><br />

          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      //Login page//
      {page === "login" && (
        <div>
          <h1> Login Page</h1>

          {loginSuccess && (
            <h2 style={{ color: "green" }}>✔ Login Successful!</h2>
          )}

          <button onClick={() => setPage("home")}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;
