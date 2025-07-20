import { Outlet } from "react-router";
import LogoutButton from "./LogoutButton";

function AppLayout() {
  return (
    <div className="m-auto h-dvh max-w-7xl">
      <main className="overflow-auto sm:px-5 sm:py-5 md:px-7 xl:px-15">
        <LogoutButton />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
