import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./compnents/Home";
import Product from "./compnents/Product";
import Login from "./compnents/Auth/Login";
import Logout from "./compnents/Auth/Logout";

function App() {
  const [token, setToken] = useState('');
  let tokenNew  = localStorage.getItem('token');
  useEffect(() => {
    setToken(tokenNew);
  }, [tokenNew]);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px",
          padding: "10px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        {!token?<Link to="/login">Login</Link>:''}
        {token?<Link to="/logout">Logout</Link>:''}
      </div>
      <Routes>
      {token? <><Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/logout" element={<Logout />} /></> :
        <><Route path="/login" element={<Login />} /></>}
        
      </Routes>
    </div>
  );
}

export default App;
