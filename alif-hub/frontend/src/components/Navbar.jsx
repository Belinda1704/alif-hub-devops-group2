import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current page is a dashboard page
  const isDashboardPage = location.pathname.includes('/dashboard') || 
                         location.pathname.includes('/student/') || 
                         location.pathname.includes('/mentor/');

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = () => {
      const token = localStorage.getItem("access_token");
      const isAuth = !!token;
      setIsAuthenticated(isAuth);
    };

    // Initial check
    checkAuth();

    // Listen for storage changes to update auth state
    const handleStorageChange = () => {
      checkAuth();
    };

    // Listen for custom login/logout events
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('loginSuccess', handleStorageChange);
    window.addEventListener('logoutSuccess', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('loginSuccess', handleStorageChange);
      window.removeEventListener('logoutSuccess', handleStorageChange);
    };
  }, [location]); // Re-check when location changes

  const handleSignOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsAuthenticated(false);
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('logoutSuccess'));
    
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-br from-blue-50 to-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 truncate">
              Alif Mentorship Hub
            </h1>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {!isAuthenticated ? (
              <>
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base">
                  About
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base">
                  Contact
                </Link>
                <Link to="/login" className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition font-medium text-sm">
                  Login
                </Link>
                <Link to="/signup" className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition font-medium text-sm">
                  Signup
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base">
                  About
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base">
                  Contact
                </Link>
                {/* Only show sign out button on dashboard pages */}
                {isDashboardPage && (
                  <button
                    onClick={handleSignOut}
                    className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition font-medium text-sm"
                  >
                    Sign Out
                  </button>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
            {!isAuthenticated ? (
              <>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium">
                  Home
                </Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium">
                  About
                </Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium">
                  Contact
                </Link>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-center">
                  Login
                </Link>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium text-center">
                  Signup
                </Link>
              </>
            ) : (
              <>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium">
                  Home
                </Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium">
                  About
                </Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium">
                  Contact
                </Link>
                {isDashboardPage && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleSignOut();
                    }}
                    className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
                  >
                    Sign Out
                  </button>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;