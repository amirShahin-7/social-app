import { useHead } from "@unhead/react";
import Settings from "../../Components/Profile/Settings";

const ProfileSettingPage = () => {
  useHead({
    title: `Settings`,
  });
  return (
    <main className="max-w-10/12 mx-auto min-h-screen flex items-center">
      <Settings />
    </main>
  );
};

export default ProfileSettingPage;
