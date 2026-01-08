import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";
import { quickLinks, resourceLinks } from "./footerData";

const Footer = () => {
  return (
    <footer className="relative bg-linear-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border-t border-white/10 text-gray-300">
      {/* Decorative linear line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Section */}
          <FooterBrand />

          {/* Quick Links */}
          <FooterLinks
            title="Quick Links"
            links={quickLinks}
            dotColor="bg-blue-400"
            hoverColor="hover:text-blue-400"
          />

          {/* Resources */}
          <FooterLinks
            title="Resources"
            links={resourceLinks}
            dotColor="bg-purple-400"
            hoverColor="hover:text-purple-400"
          />

          {/* Follow Us */}
          <FooterSocial />
        </div>

        {/* Bottom Section */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
