import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import {
  UserGroupIcon,
  CalendarDaysIcon,
  DevicePhoneMobileIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckBadgeIcon,
  CursorArrowRaysIcon,
  PencilSquareIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-4 py-10 space-y-20">
          <section className="max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">
              Welcome to <span className="text-blue-500">MedCare</span>
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl mb-6">
              Book appointments with trusted medical professionals anytime,
              anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/available-doctors")}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
              >
                View Available Doctors
              </button>
              <button
                onClick={() => navigate("/my-appointments")}
                className="bg-gray-100 text-blue-700 px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                My Appointments
              </button>
            </div>
          </section>

          <section className="max-w-6xl w-full">
            <h2 className="text-3xl font-semibold text-center text-blue-700 mb-8">
              Why Choose MedCare?
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-600 px-4">
              <FeatureCard
                Icon={UserGroupIcon}
                title="Top Doctors"
                description="Connect with certified and experienced medical professionals."
              />
              <FeatureCard
                Icon={CalendarDaysIcon}
                title="Seamless Booking"
                description="Book appointments in seconds, anytime."
              />
              <FeatureCard
                Icon={DevicePhoneMobileIcon}
                title="Mobile Friendly"
                description="Access our platform easily on any device."
              />
              <FeatureCard
                Icon={HeartIcon}
                title="Trusted Care"
                description="Your health and privacy are our top priorities."
              />
              <FeatureCard
                Icon={ChatBubbleBottomCenterTextIcon}
                title="Live Support"
                description="Get help instantly from our support team."
              />
              <FeatureCard
                Icon={CheckBadgeIcon}
                title="Verified Reviews"
                description="See what other patients are saying before you book."
              />
            </div>
          </section>

          <section className="max-w-5xl w-full text-center px-4">
            <h2 className="text-3xl font-semibold text-blue-700 mb-8">
              How It Works
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <FeatureCard
                Icon={CursorArrowRaysIcon}
                title="Search"
                description="Find the right doctor by specialty, location, or name."
              />
              <FeatureCard
                Icon={PencilSquareIcon}
                title="Book"
                description="Choose a time slot that works for you and confirm."
              />
              <FeatureCard
                Icon={ShieldCheckIcon}
                title="Visit"
                description="Attend your appointment in-person or virtually with ease."
              />
            </div>
          </section>

          <section className="max-w-4xl w-full text-center px-4">
            <h2 className="text-3xl font-semibold text-blue-700 mb-8">
              What Our Patients Say
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <TestimonialCard
                name="Jane A."
                text="The booking process was super easy and I got an appointment within minutes!"
              />
              <TestimonialCard
                name="Michael O."
                text="The doctor I saw was kind, professional, and very helpful. Highly recommend!"
              />
            </div>
          </section>

          <section className="max-w-4xl w-full px-4 text-left">
            <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <FAQ
                question="Is MedCare free to use?"
                answer="Yes, MedCare is completely free for users to browse and book appointments."
              />
              <FAQ
                question="Can I cancel or reschedule appointments?"
                answer="Absolutely. You can manage all your appointments from your dashboard."
              />
              <FAQ
                question="Are the doctors verified?"
                answer="Yes, all listed professionals are licensed and verified by our team."
              />
            </div>
          </section>

          <section className="w-full bg-blue-600 text-white py-12 text-center px-4 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to book your appointment?
            </h2>
            <p className="mb-6">
              Join thousands of users who trust MedCare for their healthcare
              needs.
            </p>
            <button
              onClick={() => navigate("/available-doctors")}
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
            >
              Find a Doctor Now
            </button>
          </section>
        </div>
      </Layout>
    </>
  );
}

// Feature Card
function FeatureCard({ Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
      <div className="flex items-center justify-center mb-4">
        <Icon className="h-10 w-10 text-blue-500" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

// Testimonial Card
function TestimonialCard({ name, text }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-left">
      <p className="text-gray-700 italic">“{text}”</p>
      <p className="mt-4 font-semibold text-blue-600">— {name}</p>
    </div>
  );
}

// FAQ
function FAQ({ question, answer }) {
  return (
    <div className="bg-white p-4 rounded-md shadow">
      <h4 className="font-semibold text-gray-800">{question}</h4>
      <p className="text-sm text-gray-600 mt-1">{answer}</p>
    </div>
  );
}
