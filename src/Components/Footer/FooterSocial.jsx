import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    to: "/",
    icon: FaFacebook,
    label: "Facebook",
    hoverColor: "hover:text-blue-500 hover:shadow-blue-500/50",
  },
  {
    to: "/",
    icon: FaXTwitter,
    label: "Twitter",
    hoverColor: "hover:text-black hover:shadow-black/50",
  },
  {
    to: "/",
    icon: FaInstagram,
    label: "Instagram",
    hoverColor: "hover:text-pink-500 hover:shadow-pink-500/50",
  },
  {
    to: "/",
    icon: FaLinkedin,
    label: "LinkedIn",
    hoverColor: "hover:text-blue-600 hover:shadow-blue-600/50",
  },
  {
    to: "/",
    icon: FaGithub,
    label: "GitHub",
    hoverColor: "hover:text-white hover:shadow-white/30",
  },
];

const FooterSocial = () => {
  return (
    <div>
      <h3 className="font-semibold text-white mb-5 flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
        Follow Us
      </h3>
      <p className="text-sm text-slate-400 mb-4">
        Stay connected with us on social media
      </p>
      <div className="flex gap-3">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            to={social.to}
            className={`w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.hoverColor}`}
            aria-label={social.label}
          >
            <social.icon size={18} />
          </Link>
        ))}
      </div>

      {/* App Store Badges */}
      <div className="mt-6 flex gap-2">
        <div className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-400 hover:bg-white/10 transition-colors cursor-pointer">
          📱 App Store
        </div>
        <div className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-400 hover:bg-white/10 transition-colors cursor-pointer">
          🤖 Play Store
        </div>
      </div>
    </div>
  );
};

export default FooterSocial;
