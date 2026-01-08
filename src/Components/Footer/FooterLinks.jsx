import { Link } from "react-router-dom";

const FooterLinks = ({ title, links, dotColor, hoverColor }) => {
  return (
    <div>
      <h3 className="font-semibold text-white mb-5 flex items-center gap-2">
        <div className={`w-1.5 h-1.5 ${dotColor} rounded-full`} />
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className={`flex items-center gap-2 text-slate-400 ${hoverColor} transition-all duration-200 group`}
            >
              <link.icon className="text-lg opacity-60 group-hover:opacity-100 transition-opacity" />
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
