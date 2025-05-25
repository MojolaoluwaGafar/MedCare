import { NavLink } from "react-router-dom";

export default function Navbar() {
  // Simulated user authentication (replace with context or props)
  const user = {
    name: "Jane Doe",
    initials: "JD",
    loggedIn: true,
  };

  const linkClass = "hover:text-blue-600 transition duration-200";
  const activeLinkClass = "text-blue-700 font-bold";

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-blue-700">MedCare</h1>

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
            to="/book-appointments"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeLinkClass}` : linkClass
            }
          >
            Book Appointment
          </NavLink>
          <NavLink
            to="/myappointments"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeLinkClass}` : linkClass
            }
          >
            My Appointments
          </NavLink>
        </nav>

        {user?.loggedIn ? (
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-sm text-white font-bold">
              {user.initials}
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 font-semibold">
              Sign Out
            </button>
          </div>
        ) : (
          <NavLink
            to="/signin"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 font-semibold"
          >
            Sign In
          </NavLink>
        )}
      </div>
    </header>
  );
}
