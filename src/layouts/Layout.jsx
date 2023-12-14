import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen w-3/5 lg:flex lg:flex-row gap-4 m-auto">
      <div className="flex justify-center items-center py-10">
        <img src="/layoutIcon.svg" alt="layout_img" className="w-72" />
      </div>
      <Outlet />
    </div>
  );
}
