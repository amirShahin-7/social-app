import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineGlobeAlt,
  HiOutlineChatBubbleLeftRight,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineEnvelope,
} from "react-icons/hi2";

export const quickLinks = [
  { to: "/", label: "Home", icon: HiOutlineHome },
  { to: "/profile", label: "Profile", icon: HiOutlineUser },
  { to: "/", label: "Explore", icon: HiOutlineGlobeAlt },
  { to: "/", label: "Messages", icon: HiOutlineChatBubbleLeftRight },
];

export const resourceLinks = [
  { to: "/", label: "Help Center", icon: HiOutlineQuestionMarkCircle },
  { to: "/", label: "Privacy Policy", icon: HiOutlineShieldCheck },
  { to: "/", label: "Terms of Service", icon: HiOutlineDocumentText },
  { to: "/", label: "Contact Us", icon: HiOutlineEnvelope },
];
