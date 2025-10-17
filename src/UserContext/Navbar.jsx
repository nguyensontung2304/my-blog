import { useContext } from "react";
import { UserContext } from "./UserContext";

function Navbar() {
  const { user } = useContext(UserContext);
  return <h2>👋 Xin chào {user ? user.name : "Khách"}</h2>;
}

export default Navbar;
