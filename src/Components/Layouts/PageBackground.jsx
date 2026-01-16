import { BsChatSquareHeart } from "react-icons/bs";

const PageBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base Linear - Dark Mode */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 dark:block hidden"></div>

      {/* Base Linear - Light Mode - Sky blue */}
      <div className="absolute inset-0 bg-linear-to-br from-sky-100 via-sky-200/80 to-cyan-100 block dark:hidden"></div>

      {/* Animated Background Elements - Dark Mode */}
      <div className="absolute inset-0 overflow-hidden hidden dark:block">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Animated Background Elements - Light Mode */}
      <div className="absolute inset-0 overflow-hidden block dark:hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-sky-200/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Social Icons Background - Dark Mode */}
      <div className="absolute inset-0 overflow-hidden opacity-10 hidden dark:block">
        <BsChatSquareHeart
          className="absolute top-32 left-20 text-5xl text-blue-400 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        />
        <BsChatSquareHeart
          className="absolute top-60 right-24 text-3xl text-purple-400 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "3.5s" }}
        />
        <BsChatSquareHeart
          className="absolute bottom-40 left-32 text-4xl text-cyan-400 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "4.2s" }}
        />
        <BsChatSquareHeart
          className="absolute top-1/2 right-16 text-3xl text-pink-400 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3.8s" }}
        />
      </div>

      {/* Floating Social Icons Background - Light Mode */}
      <div className="absolute inset-0 overflow-hidden opacity-20 block dark:hidden">
        <BsChatSquareHeart
          className="absolute top-32 left-20 text-5xl text-sky-500 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        />
        <BsChatSquareHeart
          className="absolute top-60 right-24 text-3xl text-cyan-500 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "3.5s" }}
        />
        <BsChatSquareHeart
          className="absolute bottom-40 left-32 text-4xl text-sky-400 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "4.2s" }}
        />
        <BsChatSquareHeart
          className="absolute top-1/2 right-16 text-3xl text-cyan-400 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3.8s" }}
        />
      </div>
    </div>
  );
};

export default PageBackground;
