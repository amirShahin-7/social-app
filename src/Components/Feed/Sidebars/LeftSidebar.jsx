import { Button, Avatar } from "@heroui/react";
import { Link } from "react-router-dom";
import { HiHome, HiUser } from "react-icons/hi";
import { FaFeatherAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const LeftSidebar = () => {
  const navItems = [
    {
      icon: (
        <HiHome className="text-2xl hover:scale-110 transition-transform" />
      ),
      label: "Home",
      path: "/",
    },
    {
      icon: (
        <HiUser className="text-2xl hover:scale-110 transition-transform" />
      ),
      label: "Profile",
      path: "/profile",
    },
    {
      icon: (
        <IoSettingsOutline className="text-2xl hover:rotate-180 transition-transform" />
      ),
      label: "Settings",
      path: "/settings",
    },
  ];

  return (
    <aside
      className="hidden lg:flex flex-col w-64 h-fit mt-8  sticky top-0 py-6 pr-4 bg-white/80 dark:bg-slate-800/60
      backdrop-blur-md rounded-2xl 
      border border-[#6dd7fd]/30 dark:border-white/10 shadow-sm shadow-[#005acd]/10 dark:shadow-blue-500/5 hover:shadow-lg hover:shadow-[#005acd]/20 dark:hover:shadow-blue-500/10
      hover:scale-102 transition-all"
    >
      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-4 px-6 py-4 rounded-full transition-all duration-200 group dark:hover:bg-slate-800/60 hover:bg-blue-500/10 hover:text-white `}
            >
              <span className="dark:text-white/60 text-[#5c7a99] group-hover:text-blue-400 transition-colors">
                {item.icon}
              </span>
              <span className="dark:text-white/60 text-[#3d5a80] group-hover:text-blue-500 dark:group-hover:text-white transition-colors">
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Create Post Button */}
        <div className="pt-4 px-2">
          <Button
            className="w-full bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg py-7 rounded-full hover:scale-105 transition-scale"
            startContent={<FaFeatherAlt className="text-xl" />}
          >
            Post
          </Button>
        </div>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
