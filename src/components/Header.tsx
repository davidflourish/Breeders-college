import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
  };

  const handleApplyNow = () => {
    onNavigate('contact');
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and School Name */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">BC</span>
              </div>
            </div>
            <div className="ml-4">
              <h1 className="text-xl font-bold text-gray-900">
                Breeders College
              </h1>
              <p className="text-sm text-blue-600">Excellence in Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('home')}
                className={`font-medium transition-colors duration-200 ${
                  currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </button>
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  About
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div 
                  className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border transition-all duration-200 ${
                    isAboutDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  <button 
                    onClick={() => handleNavigation('about')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Our Story
                  </button>
                  <button 
                    onClick={() => handleNavigation('about')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Vision & Mission
                  </button>
                  <button 
                    onClick={() => handleNavigation('about')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Core Values
                  </button>
                </div>
              </div>
              <button 
                onClick={() => handleNavigation('academics')}
                className={`font-medium transition-colors duration-200 ${
                  currentPage === 'academics' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Academics
              </button>
              <button 
                onClick={() => handleNavigation('admissions')}
                className={`font-medium transition-colors duration-200 ${
                  currentPage === 'admissions' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Admissions
              </button>
              <button 
                onClick={() => handleNavigation('faculty')}
                className={`font-medium transition-colors duration-200 ${
                  currentPage === 'faculty' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Faculty
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className={`font-medium transition-colors duration-200 ${
                  currentPage === 'contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contact
              </button>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={handleApplyNow}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md transition-all duration-200 transform hover:scale-105"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="pb-4 space-y-2 border-t border-gray-100 mt-2 pt-4">
            <button 
              onClick={() => handleNavigation('home')}
              className={`block w-full text-left font-medium py-2 transition-colors ${
                currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className={`block w-full text-left font-medium py-2 transition-colors ${
                currentPage === 'about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('academics')}
              className={`block w-full text-left font-medium py-2 transition-colors ${
                currentPage === 'academics' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Academics
            </button>
            <button 
              onClick={() => handleNavigation('admissions')}
              className={`block w-full text-left font-medium py-2 transition-colors ${
                currentPage === 'admissions' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Admissions
            </button>
            <button 
              onClick={() => handleNavigation('faculty')}
              className={`block w-full text-left font-medium py-2 transition-colors ${
                currentPage === 'faculty' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Faculty
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className={`block w-full text-left font-medium py-2 transition-colors ${
                currentPage === 'contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </button>
            <div className="pt-4">
              <Button 
                onClick={handleApplyNow}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}