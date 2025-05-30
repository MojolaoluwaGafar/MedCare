import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleCancel = (id) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          My Appointments
        </h2>
        {appointments.length === 0 ? (
          <p className="text-center text-gray-600">
            You have no appointments booked.
          </p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white p-4 rounded-lg shadow flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {appointment.doctorName}
                  </h3>
                  <p className="text-blue-600">{appointment.specialty}</p>
                  <p className="text-gray-600 mt-2">Time: {appointment.time}</p>
                </div>
                <button
                  onClick={() => handleCancel(appointment.id)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
