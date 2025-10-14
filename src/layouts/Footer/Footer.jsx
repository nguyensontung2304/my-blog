import "./Footer.css";
import React from "react";

const Footer = () => {
  let arr = ["About", "FAQ", "Privacy", "Tipjs"];

  const menu = arr.map((value, index) => {
    return (
      <li className="footer_menu_item" key={index}>
        {value}
      </li>
    );
  });

  return (
    <div className="footer">
      <div className="container">
        <div className="footer_content">
          <ul className="footer_menu">{menu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
