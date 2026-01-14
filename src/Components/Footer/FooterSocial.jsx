import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaFacebook,
    label: "Facebook",
    hoverColor: "hover:text-blue-500 hover:shadow-blue-500/50",
  },
  {
    icon: FaXTwitter,
    label: "Twitter",
    hoverColor: "hover:text-black hover:shadow-black/50",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    hoverColor: "hover:text-pink-500 hover:shadow-pink-500/50",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    hoverColor: "hover:text-blue-600 hover:shadow-blue-600/50",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    hoverColor: "hover:text-white dark:hover:text-white light:hover:text-black hover:shadow-white/30 dark:hover:shadow-white/30 light:hover:shadow-black/30",
  },
];

const FooterSocial = () => {
  return (
    <div>
      <h3 className="font-semibold theme-text-primary mb-5 flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
        Follow Us
      </h3>
      <p className="text-sm theme-text-secondary mb-4">
        Stay connected with us on social media
      </p>
      <div className="flex gap-3">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            to={'/'}
            className={`w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-[#6dd7fd]/30 theme-text-secondary transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.hoverColor}`}
            aria-label={social.label}
          >
            <social.icon size={18} />
          </Link>
        ))}
      </div>

      {/* App Store Badges */}
      <div className="mt-6 flex gap-2">
        <div className="px-3 py-2 bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-[#6dd7fd]/30 rounded-lg text-xs theme-text-secondary hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-blue-400/10 transition-colors cursor-pointer">
          📱 App Store
        </div>
        <div className="px-3 py-2 bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-[#6dd7fd]/30 rounded-lg text-xs theme-text-secondary hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-blue-400/10 transition-colors cursor-pointer">
          🤖 Play Store
        </div>
      </div>
    </div>
  );
};

export default FooterSocial;
