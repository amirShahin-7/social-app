import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { HiHome, HiArrowLeft, HiSearch } from "react-icons/hi";
import { RiEmotionSadLine } from "react-icons/ri";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      {/* Main Content */}
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number with Gradient */}
        <div className="relative mb-8">
          <h1 className="text-[120px] sm:text-[180px] font-black bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 text-[120px] sm:text-[180px] font-black text-white/5 blur-2xl leading-none select-none">
            404
          </div>
        </div>

        {/* Sad Icon */}
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-gradient-to-br from-slate-800/80 to-slate-700/50 rounded-full border border-white/10 shadow-xl shadow-blue-500/10 backdrop-blur-md">
            <RiEmotionSadLine className="text-5xl text-blue-400" />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Oops! Page Not Found
        </h2>
        <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto leading-relaxed">
          It seems like the page you're looking for has gone on a social media detox. Let's get you back to connecting!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-6 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            startContent={<HiHome className="text-xl" />}
            onPress={() => navigate("/")}
          >
            Back to Home
          </Button>

          <Button
            size="lg"
            variant="bordered"
            className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-6 transition-all duration-300 hover:border-white/40"
            startContent={<HiArrowLeft className="text-xl" />}
            onPress={() => navigate(-1)}
          >
            Go Back
          </Button>
        </div>

        {/* Search Suggestion */}
        <div className="mt-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/10">
          <div className="flex items-center justify-center gap-3 text-slate-300">
            <HiSearch className="text-xl text-blue-400" />
            <span>Looking for something specific? Try searching or exploring the feed!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;