import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu  } from "react-icons/ai";
import logo from "../../assets/logo.svg";
import "./navbar.css";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  }
  return (
    <header>
      <div className="container nav">
        <img src={logo} alt="logo" />
        <div className="links">
          <a href="#">اطلق موقعك مجانًا</a>
          <a href="#">اطلب مصمم محترف</a>
          <a href="#">مواقع صُممت بويب فلو</a>
        </div>
        <div className="mobile">
          <div className="menu-icon" onClick={toggleMenu}>
            {menu ? <AiOutlineClose size={25} style={{color:"#4353ff"}} /> : <AiOutlineMenu size={25} style={{color:"#4353ff"}} />}
          </div>
          {menu && (
            <div className="scale-up-ver-top menu-items">
              <a href="#">اطلق موقعك مجانًا</a>
              <a href="#">اطلب مصمم محترف</a>
              <a href="#">مواقع صُممت بويب فلو</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
