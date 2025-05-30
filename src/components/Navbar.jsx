import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = "hover:text-blue-600 transition duration-200 block px-3 py-2 rounded-md";
  const activeLinkClass = "text-blue-700 font-bold";

  const getInitials = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/home">
          <h1 className="text-3xl font-extrabold text-blue-700">MedCare</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeLinkClass}` : linkClass
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/available-doctors"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeLinkClass}` : linkClass
            }
          >
            Book Appointment
          </NavLink>
          <NavLink
            to="/my-appointments"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeLinkClass}` : linkClass
            }
          >
            My Appointments
          </NavLink>
        </nav>

        {/* Desktop User Section */}
        {user?.email ? (
          <div className="hidden md:flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-sm text-white font-bold">
              {getInitials(user.fullName || user.name)}
            </div>
            <button
              onClick={logout}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 font-semibold"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <NavLink
            to="/signin"
            className="hidden md:inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 font-semibold"
          >
            Sign In
          </NavLink>
        )}

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
          >
            <span className="sr-only">Open main menu</span>
            {/* Icon: hamburger or close */}
            {!mobileMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden px-6 pb-4 space-y-1 bg-white border-t border-gray-200"
        >
          <NavLink
            to="/home"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeLinkClass}` : linkClass
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/available-doctors"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeLinkClass}` : linkClass
            }
          >
            Book Appointment
          </NavLink>
          <NavLink
            to="/my-appointments"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeLinkClass}` : linkClass
            }
          >
            My Appointments
          </NavLink>

          {/* User Section Mobile */}
          {user?.email ? (
            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-sm text-white font-bold">
                  {getInitials(user.fullName || user.name)}
                </div>
                <span className="font-semibold text-gray-700">{user.fullName || user.name}</span>
              </div>
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 font-semibold"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <NavLink
              to="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 font-semibold"
            >
              Sign In
            </NavLink>
          )}
        </nav>
      )}
    </header>
  );
}
