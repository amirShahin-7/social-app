import { useTheme } from "../../Context/ThemeContext";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full 
        bg-[#005acd]/10 dark:bg-white/5
        border border-[#0093cb]/30 dark:border-white/10
        hover:bg-[#005acd]/20 dark:hover:bg-white/10
        hover:border-[#0093cb]/50 dark:hover:border-white/20
        transition-all duration-300 group cursor-pointer"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <HiOutlineSun className="text-yellow-200 hover:text-yellow-500 text-xl group-hover:scale-120 transition-all duration-200" />
      ) : (
        <HiOutlineMoon className="text-[#005acd] text-xl rotate-30 group-hover:-rotate-12 transition-transform duration-200" />
      )}
    </button>
  );
};

export default ThemeToggle;
