import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import { useAuth } from "../store/useAuth";

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useDarkMode();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          MyApp
        </h2>
        <nav className="flex flex-col space-y-3 text-gray-700 dark:text-gray-300">
          <Link
            to="/dashboard"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            🏠 Dashboard
          </Link>
          <Link
            to="/dashboard/crud"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            📊 CRUD Example
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
            <span className="text-gray-600 dark:text-gray-300">
              Welcome, {user?.email}
            </span>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto text-gray-900 dark:text-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
