import { Button, Avatar } from "@heroui/react";
import { Link } from "react-router-dom";
import {
  HiHome,
  HiUser,
  HiDotsHorizontal,
} from "react-icons/hi";
import { FaFeatherAlt } from "react-icons/fa";

const LeftSidebar = () => {

  const navItems = [
    { icon: <HiHome className="text-2xl" />, label: "Home", path: "/" },
    { icon: <HiUser className="text-2xl" />, label: "Profile", path: "/profile" },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 py-6 pr-4">
      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-4 px-6 py-4 rounded-full transition-all duration-200 group hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-blue-500/10 hover:text-white `}
            >
              <span className="text-slate-400 dark:text-slate-400 light:text-[#5c7a99] group-hover:text-blue-400 transition-colors">
                {item.icon}
              </span>
              <span className="text-slate-400 dark:text-slate-400 light:text-[#3d5a80] group-hover:text-blue-500 dark:group-hover:text-white transition-colors">{item.label}</span>
            </Link>
          );
        })}

        {/* Create Post Button */}
        <div className="pt-4 px-2">
          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg py-7 rounded-full hover:scale-105"
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
