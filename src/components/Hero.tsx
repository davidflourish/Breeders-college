import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { GraduationCap, Users, Award, BookOpen, ArrowRight, Play, Star, TrendingUp } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Excellence in Private Education",
      subtitle: "Shaping Future Leaders",
      description: "Breeders College provides world-class education with modern facilities, expert faculty, and innovative teaching methods to prepare students for global success.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "State-of-the-Art Facilities",
      subtitle: "Modern Learning Environment",
      description: "Our campus features cutting-edge laboratories, digital classrooms, comprehensive libraries, and world-class sports facilities for holistic student development.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Outstanding Academic Results",  
      subtitle: "Proven Track Record",
      description: "With consistently excellent performance in WAEC, JAMB, and international examinations, our graduates gain admission to top universities worldwide.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 text-blue-300 border border-blue-400/30">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Leading Private Institution in Nigeria</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block">{slides[currentSlide].title}</span>
                  <span className="block text-blue-400 mt-2">{slides[currentSlide].subtitle}</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => onNavigate?.('academics')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl group"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Explore Programs
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => onNavigate?.('contact')}
                className="border-white/30 text-white bg-white text-gray-900 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
                Virtual Tour
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">2500+</div>
                <div className="text-sm text-gray-300 mt-1">Students</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">98%</div>
                <div className="text-sm text-gray-300 mt-1">Success Rate</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">20+</div>
                <div className="text-sm text-gray-300 mt-1">Years Excellence</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Achievement Cards */}
          <div className="relative hidden lg:block">
            <div className="space-y-6">
              {/* Achievement Card 1 */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Academic Excellence</h3>
                    <p className="text-gray-600 text-sm">Comprehensive STEM & Liberal Arts Programs</p>
                    <div className="flex items-center mt-2">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-purple-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                      </div>
                      <span className="ml-2 text-sm text-gray-500">800+ students enrolled</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement Card 2 */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/20 ml-12">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">University Placements</h3>
                    <p className="text-gray-600 text-sm">Top University Admissions Worldwide</p>
                    <div className="flex items-center mt-2">
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        96% University Admission
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement Card 3 */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Awards & Recognition</h3>
                    <p className="text-gray-600 text-sm">National & International Achievement</p>
                    <div className="flex items-center mt-2 space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="ml-2 text-sm text-gray-500">35+ awards won</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-400 w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce z-20">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}