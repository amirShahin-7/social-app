const NavbarWelcome = ({ userName }) => {
  return (
    <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      <span className="text-slate-400 text-sm">Welcome back,</span>
      <span className="font-semibold text-transparent bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text">
        {userName || "User"}
      </span>
    </div>
  );
};

export default NavbarWelcome;
