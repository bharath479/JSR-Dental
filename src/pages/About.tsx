import { Award, Heart, Users, Target, Shield, Star, TrendingUp, Clock } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Heart, title: 'Patient-Centered Care', description: 'We prioritize your comfort and well-being in every treatment' },
    { icon: Shield, title: 'Quality & Safety', description: 'Strict hygiene protocols and state-of-the-art sterilization' },
    { icon: Award, title: 'Excellence', description: 'Committed to delivering the highest standard of dental care' },
    { icon: Users, title: 'Compassion', description: 'Treating every patient with empathy and understanding' },
  ];

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Patients' },
    { number: '5.0', label: 'Google Rating' },
    { number: '100%', label: 'Satisfaction' },
  ];

  const team = [
    {
      name: 'Dr. JSR',
      role: 'Chief Dental Surgeon',
      specialization: 'BDS, MDS (Endodontics)',
      description: 'Over 10 years of experience in advanced dental procedures with a focus on painless treatments.',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Clinic</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            Providing exceptional dental care with compassion, expertise, and modern technology
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Welcome to DR. JSR Dental Health Speciality
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Located in the heart of Secunderabad, DR. JSR Dental Health Speciality has been serving the community with exceptional dental care for over a decade. Our mission is to provide high-quality, personalized dental treatments in a comfortable and welcoming environment.
                </p>
                <p>
                  We believe that every patient deserves the best possible care. That's why we combine advanced dental technology with a patient-first approach, ensuring that your experience is comfortable, efficient, and effective.
                </p>
                <p>
                  Our team of experienced dental professionals is dedicated to helping you achieve and maintain optimal oral health. From routine check-ups to complex procedures, we're here to serve you with expertise and compassion.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dental Care"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Modern Equipment"
                className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Patient Care"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dental Treatment"
                className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at DR. JSR Dental Health Speciality
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-teal-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
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
              Meet Our Expert Team
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-teal-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.specialization}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {member.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-gray-600 font-medium">5.0 Patient Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Target className="mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-teal-50">
                To provide exceptional dental care that exceeds expectations and transforms lives through healthy smiles.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-teal-50">
                To be the most trusted dental care provider in Secunderabad, known for excellence and innovation.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-2">Our Promise</h3>
              <p className="text-teal-50">
                To deliver personalized, painless, and affordable dental treatments with utmost care and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
