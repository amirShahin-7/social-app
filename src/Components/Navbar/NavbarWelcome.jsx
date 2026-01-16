const NavbarWelcome = ({ userName }) => {
  return (
    <div
      className="hidden sm:flex items-center gap-2 px-4 py-2 
      bg-[#005acd]/10 dark:bg-white/5
      rounded-full 
      border border-[#0093cb]/30 dark:border-white/10 
      backdrop-blur-sm"
    >
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      <span className="text-[#3d5a80] dark:text-slate-400 text-sm">
        Welcome back,
      </span>
      <span className="font-semibold text-transparent bg-linear-to-r from-[#005acd] to-[#0093cb] dark:from-blue-400 dark:to-purple-400 bg-clip-text">
        {userName || "User"}
      </span>
    </div>
  );
};

export default NavbarWelcome;
