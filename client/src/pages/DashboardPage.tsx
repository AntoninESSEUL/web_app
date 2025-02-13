import Navbar from "../components/common/Navbar";

export const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
      </div>
    </>
  );
};
