import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
