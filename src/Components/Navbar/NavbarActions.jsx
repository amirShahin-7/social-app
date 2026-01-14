import { Badge } from "@heroui/react";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { BiMessageSquareDots } from "react-icons/bi";
import ThemeToggle from "./ThemeToggle";

const NavbarActions = () => {
  return (
    <div className="hidden sm:flex gap-2.5 ">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Notification Bell */}
      <Badge content="3" color="danger" shape="circle" size="sm">
        <button className="w-10 h-10 flex items-center justify-center rounded-full 
          bg-white/5 dark:bg-white/5 light:bg-[#005acd]/10
          border border-white/10 dark:border-white/10 light:border-[#0093cb]/30
          hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-[#005acd]/20
          hover:border-white/20 dark:hover:border-white/20 light:hover:border-[#0093cb]/50
          transition-all duration-200"
        >
          <HiOutlineBellAlert className="text-slate-300 dark:text-slate-300 light:text-[#005acd] text-xl" />
        </button>
      </Badge>

      {/* Messages */}
      <Badge content="5" color="primary" shape="circle" size="sm">
        <button className="w-10 h-10 flex items-center justify-center rounded-full 
          bg-white/5 dark:bg-white/5 light:bg-[#005acd]/10
          border border-white/10 dark:border-white/10 light:border-[#0093cb]/30
          hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-[#005acd]/20
          hover:border-white/20 dark:hover:border-white/20 light:hover:border-[#0093cb]/50
          transition-all duration-200"
        >
          <BiMessageSquareDots className="text-slate-300 dark:text-slate-300 light:text-[#005acd] text-xl" />
        </button>
      </Badge>
    </div>
  );
};

export default NavbarActions;
