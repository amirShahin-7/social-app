import { Link } from "react-router-dom";
import { HiOutlineSparkles } from "react-icons/hi2";

const FooterBrand = () => {
  return (
    <div className="space-y-5">
      <Link to="/" className="flex items-center gap-3 group w-fit">
        <div className="relative">
          <div className="w-10 h-10 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 light:from-[#005acd] light:via-[#0093cb] light:to-[#6dd7fd] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 dark:shadow-blue-500/30 light:shadow-[#005acd]/30 group-hover:shadow-blue-500/50 dark:group-hover:shadow-blue-500/50 light:group-hover:shadow-[#005acd]/50 transition-all duration-300 group-hover:scale-105">
            <HiOutlineSparkles className="text-white text-xl" />
          </div>
          <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-500 dark:from-blue-500 dark:to-purple-500 light:from-[#005acd] light:to-[#0093cb] rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold bg-linear-to-r from-blue-400 via-blue-600 to-blue-400 dark:from-white dark:via-blue-100 dark:to-white light:from-[#005acd] light:via-[#0093cb] light:to-[#005acd] bg-clip-text text-transparent">
            Socialify
          </span>
          <span className="text-[10px] theme-text-muted tracking-wider uppercase">
            Connect & Share
          </span>
        </div>
      </Link>
      <p className="text-sm theme-text-secondary leading-relaxed">
        Connect, share, and grow your network with our modern social
        platform. Join millions of users worldwide.
      </p>

      {/* Newsletter mini form */}
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-[#6dd7fd]/30 rounded-lg text-sm theme-text-primary placeholder:text-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
        />
        <button className="px-4 py-2 bg-linear-to-r from-blue-500 to-purple-500 dark:from-blue-500 dark:to-purple-500 light:from-[#005acd] light:via-[#0093cb] light:to-[#6dd7fd] rounded-lg text-sm font-medium text-white hover:shadow-lg hover:shadow-purple-500/25 dark:hover:shadow-purple-500/25 light:hover:shadow-[#005acd]/30 transition-all duration-300 hover:scale-105">
          Join
        </button>
      </div>
    </div>
  );
};

export default FooterBrand;
