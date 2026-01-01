import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavbarComponent from "../Navbar/NavbarComponent";

const MainLayout = () => {
  return (
    <>
      <NavbarComponent />
      <main className="container mx-auto px-3 sm:px-0 py-10 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
