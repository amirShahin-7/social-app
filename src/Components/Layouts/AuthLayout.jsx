import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <section className="grid lg:grid-cols-2 items-center min-h-screen bg-slate-900 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <Outlet />
      </section>
    </>
  );
};

export default AuthLayout;
