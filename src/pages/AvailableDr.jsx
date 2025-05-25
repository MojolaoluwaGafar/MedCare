import { useState } from "react";
import Navbar from "../components/Navbar";
import { doctorsData } from "../data";
import { useNavigate } from "react-router";

export default function AvailableDr() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredDoctors = doctorsData
    .filter((doctor) => doctor.available)
    .filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Available Doctors
        </h2>

        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search by name or specialty..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col items-center">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {doctor.specialty}
                </p>
                <p className="text-sm text-gray-600 mb-2 font-medium">
                  Available Times:
                </p>
                <ul className="text-sm text-gray-700 mb-4 space-y-1">
                  {doctor.appointments.map((time, index) => (
                    <li key={index}>• {time}</li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate(`/book-appointment/${doctor.id}`)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <p className="text-center mt-10 text-gray-500 text-lg">
            No doctors found.
          </p>
        )}
      </div>
    </>
  );
}
