import { Navbar, NavbarBrand, NavbarContent } from "@heroui/react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import NavbarBrandSection from "./NavbarBrandSection";
import NavbarWelcome from "./NavbarWelcome";
import NavbarActions from "./NavbarActions";
import NavbarProfileDropdown from "./NavbarProfileDropdown";
import { useUserData } from "../../hooks/useUserData";

const NavbarComponent = () => {
  const { setToken } = useContext(AuthContext);
  const { data } = useUserData();
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("userToken");
  };

  return (
    <Navbar
      isBordered
      className="
        bg-linear-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 
        dark:from-slate-900/95 dark:via-slate-800/95 dark:to-slate-900/95 
        light:from-white/90 light:via-[#f5ffff]/95 light:to-white/90
        backdrop-blur-xl 
        border-b border-white/10 dark:border-white/10 light:border-[#6dd7fd]/30
        shadow-lg shadow-blue-500/5 dark:shadow-blue-500/5 light:shadow-[#005acd]/10
      "
      maxWidth="full"
    >
      {/* Brand Section */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <NavbarBrandSection />
        </NavbarBrand>
      </NavbarContent>

      {/* Right Section */}
      <NavbarContent as="div" className="items-center gap-4" justify="end">
        <NavbarWelcome userName={data?.name} />
        <NavbarActions />
        <NavbarProfileDropdown userData={data} onLogout={handleLogout} />
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
