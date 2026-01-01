import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-slate-900 to-slate-800 text-gray-300 mt-16 relative w-full bottom-0">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link
              to="/"
              className="font-bold bg-linear-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent flex items-center text-xl"
            >
              <span className="text-3xl px-3 py-1 bg-blue-500/30 mr-2 rounded-xl">
                S
              </span>
              Social App
            </Link>
            <p className="text-sm text-gray-400">
              Connect, share, and grow your network with our modern social
              platform.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Messages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="flex   items-center text-sm text-gray-400">
          <p>© 2025 Social App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
