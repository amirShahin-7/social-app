import SideBarSkeleton from "./SideBarSkeleton";
import { Avatar } from "@heroui/react";
import {
  FaBirthdayCake,
  FaFemale,
  FaIdCard,
  FaMale,
  FaUser,
  FaVenusMars,
} from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { useUserData } from "../../hooks/useUserData";
import { useUserPosts } from "../../hooks/usePosts";
import { Link } from "react-router-dom";

const SideBarProfile = () => {
  const {
    data: user,
    isLoading: userLoading,
    isError: userError,
    error,
    refetch,
  } = useUserData();
  const { data: userPosts } = useUserPosts();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Calculate age
  const calcAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  if (userLoading) {
    return <SideBarSkeleton />;
  }
  if (userError) {
    return (
      <aside className="w-full md:w-80 shrink-0">
        <div className="sticky top-24">
          <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl overflow-hidden p-6 text-center">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <p className="text-red-400 font-medium">Failed to load profile</p>
            <p className="text-slate-400 text-sm mt-1">{error?.message}</p>
            <button
              onClick={() => refetch()}
              className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm hover:bg-indigo-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </aside>
    );
  }

  return (
    user && (
      <aside className="w-full md:w-80 shrink-0">
        <div className="sticky top-24">
          <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl overflow-hidden">
            {/* Cover/Header Section */}
            <div className="relative h-28 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
              <div className="absolute inset-0 bg-black/10"></div>
              {/* Decorative circles */}
              <div className="absolute top-2 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-6 w-10 h-10 bg-white/10 rounded-full blur-lg"></div>
            </div>

            {/* Avatar Section */}
            <div className="relative px-5 pb-5">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="p-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg">
                  <div className="p-1 bg-slate-800 rounded-full">
                    <Avatar src={user.photo} className="w-20 h-20" isBordered />
                  </div>
                </div>
              </div>

              {/* User Name & Email */}
              <div className="pt-12 text-center">
                <h1 className="text-xl font-bold text-white capitalize">
                  {user.name}
                </h1>
                <p className="text-slate-400 mt-1 text-sm flex items-center justify-center gap-1">
                  <HiOutlineMail className="text-sm" />
                  {user.email}
                </p>
              </div>

              {/* Stats Section */}
              <div className="flex justify-center items-center gap-4 mt-4 py-3 border-y border-white/10 *:text-center ">
                <div className="space-y-1.5 mt-1">
                  <p className=" font-bold text-purple-400 capitalize">
                    {user.gender === "male" ? (
                      <FaMale size={20} />
                    ) : (
                      <FaFemale size={20} />
                    )}
                  </p>
                  <p className="text-xs text-slate-400 capitalize">
                    {user.gender}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold text-indigo-400">
                    {calcAge(user.dateOfBirth)}
                  </p>
                  <p className="text-xs text-slate-400">Years Old</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-indigo-400">
                    {userPosts?.length ? userPosts?.length : 0}
                  </p>
                  <p className="text-xs text-slate-400">Posts</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-pink-400">
                    {Math.floor(
                      (new Date() - new Date(user.createdAt)) /
                        (1000 * 60 * 60 * 24)
                    )}
                  </p>
                  <p className="text-xs text-slate-400">Days</p>
                </div>
              </div>

              {/* Details Section */}
              <div className="mt-4 space-y-3">
                <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="w-6 h-6 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <FaUser className="text-xs text-indigo-400" />
                  </span>
                  Profile Details
                </h2>

                <div className="bg-slate-700/30 rounded-xl p-3 space-y-2">
                  {/* Date of Birth */}
                  <div className="flex items-center justify-between py-1.5 px-2 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-purple-500/20 rounded-md flex items-center justify-center">
                        <FaBirthdayCake className="text-xs text-purple-400" />
                      </span>
                      <span className="text-slate-400 text-xs">Birthday</span>
                    </div>
                    <span className="font-medium text-slate-200 text-xs">
                      {formatDate(user.dateOfBirth)}
                    </span>
                  </div>

                  {/* Gender */}
                  <div className="flex items-center justify-between py-1.5 px-2 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-500/20 rounded-md flex items-center justify-center">
                        <FaVenusMars className="text-xs text-blue-400" />
                      </span>
                      <span className="text-slate-400 text-xs">Gender</span>
                    </div>
                    <span className="font-medium text-slate-200 text-xs capitalize">
                      {user.gender}
                    </span>
                  </div>

                  {/* Member Since */}
                  <div className="flex items-center justify-between py-1.5 px-2 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-green-500/20 rounded-md flex items-center justify-center">
                        <BsCalendarCheck className="text-xs text-green-400" />
                      </span>
                      <span className="text-slate-400 text-xs">Joined</span>
                    </div>
                    <span className="font-medium text-slate-200 text-xs">
                      {formatDate(user.createdAt)}
                    </span>
                  </div>

                  {/* User ID */}
                  <div className="flex items-center justify-between py-1.5 px-2 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-orange-500/20 rounded-md flex items-center justify-center">
                        <FaIdCard className="text-xs text-orange-400" />
                      </span>
                      <span className="text-slate-400 text-xs">User ID</span>
                    </div>
                    <span className="font-medium text-slate-500 text-[10px] font-mono">
                      {user._id}
                    </span>
                  </div>
                </div>
              </div>

              {/* Edit Profile Button */}
              <div className="mt-4">
                <Link
                  to="/settings"
                  className="w-full py-2.5 px-4 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RiEdit2Fill />
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  );
};

export default SideBarProfile;
