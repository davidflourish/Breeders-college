import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Eye, Heart, Globe, Star, Users, BookOpen, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function About() {
  const values = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Delivering world-class education through innovative teaching methods and rigorous academic standards.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Preparing students for international success while maintaining strong local identity and values.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Target,
      title: 'Innovation & Leadership',
      description: 'Fostering critical thinking, creativity, and leadership skills for tomorrow\'s challenges.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Heart,
      title: 'Character Development',
      description: 'Building integrity, empathy, and social responsibility in all our students.',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const achievements = [
    { icon: Star, number: '20+', label: 'Years of Excellence', desc: 'Serving the community' },
    { icon: Users, number: '2500+', label: 'Students Graduated', desc: 'Success stories' },
    { icon: BookOpen, number: '75+', label: 'Expert Faculty', desc: 'Dedicated educators' },
    { icon: Award, number: '98%', label: 'Success Rate', desc: 'Outstanding results' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 text-blue-700 mb-6">
            <Star className="w-4 h-4 mr-2" />
            <span className="font-medium">About Breeders College</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Where Excellence Meets 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded on principles of academic excellence and character development, Breeders College 
            has been shaping young minds for over 20 years, combining traditional values with modern education.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To provide comprehensive, innovative education that develops critical thinking, 
                      creativity, and character, preparing students to become responsible global citizens 
                      and leaders who make positive contributions to society.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To be the leading private educational institution in Nigeria, recognized globally for 
                      producing graduates who demonstrate academic excellence, innovative thinking, and 
                      strong moral character in all their endeavors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Principal's Message */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                    alt="Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Message from Our Principal</h4>
                  <p className="text-blue-100 text-sm leading-relaxed mb-3">
                    "Education is the foundation of progress. At Breeders College, we are committed 
                    to nurturing each student's potential, fostering innovation, and building character 
                    that will serve them throughout their lives."
                  </p>
                  <div className="text-sm">
                    <div className="font-medium">Dr. Sarah Johnson</div>
                    <div className="text-blue-200">Principal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Breeders College Campus"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Students Collaborating"
                    className="w-full h-56 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Students Learning"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="School Facilities"
                    className="w-full h-44 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">{achievement.label}</h4>
                  <p className="text-sm text-gray-600">{achievement.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              These fundamental principles guide our educational philosophy and shape the character 
              of every member of the Breeders College community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white group-hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-4">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}