import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments") || "[]");
    setAppointments(data);
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="min-h-screen p-6 bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            My Appointments
          </h2>

          {appointments.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              No appointments yet.
            </p>
          ) : (
            <div className="max-w-2xl mx-auto space-y-4">
              {appointments.map((appt, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow">
                  <h3 className="text-lg font-semibold">{appt.name}</h3>
                  <p className="text-blue-600">{appt.specialty}</p>
                  <p className="text-gray-700">Time: {appt.time}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
