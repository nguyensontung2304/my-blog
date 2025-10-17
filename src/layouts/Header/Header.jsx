import { useContext } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Header() {
  const { isLogged, logout, user } = useContext(AuthContext);
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
          <div className="header_content_logo" onClick={() => navigate("/")}>
            <h3>ANONYSTICK</h3>
            <p>= DEVELOPER BLOG =</p>
          </div>

          {!isLogged ? (
            <>
              <button
                className="login-button"
                onClick={() => navigate("/Login")}
              >
                Đăng Nhập
              </button>
              <button
                className="register-button"
                onClick={() => navigate("/register")}
              >
                Đăng Ký
              </button>
            </>
          ) : (
            <div>
              <button className="register-button" onClick={logout}>
                {user.firstName} - Logout
              </button>
            </div>
          )}
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
