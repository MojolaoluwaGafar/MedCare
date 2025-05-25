import { useParams, useNavigate } from "react-router-dom";
import { doctorsData } from "../data";
import { useState } from "react";

export default function BookAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctorsData.find((doc) => doc.id === id);

  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = () => {
    if (!selectedTime) return alert("Select a time");

    const appointments = JSON.parse(
      localStorage.getItem("appointments") || "[]"
    );
    appointments.push({
      doctorId: doctor.id,
      name: doctor.name,
      specialty: doctor.specialty,
      time: selectedTime,
    });
    localStorage.setItem("appointments", JSON.stringify(appointments));

    alert("Appointment booked successfully!");
    navigate("/my-appointments");
  };

  if (!doctor) return <p className="p-6 text-center">Doctor not found.</p>;

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Book Appointment
      </h2>

      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
        <p className="text-blue-600">{doctor.specialty}</p>

        <label className="block text-gray-700">Choose Time:</label>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        >
          <option value="">-- Select a time --</option>
          {doctor.appointments.map((time, idx) => (
            <option key={idx} value={time}>
              {time}
            </option>
          ))}
        </select>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
