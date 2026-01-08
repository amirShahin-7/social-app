import { Badge } from "@heroui/react";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { BiMessageSquareDots } from "react-icons/bi";

const NavbarActions = () => {
  return (
    <div className="hidden sm:flex gap-2.5 ">
      {/* Notification Bell */}
      <Badge content="3" color="danger" shape="circle" size="sm">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
          <HiOutlineBellAlert className="text-slate-300 text-xl" />
        </button>
      </Badge>

      {/* Messages */}
      <Badge content="5" color="primary" shape="circle" size="sm">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
          <BiMessageSquareDots className="text-slate-300 text-xl" />
        </button>
      </Badge>
    </div>
  );
};

export default NavbarActions;
