export default function SignUp() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex items-center justify-center">
        <img
          src="https://cdn.create.vista.com/api/media/medium/230843208/stock-photo-handsome-doctor-stethoscope-showing-thumb-looking-camera-isolated-white?token="
          alt="Doctor Illustration"
          className="w-full h-[100vh] object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex items-center justify-center p-10 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
            Create a MedCare Account
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-600 hover:underline">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
