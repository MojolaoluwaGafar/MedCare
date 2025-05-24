import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <header>
        <h1 className="text-4xl py-5 px-10 font-extrabold text-blue-700">MedCare</h1>
      </header>

      <section className="flex flex-col justify-center items-center mt-5 text-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6xqK79P2Vo7ZxR_f9nVPQve8QsnobPmqiFiB7Zesv9Fu2Xjx4Q3vHv17SGcmXahlpI4&usqp=CAU"
          alt="Dr Image"
        />
        <h2 className="text-5xl font-bold mb-2 text-blue-700">Welcome to MedCare</h2>
        <p className="text-2xl px-5">
          Your healthcare booking platform. <br />
          Your health, our priority.
        </p>

        <div className="flex gap-3 justify-center mt-3">
          <button
            onClick={() => navigate("/signin")}
            className="py-2 px-5 bg-blue-600 rounded-md text-lg text-white hover:translate-1.5 hover:bg-blue-900"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/register")}
            className="py-2 px-5 bg-blue-600 rounded-md text-lg text-white hover:translate-1.5 hover:bg-blue-900"
          >
            Register
          </button>
        </div>
      </section>
    </div>
  );
}
