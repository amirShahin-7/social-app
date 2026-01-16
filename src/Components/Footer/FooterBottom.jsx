import { Link } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi2";

const FooterBottom = () => {
  return (
    <>
      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-linear-to-r from-blue-500/50 via-purple-500/30 to-transparent" />
        </div>
        <div className="relative flex justify-center">
          <div className="px-4 bg-gray-200 dark:bg-slate-900">
            <div className="w-2 h-2 bg-linear-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm theme-text-secondary">
        <p className="flex items-center gap-1">
          © 2026 Socialify. Made with
          <HiOutlineHeart className="text-red-400 animate-pulse" />
          All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="hover:text-blue-500 dark:hover:text-white transition-colors"
          >
            Cookies
          </Link>
          <Link
            to="/"
            className="hover:text-blue-500 dark:hover:text-white transition-colors"
          >
            Sitemap
          </Link>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs">All systems operational</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
