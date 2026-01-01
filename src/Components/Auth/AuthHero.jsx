import authHero from "../../assets/auth-hero.jpg";
import personImage from "../../assets/person-1.jpg";
import { FaBell, FaHeart, FaImage, FaMessage, FaStar } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

const AuthHero = () => {
  const features = [
    {
      icon: <FaMessage />,
      title: "Real-time chat",
      description: "Instant Messaging",
      colors: "bg-teal-400/20 text-green-300",
    },
    {
      icon: <FaImage />,
      title: "Share Media",
      description: "Photos & Videos",
      colors: "bg-blue-400/20 text-white/40",
    },
    {
      icon: <FaBell />,
      title: "Smart Alerts",
      description: "Stay Updated",
      colors: "bg-pink-400/20 text-pink-100 ",
    },
    {
      icon: <FaUsers />,
      title: "Communities",
      description: "Find Your Tribe",
      colors: "bg-teal-400/20 text-green-300",
    },
  ];
  const stats = [
    {
      icon: <FaUsers />,
      title: "Active Users",
      values: "1M+",
      colors: "text-blue-300 text-xl",
    },

    {
      icon: <FaHeart />,
      title: "Posts Shared",
      values: "8M+",
      colors: "text-pink-200 ",
    },
    {
      icon: <FaMessage />,
      title: "Messages Sent",
      values: "40M+",
      colors: "text-green-200",
    },
  ];
  return (
    <section
      className=" bg-cover h-full text-white p-8 space-y-10"
      style={{
        backgroundImage: `linear-gradient(#1447e6cc,#455fb1cc) ,url(${authHero})`,
      }}
    >
      <div className="font-bold  flex items-center text-xl">
        <span className="text-3xl px-3 py-1 bg-white/50 mr-2 rounded-xl">
          S
        </span>
        Social App
      </div>
      <h2 className="text-4xl font-bold">
        Connect With
        <span className="block bg-linear-to-r from-blue-400 via-blue-100 to-white bg-clip-text text-transparent pb-3">
          Amazing People
        </span>
      </h2>
      <p className="max-w-md">
        Join millions of users sharing moments, ideas, and building meaningful
        connections every day
      </p>
      <section className="social-section  grid lg:grid-cols-2 gap-3">
        {features.map((feature, i) => (
          <div
            key={i}
            className="p-4 bg-white/10 rounded-2xl hover:backdrop-blur-sm hover:scale-105 transition duration-200"
          >
            <div className="flex items-center gap-2 ">
              <div className={`${feature.colors} p-3 text-sm rounded-xl`}>
                {feature.icon}
              </div>
              <div className="text-white">
                <h3>{feature.title}</h3>
                <h4>{feature.description}</h4>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="stats-section flex gap-3">
        {stats.map((stat, i) => (
          <div key={i}>
            <div
              className={`${stat.colors} flex items-center justify-center gap-1`}
            >
              {stat.icon}
              <span className="text-lg text-white">{stat.values}</span>
            </div>
            <div className="text-white">
              <h3 className="text-sm">{stat.title}</h3>
            </div>
          </div>
        ))}
      </section>
      <section className="stats-section bg-white/10 rounded-3xl space-y-4 py-10 px-8 hover:backdrop-blur-sm transition">
        <div className=" flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className="text-yellow-300 hover:scale-110 hover:text-amber-400 transition text-lg "
            />
          ))}
        </div>

        <p className="text-sm italic">
          "Social App has Completely Changing how I connect With friends
          discover new communities. The Experience is seamless!"
        </p>
        <div className="flex items-center gap-3">
          <img
            src={personImage}
            alt="personImage"
            className="size-12 rounded-full"
          />
          <div className="text-sm">
            <h3 className="font-bold">Alex Johnson</h3>
            <h4 className="text-gray-300">Product Designer</h4>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AuthHero;
