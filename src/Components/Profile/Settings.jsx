import { IoSettingsOutline } from "react-icons/io5";
import UpdatePassword from "./UpdatePassword";
import UpdatePhoto from "./UpdatePhoto";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";

const Settings = () => {
  return (
    <section className="w-full lg:max-w-4xl mx-auto mt-8 px-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-white/80 dark:bg-slate-800/50 rounded-xl border border-[#6dd7fd]/30 dark:border-white/10">
          <IoSettingsOutline className="text-2xl text-blue-400" />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-linear-to-r from-[#005acd] via-[#0093cb] to-[#005acd] bg-clip-text text-transparent dark:text-white">
            Account Settings
          </h2>
          <p className="theme-text-secondary text-sm">
            Manage your account preferences and security
          </p>
        </div>
        <Link
          to="/"
          className="border border-blue-400/50 rounded-full px-4 py-2 text-blue-400 hover:bg-blue-400/10 dark:hover:bg-slate-800/10 hover:text-blue-500 transition-colors flex items-center ml-auto gap-2 "
        >
          <HiHome /> Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Photo Update */}
        <UpdatePhoto />

        {/* Right Column: Password Update */}
        <UpdatePassword />
      </div>
    </section>
  );
};

export default Settings;
