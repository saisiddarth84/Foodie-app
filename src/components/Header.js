import {LOGO_URL} from '../utils/constants'

const Header = () => {
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
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li className="cart-container">
            <img
              src={LOGO_URL}
              className="cart-image"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
