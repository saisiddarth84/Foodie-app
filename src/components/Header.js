import { useState } from "react";
import { Link } from "react-router-dom"


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log('Header rendered')

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated
  // useEffect(() => {
  //   console.log("useEffect called");
  // },[btnNameReact])
  
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e30b7652732001.591ae569026e0.jpg"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="cart">
            Cart
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
