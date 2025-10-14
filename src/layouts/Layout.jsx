import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="layout_content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
