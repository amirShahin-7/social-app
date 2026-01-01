import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const NavbarComponent = () => {
  const { setToken } = useContext(AuthContext);
  return (
    <>
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <Link
              to=""
              className="font-bold bg-linear-to-r from-blue-500 to-blue-400 bg-clip-text  text-transparent flex items-center text-xl"
            >
              <span className="text-3xl px-3 py-1 bg-blue-500/30 mr-2 rounded-xl">
                S
              </span>
              Social App
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Dropdown className="mt-4" placement="bottom-center">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                size="sm"
                radius="full"
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              />
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              className="text-center outline-none"
            >
              <DropdownItem textValue="profile" key="profile">
                <Link to="/profile" className="block">
                  Profile
                </Link>
              </DropdownItem>

              <DropdownItem
                key="logout"
                textValue="logout"
                className="text-danger outline-none"
                color="danger"
              >
                <Link
                  onClick={() => {
                    setToken(null);
                    localStorage.removeItem("userToken");
                  }}
                  to="/auth/login"
                  className="block"
                >
                  Logout
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
