import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import SignIn from './pages/signin.jsx';
import SignUp from './pages/SignUp.jsx';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App
