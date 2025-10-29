import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DashboardNavbar = ({ userType, userName }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = () => {
      const token = localStorage.getItem("access_token");
      const isAuth = !!token;
      setIsAuthenticated(isAuth);
    };

    // Initial check
    checkAuth();

    // Listen for logout events
    const handleLogout = () => {
      checkAuth();
    };

    window.addEventListener('logoutSuccess', handleLogout);

    return () => {
      window.removeEventListener('logoutSuccess', handleLogout);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('logoutSuccess'));
    
    navigate("/");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  if (!isAuthenticated) {
    return null; // Don't show if not authenticated
  }

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo and Back Button */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
            <button
              onClick={handleBackToHome}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base whitespace-nowrap"
            >
              <span className="hidden sm:inline">← Back to Home</span>
              <span className="sm:hidden">← Home</span>
            </button>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-600 truncate">
              Alif Mentorship Hub
            </h1>
          </div>

          {/* User Info and Logout */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <div className="hidden sm:flex items-center text-sm text-gray-600">
              <span className="font-medium truncate max-w-[100px] md:max-w-none">{userName}</span>
              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs whitespace-nowrap">
                {userType === 'student' ? 'Student' : 'Mentor'}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium text-sm whitespace-nowrap"
            >
              <span className="hidden sm:inline">Logout</span>
              <span className="sm:hidden">Out</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;