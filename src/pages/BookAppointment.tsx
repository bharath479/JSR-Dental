import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, FileText, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    patient_name: '',
    email: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'General Dentistry',
    'Cosmetic Dentistry',
    'Root Canal Treatment',
    'Teeth Cleaning & Scaling',
    'Tooth Extraction',
    'Dental Implants',
    'Braces & Aligners',
    'Pediatric Dentistry',
    'Gum Disease Treatment',
    'Oral Surgery',
    'Other',
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM',
    '7:00 PM - 8:00 PM',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('appointments')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        patient_name: '',
        email: '',
        phone: '',
        preferred_date: '',
        preferred_time: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting appointment:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book an Appointment</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            Schedule your visit and let us take care of your dental health
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitStatus === 'success' ? (
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={48} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Appointment Request Received!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for booking with us. We'll contact you shortly to confirm your appointment.
              </p>
              <div className="space-y-3 text-left max-w-md mx-auto bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700">
                  <strong>What's next?</strong>
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span>✓</span>
                    <span>We'll review your appointment request</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>✓</span>
                    <span>Our team will call you to confirm the date and time</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>✓</span>
                    <span>You'll receive a confirmation message</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
                >
                  Book Another Appointment
                </button>
                <a
                  href="tel:08341911977"
                  className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Schedule Your Visit
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you to confirm your appointment.
                </p>
              </div>

              {submitStatus === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                  Sorry, there was an error booking your appointment. Please try again or call us at{' '}
                  <a href="tel:08341911977" className="font-semibold underline">
                    083419 11977
                  </a>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="patient_name" className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                      <User size={18} className="text-teal-600" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      id="patient_name"
                      name="patient_name"
                      value={formData.patient_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                      <Mail size={18} className="text-teal-600" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                    <Phone size={18} className="text-teal-600" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferred_date" className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                      <Calendar size={18} className="text-teal-600" />
                      <span>Preferred Date *</span>
                    </label>
                    <input
                      type="date"
                      id="preferred_date"
                      name="preferred_date"
                      value={formData.preferred_date}
                      onChange={handleChange}
                      min={today}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferred_time" className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                      <Clock size={18} className="text-teal-600" />
                      <span>Preferred Time *</span>
                    </label>
                    <select
                      id="preferred_time"
                      name="preferred_time"
                      value={formData.preferred_time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                    <FileText size={18} className="text-teal-600" />
                    <span>Service Required *</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                    <FileText size={18} className="text-teal-600" />
                    <span>Additional Notes (Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Any specific concerns or questions?"
                  />
                </div>

                <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> This is an appointment request. Our team will contact you to confirm the exact date and time.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 text-white px-6 py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Need immediate assistance?</p>
                <a
                  href="tel:08341911977"
                  className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-semibold text-lg"
                >
                  <Phone size={20} />
                  <span>Call us at 083419 11977</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-gray-600">Your journey to better dental health</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600 font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Book Appointment</h3>
              <p className="text-gray-600 text-sm">Submit your appointment request online</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600 font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Confirmation Call</h3>
              <p className="text-gray-600 text-sm">We'll call to confirm your appointment</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600 font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Our Clinic</h3>
              <p className="text-gray-600 text-sm">Arrive for your scheduled appointment</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600 font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Treatment</h3>
              <p className="text-gray-600 text-sm">Receive quality dental care from experts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
