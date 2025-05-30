import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { doctorsData } from "../data";

export default function BookAppointment() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctorsData.find((doc) => doc.id === parseInt(doctorId));
  const [selectedTime, setSelectedTime] = useState("");

  const handleBooking = () => {
    if (!selectedTime) {
      alert("Please select a time slot.");
      return;
    }

    const existingAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    const newAppointment = {
      id: Date.now(),
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialty: doctor.specialty,
      time: selectedTime,
    };

    localStorage.setItem(
      "appointments",
      JSON.stringify([...existingAppointments, newAppointment])
    );
    navigate("/my-appointments");
  };

  if (!doctor) {
    return (
      <div className="min-h-screen p-6 bg-gray-50">
        <Navbar />
        <p className="text-center text-red-600">Doctor not found.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 bg-gray-50">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Book Appointment
          </h2>
          <div className="flex items-center mb-4">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-20 h-20 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
            </div>
          </div>
          <label className="block mb-2 font-medium">Select Time Slot:</label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full border px-4 py-2 rounded mb-4"
          >
            <option value="">-- Select a time --</option>
            {doctor.appointments.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          <button
            onClick={handleBooking}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </>
  );
}
