import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import SignIn from './pages/signin.jsx';
import SignUp from './pages/SignUp.jsx';
import Home from "./pages/Home.jsx"
import AvailableDr from './pages/AvailableDr.jsx';
import MyAppointments from './pages/MyAppointments.jsx';
import BookAppointment from "./pages/BookAppointment";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book-appointments" element={<AvailableDr />} />
        <Route path="/myappointments" element={<MyAppointments />} />
        <Route path="/book-appointment/:id" element={<BookAppointment />} />
      </Routes>
    </>
  );
}

export default App
