import { Link } from "react-router-dom";
import { HiOutlineSparkles } from "react-icons/hi2";

const FooterBrand = () => {
  return (
    <div className="space-y-5">
      <Link to="/" className="flex items-center gap-3 group w-fit">
        <div className="relative">
          <div className="w-10 h-10 bg-linear-to-br from-[#005acd] via-[#0093cb] to-[#6dd7fd] dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-[#005acd]/30 dark:shadow-blue-500/30 group-hover:shadow-[#005acd]/50 dark:group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-105">
            <HiOutlineSparkles className="text-white text-xl" />
          </div>
          <div className="absolute -inset-1 bg-linear-to-r from-[#005acd] to-[#0093cb] dark:from-blue-500 dark:to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold bg-linear-to-r from-[#005acd] via-[#0093cb] to-[#005acd] dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
            Socialify
          </span>
          <span className="text-[10px] theme-text-muted tracking-wider uppercase">
            Connect & Share
          </span>
        </div>
      </Link>
      <p className="text-sm theme-text-secondary leading-relaxed">
        Connect, share, and grow your network with our modern social platform.
        Join millions of users worldwide.
      </p>

      {/* Newsletter mini form */}
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 bg-white dark:bg-white/5 border border-[#6dd7fd]/30 dark:border-white/10 rounded-lg text-sm theme-text-primary placeholder:text-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
        />
        <button className="px-4 py-2 bg-linear-to-r from-[#005acd] via-[#0093cb] to-[#6dd7fd] dark:from-blue-500 dark:to-purple-500 rounded-lg text-sm font-medium text-white hover:shadow-lg shadow-[#005acd]/30 dark:hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
          Join
        </button>
      </div>
    </div>
  );
};

export default FooterBrand;
