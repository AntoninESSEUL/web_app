import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// src/components/layouts/AppLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";

export const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
