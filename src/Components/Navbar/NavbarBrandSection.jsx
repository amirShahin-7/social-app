import { Link } from "react-router-dom";
import { HiOutlineSparkles } from "react-icons/hi2";

const NavbarBrandSection = () => {
  return (
    <Link to="" className="flex items-center gap-3 group">
      <div className="relative">
        <div className="w-10 h-10 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 light:from-[#005acd] light:via-[#0093cb] light:to-[#6dd7fd] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 dark:shadow-blue-500/30 light:shadow-[#005acd]/30 group-hover:shadow-blue-500/50 dark:group-hover:shadow-blue-500/50 light:group-hover:shadow-[#005acd]/50 transition-all duration-300 group-hover:scale-105">
          <HiOutlineSparkles className="text-white text-xl" />
        </div>
        <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-500 dark:from-blue-500 dark:to-purple-500 light:from-[#005acd] light:to-[#0093cb] rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold bg-linear-to-r from-white via-blue-100 to-white dark:from-white dark:via-blue-100 dark:to-white light:from-[#005acd] light:via-[#0093cb] light:to-[#005acd] bg-clip-text text-transparent">
          Socialify
        </span>
        <span className="text-[10px] text-slate-400 dark:text-slate-400 light:text-[#3d5a80] tracking-wider uppercase">
          Connect & Share
        </span>
      </div>
    </Link>
  );
};

export default NavbarBrandSection;
