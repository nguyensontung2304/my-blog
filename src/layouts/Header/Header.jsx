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

  const lish = arr.map((value, index) => {
    return <li key={index}>{value}</li>;
  });

  return (
    <div className="header">
      <div className="container">
        <h3>ANONYSTICK</h3>
        <p>= DEVELOPER BLOG =</p>
      </div>

      <ul className="menu">
        {arr.map((item, index) => (
          <li key={index} onClick={() => navigate(item.path)}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Header;
