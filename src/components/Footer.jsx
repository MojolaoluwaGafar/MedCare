import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">MedCare</h2>
          <p className="text-sm">
            Trusted platform to connect you with licensed doctors and manage
            your healthcare journey.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/available-doctors" className="hover:underline">
                Doctors
              </a>
            </li>
            <li>
              <a href="/my-appointments" className="hover:underline">
                Appointments
              </a>
            </li>
            {/* <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li> */}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="flex items-center gap-2 text-sm mb-2">
            <PhoneIcon className="h-5 w-5" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2 text-sm mb-4">
            <EnvelopeIcon className="h-5 w-5" />
            <span>support@medcare.com</span>
          </div>

          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-blue-600 pt-4">
        &copy; {new Date().getFullYear()} MedCare. All rights reserved.
      </div>
    </footer>
  );
}
