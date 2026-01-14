import { useTheme } from "../../Context/ThemeContext";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full 
        bg-white/5 dark:bg-white/5 light:bg-[#005acd]/10
        border border-white/10 dark:border-white/10 light:border-[#0093cb]/30
        hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-[#005acd]/20
        hover:border-white/20 dark:hover:border-white/20 light:hover:border-[#0093cb]/50
        transition-all duration-300 group"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <HiOutlineSun className="text-yellow-400 text-xl group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <HiOutlineMoon className="text-[#005acd] text-xl group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
