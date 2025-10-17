import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  let arr = [
    { label: "Snippets code", path: "/snippets" },
    { label: "Learn code", path: "/learn" },
    { label: "Demo code", path: "/demo" },
    { label: "Rss code", path: "/rss" },
    { label: "Life code", path: "/life" },
    { label: "Search code", path: "/search" },
  ];

  return (
    <div className="header">
      <div className="container">
        <div className="header_content">
          <div className="header_content_logo">
            <h3>ANONYSTICK</h3>
            <p>= DEVELOPER BLOG =</p>
          </div>

          <button className="login-button" onClick={() => navigate("/Login")}>
            Đăng Nhập
          </button>

          <button
            className="register-button"
            onClick={() => navigate("/Register")}
          >
            Đăng Ký
          </button>
        </div>

        <ul className="header_menu">
          {arr.map((item, index) => (
            <li
              className="header_menu_item"
              key={index}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
