import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavbarComponent from "../Navbar/NavbarComponent";
import PageBackground from "./PageBackground";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <NavbarComponent />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
