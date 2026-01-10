import { BsNewspaper } from "react-icons/bs";
import CreatePost from "../../Components/Feed/CreatePost";
import SideBarProfile from "../../Components/Profile/SideBarProfile";
import UserPosts from "../../Components/Profile/UserPosts";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { useHead } from "@unhead/react";
import { useUserData } from "../../hooks/useUserData";

const ProfilePage = () => {
  const { data: user } = useUserData();
  useHead({
    title: `${user?.name || "User"} - Profile`,
    meta: [
      { name: "description", content: `${user?.name}'s profile` },
      { property: "og:title", content: user?.name },
    ],
  });
  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-6">
        {/* Profile Sidebar */}
        <SideBarProfile />

        {/* Main Content - User Posts */}
        <main className="flex-1 min-w-0">
          <CreatePost />

          <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-2xl flex flex-wrap items-center justify-between shadow-lg p-6 my-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="w-10 h-10 bg-linear-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <BsNewspaper className="text-lg text-white" />
              </span>
              My Posts
            </h2>
            <Link
              to="/"
              className="border border-blue-400/50 rounded-full px-4 py-2 text-blue-400 hover:bg-slate-800/10 hover:text-white transition-colors flex items-center gap-2 "
            >
              <HiHome /> Back to Home
            </Link>
          </div>

          <div className="space-y-6">
            <UserPosts />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
