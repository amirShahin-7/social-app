import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineChatBubbleLeftRight,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";

export const quickLinks = [
  { to: "/", label: "Home", icon: HiOutlineHome },
  { to: "/profile", label: "Profile", icon: HiOutlineUser },
  { to: "/settings", label: "Settings", icon: IoSettingsOutline },
  { to: "/", label: "Messages", icon: HiOutlineChatBubbleLeftRight },
];

export const resourceLinks = [
  { to: "/", label: "Help Center", icon: HiOutlineQuestionMarkCircle },
  { to: "/", label: "Privacy Policy", icon: HiOutlineShieldCheck },
  { to: "/", label: "Terms of Service", icon: HiOutlineDocumentText },
  { to: "/", label: "Contact Us", icon: HiOutlineEnvelope },
];
