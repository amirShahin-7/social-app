import authHero from "../../assets/auth-hero.jpg";
import personImage from "../../assets/person-1.jpg";
import { FaBell, FaHeart, FaImage, FaMessage, FaStar } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import ThemeToggle from "../Navbar/ThemeToggle";

const AuthHero = ({
  title = "Connect With",
  highlightText = "Amazing People",
  subtitle = "Join millions of users sharing moments, ideas, and building meaningful connections every day",
}) => {
  const features = [
    {
      icon: <FaMessage />,
      title: "Real-time chat",
      description: "Instant Messaging",
      colors:
        "bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-300",
    },
    {
      icon: <FaImage />,
      title: "Share Media",
      description: "Photos & Videos",
      colors:
        "bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300",
    },
    {
      icon: <FaBell />,
      title: "Smart Alerts",
      description: "Stay Updated",
      colors:
        "bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-300",
    },
    {
      icon: <FaUsers />,
      title: "Communities",
      description: "Find Your Tribe",
      colors:
        "bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300",
    },
  ];
  const stats = [
    {
      icon: <FaUsers />,
      title: "Active Users",
      values: "1M+",
      colors: "text-blue-600 dark:text-blue-300 text-xl",
    },

    {
      icon: <FaHeart />,
      title: "Posts Shared",
      values: "8M+",
      colors: "text-pink-600 dark:text-pink-300",
    },
    {
      icon: <FaMessage />,
      title: "Messages Sent",
      values: "40M+",
      colors: "text-teal-600 dark:text-teal-300",
    },
  ];

  return (
    <section className="relative h-full overflow-hidden p-8 flex flex-col justify-center">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${authHero})` }}
      ></div>
      <div className="absolute inset-0 z-0 bg-linear-to-br from-white/45 via-blue-50/40 to-white/45 dark:from-slate-900/90 dark:via-slate-800/85 dark:to-blue-900/80 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 space-y-10">
        {/* Brand */}
        <div className="font-bold flex items-center justify-between bg-white/40 dark:bg-slate-800/10 backdrop-blur-lg border-[#6dd7fd]/30 dark:border-white/5 border p-4 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-[#005acd] via-[#0093cb] to-[#6dd7fd] dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-[#005acd]/30 dark:shadow-blue-500/30">
              <HiOutlineSparkles className="text-[#005acd] dark:text-blue-400 text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-linear-to-r from-[#005acd] via-[#0093cb] to-[#005acd] dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
                Socialify
              </span>
            </div>
          </div>
          <ThemeToggle />
        </div>

        {/* Hero Text */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a2b3c] dark:text-white leading-tight">
            {title}{" "}
            <span className="block mt-2 bg-linear-to-r from-[#005acd] via-[#0093cb] to-[#6dd7fd] dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              {highlightText}
            </span>
          </h2>
          <p className="mt-4 text-[#3d5a80] dark:text-slate-300 text-lg max-w-md leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <section className="grid sm:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-[#6dd7fd]/30 dark:border-white/5 rounded-2xl hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`${feature.colors} p-3 text-lg rounded-xl group-hover:scale-110 transition-transform`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-[#1a2b3c] dark:text-white font-semibold">
                    {feature.title}
                  </h3>
                  <h4 className="text-[#5c7a99] dark:text-slate-400 text-xs">
                    {feature.description}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Stats Row */}
        <section className="flex flex-wrap gap-6 pt-4 border-t border-[#6dd7fd]/30 dark:border-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <div className={`${stat.colors} flex items-center gap-2 mb-1`}>
                {stat.icon}
                <span className="text-xl font-bold text-[#1a2b3c] dark:text-white">
                  {stat.values}
                </span>
              </div>
              <span className="text-xs text-[#5c7a99] dark:text-slate-400 uppercase tracking-wide">
                {stat.title}
              </span>
            </div>
          ))}
        </section>

        {/* Testimonial */}
        <section className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border-[#6dd7fd]/30 dark:border-white/5 border rounded-3xl p-6 hover:bg-blue-50 dark:hover:bg-slate-700/40 transition-colors">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ))}
          </div>

          <p className="text-[#3d5a80] dark:text-slate-200 text-sm italic mb-4 leading-relaxed">
            "Socialify has completely changed how I connect with friends and
            discover new communities. The experience is seamless!"
          </p>

          <div className="flex items-center gap-3">
            <img
              src={personImage}
              alt="Alex Johnson"
              className="size-10 rounded-full border-2 border-[#6dd7fd]/30 dark:border-white/10"
            />
            <div>
              <h3 className="theme-text-primary text-sm font-bold">
                Alex Johnson
              </h3>
              <h4 className="theme-text-secondary text-xs">Product Designer</h4>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AuthHero;
