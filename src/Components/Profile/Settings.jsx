import { IoSettingsOutline } from "react-icons/io5";
import UpdatePassword from "./UpdatePassword";
import UpdatePhoto from "./UpdatePhoto";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";

const Settings = () => {
  return (
    <section className="w-full lg:max-w-4xl mx-auto mt-8 px-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-slate-800/50 rounded-xl border border-white/10">
          <IoSettingsOutline className="text-2xl text-blue-400" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Account Settings
          </h2>
          <p className="text-slate-400 text-sm">
            Manage your account preferences and security
          </p>
        </div>
        <Link
          to="/"
          className="border border-blue-400/50 rounded-full px-4 py-2 text-blue-400 hover:bg-slate-800/10 hover:text-white transition-colors flex items-center ml-auto gap-2 "
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
