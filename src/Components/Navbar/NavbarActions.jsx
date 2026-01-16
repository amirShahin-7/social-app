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
      <Badge
        content="3"
        color="danger"
        shape="circle"
        size="sm"
        variant="faded"
      >
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full 
          bg-[#005acd]/10 dark:bg-white/5
          border border-[#0093cb]/30 dark:border-white/10
          hover:bg-[#005acd]/20 dark:hover:bg-white/10
          hover:border-[#0093cb]/50 dark:hover:border-white/20
          transition-all duration-200"
        >
          <HiOutlineBellAlert className="text-[#005acd] dark:text-slate-300 text-xl" />
        </button>
      </Badge>

      {/* Messages */}
      <Badge
        content="5"
        color="success"
        variant="faded"
        shape="circle"
        size="sm"
      >
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full 
          bg-[#005acd]/10 dark:bg-white/5
          border border-[#0093cb]/30 dark:border-white/10
          hover:bg-[#005acd]/20 dark:hover:bg-white/10
          hover:border-[#0093cb]/50 dark:hover:border-white/20
          transition-all duration-200"
        >
          <BiMessageSquareDots className="text-[#005acd] dark:text-slate-300 text-xl" />
        </button>
      </Badge>
    </div>
  );
};

export default NavbarActions;
