import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              DR. JSR Dental Health Speciality
            </h3>
            <p className="text-gray-400 mb-4">
              Advanced Dental Care You Can Trust. Providing exceptional dental services with modern technology and compassionate care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/book-appointment" className="hover:text-teal-400 transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Surya Towers, 1-128, Railway Crossing, Behind Anutex,
                  Opposite Gautham Nagar, Bhavani Nagar, Malkajgiri,
                  Secunderabad, Telangana – 500047
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-teal-400 flex-shrink-0" />
                <a href="tel:08341911977" className="hover:text-teal-400 transition-colors">
                  083419 11977
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={20} className="text-teal-400 flex-shrink-0" />
                <span>Open – Closes at 8:30 PM</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-teal-400 flex-shrink-0" />
                <a href="mailto:info@drjsrdental.com" className="hover:text-teal-400 transition-colors">
                  info@drjsrdental.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DR. JSR Dental Health Speciality. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
