import Header from "./layouts/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./layouts/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
