import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Oke-Ogba, Akure', 'Ondo State', 'Nigeria'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['0803 379 9245', '+234 803 379 9245', 'Call us anytime'],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@breederscollege.edu.ng', 'admissions@breederscollege.edu.ng', 'principal@breederscollege.edu.ng'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 4:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const inquiryTypes = [
    'General Information',
    'Admissions Inquiry',
    'Academic Programs',
    'STEM Programs',
    'School Fees',
    'Campus Visit',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 text-blue-700 mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            <span className="font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Connect with Our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Educational Community</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We welcome you to visit our campus, meet our educators, and discover how Breeders College 
            can be the perfect place for your child's educational journey.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <p className="text-gray-600 text-lg">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                    Last Name *
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="inquiryType" className="text-sm font-semibold text-gray-700">
                  Inquiry Type *
                </label>
                <Select>
                  <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    {inquiryTypes.map((type, index) => (
                      <SelectItem key={index} value={type.toLowerCase().replace(' ', '-')}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your inquiry or questions you may have..."
                  rows={6}
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  required
                />
              </div>

              <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>

              <p className="text-sm text-gray-500 text-center leading-relaxed">
                * Required fields. We respect your privacy and will never share your information with third parties. 
                All communications are handled with utmost confidentiality.
              </p>
            </CardContent>
          </Card>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <Card className="border-0 shadow-lg bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <MapPin className="w-20 h-20 mx-auto mb-4 opacity-90" />
                      <h3 className="text-2xl font-bold mb-2">Breeders College</h3>
                      <p className="text-lg opacity-90">Oke-Ogba, Akure</p>
                      <p className="text-sm opacity-75 mt-2">Click to view in Google Maps</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visit Information */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <span>Visit Our Campus</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  We encourage prospective families to visit our campus and experience 
                  Breeders College firsthand. Tours are available by appointment.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Campus Tours</h4>
                      <p className="text-sm text-gray-600">Monday to Friday, 9:00 AM - 3:00 PM</p>
                      <p className="text-xs text-blue-600 mt-1">Expert guides available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Meet the Principal</h4>
                      <p className="text-sm text-gray-600">By appointment only</p>
                      <p className="text-xs text-green-600 mt-1">Educational consultation available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Open House Events</h4>
                      <p className="text-sm text-gray-600">First Saturday of every month</p>
                      <p className="text-xs text-purple-600 mt-1">Including special presentations</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Schedule Campus Visit
                </Button>
              </CardContent>
            </Card>

            {/* Educational Community Notice */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-purple-700 text-white">
              <CardContent className="p-8 text-center">
                <h4 className="font-bold text-xl mb-4">Welcome to Excellence</h4>
                <p className="text-blue-100 leading-relaxed">
                  We welcome all families to our educational community. Our doors are always open 
                  for consultation on your child's educational journey. Together, we can achieve 
                  greatness and build a brighter future.
                </p>
                <div className="mt-6 text-sm text-blue-200">
                  <p>"Excellence is not a skill, it's an attitude"</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}