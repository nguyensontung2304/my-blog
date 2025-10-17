import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "../contexts/AuthContext";
import "./Layout.css";

function Layout() {
  return (
    <AuthContextProvider>
      <div className="layout">
        <Header />
        <main className="layout_content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default Layout;
