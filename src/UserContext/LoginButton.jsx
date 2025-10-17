import { useContext } from "react";
import { UserContext } from "./UserContext";

function LoginButton() {
  const { setUser } = useContext(UserContext);
  return (
    <button onClick={() => setUser({ name: "Nguyễn Sơn Tùng" })}>
      Đăng nhập
    </button>
  );
}

export default LoginButton;
