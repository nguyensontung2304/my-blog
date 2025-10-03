import "./Footer.css";
import React from "react";

const Footer = () => {
  let arr = ["About", "FAQ", "Privacy", "Tipjs"];

  const menu = arr.map((value, index) => {
    return <li key={index}>{value}</li>;
  });

  return (
    <div className="footer_x">
      <div className="container">
        <div className="footer_X">
          <div className="footer">
            <span className="footer1">DMCA</span>
            <span className="footer2">PROTECTED</span>
          </div>

          <ul className="menu">{menu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
