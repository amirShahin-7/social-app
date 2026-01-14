const NavbarWelcome = ({ userName }) => {
  return (
    <div className="hidden sm:flex items-center gap-2 px-4 py-2 
      bg-white/5 dark:bg-white/5 light:bg-[#005acd]/10
      rounded-full 
      border border-white/10 dark:border-white/10 light:border-[#0093cb]/30 
      backdrop-blur-sm"
    >
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      <span className="text-slate-400 dark:text-slate-400 light:text-[#3d5a80] text-sm">
        Welcome back,
      </span>
      <span className="font-semibold text-transparent bg-linear-to-r from-blue-400 to-purple-400 dark:from-blue-400 dark:to-purple-400 light:from-[#005acd] light:to-[#0093cb] bg-clip-text">
        {userName || "User"}
      </span>
    </div>
  );
};

export default NavbarWelcome;
