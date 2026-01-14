import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";
import { HiOutlineUser, HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavbarProfileDropdown = ({ userData, onLogout }) => {
  return (
    <Dropdown placement="bottom-end" className="mt-2">
      <DropdownTrigger>
        <div className="relative group">
          <Avatar
            isBordered
            as="button"
            className="transition-all duration-300 ring-2 ring-offset-2 
              ring-offset-slate-900 dark:ring-offset-slate-900 light:ring-offset-white
              ring-purple-500/50 dark:ring-purple-500/50 light:ring-[#005acd]/50
              group-hover:ring-purple-400 dark:group-hover:ring-purple-400 light:group-hover:ring-[#005acd]
              group-hover:scale-105 cursor-pointer"
            color="secondary"
            size="md"
            radius="full"
            src={userData?.photo}
            fallback={<HiOutlineUser className="text-xl text-slate-400 dark:text-slate-400 light:text-[#3d5a80]" />}
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-900 dark:border-slate-900 light:border-white" />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Profile Actions"
        className="w-56 p-2 
          bg-slate-800/95 dark:bg-slate-800/95 light:bg-white/95
          backdrop-blur-xl 
          border border-white/10 dark:border-white/10 light:border-[#6dd7fd]/30
          rounded-xl shadow-xl"
      >
        <DropdownItem
          key="user-info"
          textValue="user info"
          className="h-16 gap-3 opacity-100 pointer-events-none"
        >
          <div className="flex items-center gap-3">
            <Avatar
              size="sm"
              src={userData?.photo}
              className="ring-2 ring-purple-500/30 dark:ring-purple-500/30 light:ring-[#005acd]/30"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white dark:text-white light:text-[#1e3a5f]">
                {userData?.name || "User"}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-400 light:text-[#5c7a99]">
                {userData?.email || "user"}
              </span>
            </div>
          </div>
        </DropdownItem>

        <DropdownItem
          key="profile"
          textValue="profile"
          startContent={<HiOutlineUser className="text-lg text-blue-400 dark:text-blue-400 light:text-[#005acd]" />}
          className="py-3 text-slate-200 dark:text-slate-200 light:text-[#1e3a5f] hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-[#bef0ff]/50 rounded-lg transition-colors"
        >
          <Link to="/profile" className="block w-full">
            My Profile
          </Link>
        </DropdownItem>

        <DropdownItem
          key="settings"
          textValue="settings"
          startContent={<IoSettingsOutline className="text-lg text-gray-500 dark:text-gray-500 light:text-[#5c7a99]" />}
          className="py-3 text-slate-200 dark:text-slate-200 light:text-[#1e3a5f] hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-[#bef0ff]/50 rounded-lg transition-colors"
        >
          <Link to="/settings" className="block w-full">
            Settings
          </Link>
        </DropdownItem>

        <DropdownItem
          key="logout"
          textValue="logout"
          startContent={<HiOutlineArrowRightOnRectangle className="text-lg" />}
          className="py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
          color="danger"
        >
          <Link onClick={onLogout} to="/auth/login" className="block w-full">
            Sign Out
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarProfileDropdown;
