import { Link } from 'react-router-dom';
import { Phone, Calendar, Award, Shield, Users, MapPin, Star, CheckCircle, Smile, Sparkles, Stethoscope, Heart } from 'lucide-react';

export default function Home() {
  const services = [
    { icon: Smile, title: 'General Dentistry', description: 'Comprehensive dental care for the whole family' },
    { icon: Sparkles, title: 'Cosmetic Dentistry', description: 'Enhance your smile with modern cosmetic procedures' },
    { icon: Stethoscope, title: 'Root Canal Treatment', description: 'Pain-free endodontic treatments' },
    { icon: Shield, title: 'Teeth Cleaning & Scaling', description: 'Professional cleaning for optimal oral health' },
    { icon: CheckCircle, title: 'Tooth Extraction', description: 'Safe and comfortable tooth removal procedures' },
    { icon: Heart, title: 'Dental Implants', description: 'Permanent solution for missing teeth' },
    { icon: Smile, title: 'Braces & Aligners', description: 'Straighten your teeth with modern orthodontics' },
  ];

  const whyChooseUs = [
    { icon: Award, title: 'Experienced Specialists', description: 'Highly qualified dental professionals with years of expertise' },
    { icon: Shield, title: 'Modern & Hygienic', description: 'State-of-the-art equipment and strict sterilization protocols' },
    { icon: Users, title: 'Patient-First Approach', description: 'Personalized care tailored to your unique needs' },
    { icon: MapPin, title: 'Convenient Location', description: 'Easily accessible in the heart of Secunderabad' },
  ];

  const reviews = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Excellent service and very professional staff. Dr. JSR made me feel comfortable throughout my root canal treatment.',
      date: '2 weeks ago',
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Best dental clinic in Secunderabad! Modern equipment and painless treatments. Highly recommend!',
      date: '1 month ago',
    },
    {
      name: 'Anitha Reddy',
      rating: 5,
      text: 'Very clean and hygienic clinic. The doctor explained everything clearly and the treatment was affordable.',
      date: '3 weeks ago',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Advanced Dental Care You Can Trust
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Experience exceptional dental care with modern technology, experienced specialists, and a patient-first approach in the heart of Secunderabad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:08341911977"
                  className="flex items-center justify-center space-x-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg text-lg font-semibold"
                >
                  <Phone size={24} />
                  <span>Call Now</span>
                </a>
                <Link
                  to="/book-appointment"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg text-lg font-semibold"
                >
                  <Calendar size={24} />
                  <span>Book Appointment</span>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">5.0 Rating</span>
                <span className="text-gray-500">• Based on 100+ reviews</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform">
                <img
                  src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dental Clinic"
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Our Clinic
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At DR. JSR Dental Health Speciality, we are committed to providing exceptional dental care in a comfortable and welcoming environment. With years of experience and modern technology, we deliver personalized treatments that prioritize your oral health and satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Us"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Award className="text-teal-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Dental Professionals</h3>
                  <p className="text-gray-600">Our team comprises highly qualified dentists with extensive experience in various specialties.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="text-teal-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Equipment</h3>
                  <p className="text-gray-600">We use the latest dental technology to ensure accurate diagnosis and effective treatments.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Heart className="text-teal-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient Satisfaction</h3>
                  <p className="text-gray-600">With a 5.0 star rating and over 100 positive reviews, patient satisfaction is our top priority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care services to meet all your oral health needs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
                >
                  <Icon className="text-teal-600 mb-4" size={40} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-teal-600" size={36} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Patient Reviews
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={28} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-600">Based on 100+ Google reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Clinic
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-teal-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Surya Towers, 1-128, Railway Crossing, Behind Anutex,<br />
                    Opposite Gautham Nagar, Bhavani Nagar,<br />
                    Malkajgiri, Secunderabad, Telangana – 500047
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-teal-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                  <a href="tel:08341911977" className="text-teal-600 hover:text-teal-700 text-lg font-medium">
                    083419 11977
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg className="text-teal-600 flex-shrink-0 mt-1" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Clinic Hours</h3>
                  <p className="text-gray-600">Open – Closes at 8:30 PM</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.142449!2d78.52874!3d17.44643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzQ3LjIiTiA3OMKwMzEnNDMuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl mb-8 text-teal-50">
            Book your appointment today and experience exceptional dental care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:08341911977"
              className="inline-flex items-center justify-center space-x-2 bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
            >
              <Phone size={24} />
              <span>Call Now</span>
            </a>
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-teal-600 transition-colors font-semibold text-lg"
            >
              <Calendar size={24} />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
