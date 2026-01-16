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
        from-white/60 via-[#f5ffff] to-white/20
        dark:from-slate-900/95 dark:via-slate-800/95 dark:to-slate-900/95 
        bg-linear-to-r
        backdrop-blur-xl 
        border-b border-[#6dd7fd]/30 dark:border-white/10
        shadow-lg shadow-[#005acd]/10 dark:shadow-blue-500/5
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
