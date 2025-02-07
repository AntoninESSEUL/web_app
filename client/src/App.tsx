import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminPage from "./AdminPage";
import DashboardPage from "./DashboardPage";
import LoginPage from "./LoginPage";
import UserPage from "./UserPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  );
};

export default App;
