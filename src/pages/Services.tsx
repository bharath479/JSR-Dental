import { Smile, Sparkles, Stethoscope, Shield, CheckCircle, Heart, Scissors, Baby, Users, Syringe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Smile,
      title: 'General Dentistry',
      description: 'Comprehensive dental examinations, cleanings, and preventive care for the whole family. Regular check-ups help maintain optimal oral health and prevent future problems.',
      features: [
        'Routine dental check-ups',
        'Oral health assessments',
        'Preventive care advice',
        'Early problem detection',
      ],
    },
    {
      icon: Sparkles,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our advanced cosmetic procedures. From teeth whitening to veneers, we help you achieve the beautiful smile you deserve.',
      features: [
        'Teeth whitening treatments',
        'Dental veneers',
        'Smile makeovers',
        'Composite bonding',
      ],
    },
    {
      icon: Stethoscope,
      title: 'Root Canal Treatment',
      description: 'Painless and efficient endodontic treatments to save your natural teeth. Our advanced techniques ensure comfort throughout the procedure.',
      features: [
        'Pain-free procedures',
        'Advanced rotary endodontics',
        'Single-visit treatments available',
        'High success rates',
      ],
    },
    {
      icon: Shield,
      title: 'Teeth Cleaning & Scaling',
      description: 'Professional dental cleaning to remove plaque, tartar, and stains. Essential for maintaining healthy gums and preventing dental diseases.',
      features: [
        'Deep cleaning',
        'Plaque and tartar removal',
        'Polishing',
        'Fluoride treatments',
      ],
    },
    {
      icon: Scissors,
      title: 'Tooth Extraction',
      description: 'Safe and comfortable tooth removal procedures when necessary. We use modern techniques to minimize discomfort and ensure quick recovery.',
      features: [
        'Painless extractions',
        'Wisdom tooth removal',
        'Surgical extractions',
        'Post-operative care',
      ],
    },
    {
      icon: Heart,
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth that look and function like natural teeth. Restore your smile with the best teeth replacement option.',
      features: [
        'Titanium implants',
        'Natural appearance',
        'Long-lasting solution',
        'Improved functionality',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Braces & Aligners',
      description: 'Straighten your teeth with traditional braces or modern clear aligners. Achieve a perfectly aligned smile with our orthodontic treatments.',
      features: [
        'Metal and ceramic braces',
        'Clear aligners',
        'Customized treatment plans',
        'Regular progress monitoring',
      ],
    },
    {
      icon: Baby,
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children in a friendly and comfortable environment. We make dental visits fun and stress-free for your little ones.',
      features: [
        'Child-friendly approach',
        'Preventive care for kids',
        'Cavity treatments',
        'Dental education for children',
      ],
    },
    {
      icon: Users,
      title: 'Gum Disease Treatment',
      description: 'Comprehensive periodontal care to treat and prevent gum diseases. Healthy gums are essential for overall oral health.',
      features: [
        'Gingivitis treatment',
        'Periodontitis management',
        'Gum surgery if needed',
        'Maintenance programs',
      ],
    },
    {
      icon: Syringe,
      title: 'Oral Surgery',
      description: 'Advanced surgical procedures performed with precision and care. From extractions to jaw surgeries, we handle complex dental cases.',
      features: [
        'Wisdom tooth surgery',
        'Jaw correction',
        'Cyst removal',
        'Bone grafting',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            Comprehensive dental care solutions for all your oral health needs
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Dental Care Under One Roof
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From routine check-ups to advanced procedures, we offer a full range of dental services using the latest technology and techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                      <Icon className="text-teal-600" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle size={18} className="text-teal-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our Services?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Modern Technology</h3>
                      <p className="text-gray-600">State-of-the-art equipment for accurate diagnosis and effective treatments</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Experienced Team</h3>
                      <p className="text-gray-600">Highly qualified dental professionals with years of expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Painless Procedures</h3>
                      <p className="text-gray-600">Advanced techniques to ensure comfortable and pain-free treatments</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Affordable Pricing</h3>
                      <p className="text-gray-600">Quality dental care at reasonable and transparent pricing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dental Services"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-teal-50">
            Book an appointment today and let us take care of your dental health
          </p>
          <Link
            to="/book-appointment"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
