import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Building } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Academic Programs', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const programs = [
    { name: 'Nursery Program', href: '#' },
    { name: 'Primary Education', href: '#' },
    { name: 'Junior Secondary', href: '#' },
    { name: 'Senior Secondary', href: '#' },
    { name: 'STEM Programs', href: '#' }
  ];

  const academicResources = [
    { name: 'Science Laboratories', href: '#' },
    { name: 'Computer Studies', href: '#' },
    { name: 'Languages Department', href: '#' },
    { name: 'Mathematics & Physics', href: '#' },
    { name: 'Arts & Literature', href: '#' }
  ];

  const resources = [
    { name: 'Parent Portal', href: '#' },
    { name: 'Student Portal', href: '#' },
    { name: 'Academic Calendar', href: '#' },
    { name: 'News & Events', href: '#' },
    { name: 'Alumni Network', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* School Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">BC</span>
              </div>
              <div>
                <h3 className="font-bold text-2xl">Breeders College</h3>
                <p className="text-blue-400 font-medium">Nurturing Tomorrow's Leaders</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Committed to providing comprehensive education that combines academic excellence 
              with character development, preparing students for success in an ever-changing world.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Oke-Ogba, Akure, Ondo State</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>0803 379 9245</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>info@breederscollege.edu.ng</span>
              </div>
            </div>

            {/* Educational Quote */}
            <div className="bg-blue-800/30 rounded-lg p-4 border border-blue-600/30">
              <div className="flex items-start space-x-3">
                <Building className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-blue-200 text-sm italic leading-relaxed">
                    "Education is the most powerful weapon which you can use to change the world. 
                    Every child deserves the opportunity to reach their full potential."
                  </p>
                  <p className="text-blue-400 text-xs mt-2 font-medium">- Educational Philosophy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Departments */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Academic Departments</h4>
            <ul className="space-y-3">
              {academicResources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources Section */}
        <div className="py-8 border-t border-gray-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h5 className="font-semibold text-white mb-4">Student Resources</h5>
              <ul className="space-y-2">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-4">School Schedule</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <div>
                  <span className="font-medium text-gray-300">Monday - Friday</span>
                  <div>8:00 AM - 4:00 PM</div>
                </div>
                <div>
                  <span className="font-medium text-gray-300">Saturday</span>
                  <div>9:00 AM - 1:00 PM</div>
                </div>
                <div>
                  <span className="font-medium text-gray-300">Extracurricular</span>
                  <div>After School Hours</div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-4">Excellence Areas</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>STEM Education</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Critical Thinking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Leadership Skills</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Global Citizenship</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-4">Follow Us</h5>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <p className="text-xs text-gray-400">
                Stay connected with our educational community
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              &copy; 2025 Breeders College. All rights reserved. | Established 2005
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Academic Standards
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-xs text-gray-500">
              "Excellence is not a skill, it's an attitude" | Empowering minds for a brighter future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}