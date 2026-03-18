import { Outlet } from "react-router";

export function Root() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Outlet />
    </div>
  );
}
