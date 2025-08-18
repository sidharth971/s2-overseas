import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveLink = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-colors font-medium cursor-pointer";
    const isActive = isActiveLink(path);
    
    if (isActive) {
      return `${baseClasses} text-yellow-400 font-semibold`;
    }
    return `${baseClasses} text-white hover:text-yellow-400`;
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navigateToContact = () => {
    navigate('/contact');
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full border-b bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 fixed top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Brand */}
          <button
            className="group flex items-center gap-2 sm:gap-3 focus:outline-none mr-2 sm:mr-4 lg:mr-6 xl:mr-8 min-w-0"
            onClick={() => navigate('/')}
            aria-label="Go to home"
          >
            <div className="h-12 sm:h-14 lg:h-16 xl:h-20 flex items-center">
              <img
                src="/assets/brand/Thrayana.jpg"
                alt="Thrayana Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="inline-block max-w-[50vw] min-w-0 truncate">
              <h1
                className="whitespace-nowrap text-sm sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-extrabold tracking-tight gradient-text"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                THRAYANA PRIVATE LIMITED
              </h1>
            </div>
          </button>

          {/* Removed ISO certification badge and text */}

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a 
              onClick={() => navigate('/')}
              className={`${getLinkClasses('/')} text-base xl:text-lg`}
            >
              Home
            </a>
            <a 
              onClick={() => navigate('/about')}
              className={`${getLinkClasses('/about')} text-base xl:text-lg`}
            >
              About
            </a>
            <a 
              onClick={() => navigate('/products')}
              className={`${getLinkClasses('/products')} text-base xl:text-lg`}
            >
              Products
            </a>
            <a 
              onClick={() => navigate('/certificates')}
              className={`${getLinkClasses('/certificates')} text-base xl:text-lg`}
            >
              Certificates
            </a>
            <a 
              onClick={navigateToContact}
              className={`${getLinkClasses('/contact')} text-base xl:text-lg`}
            >
              Contact
            </a>
          </nav>

          {/* Desktop Contact Info & CTA */}
          <div className="hidden xl:flex items-center gap-6">
            <div className="text-right text-base">
              <div className="font-bold text-white">+91 9160040202</div>
              <div className="font-bold text-white">+91 8310439092</div>
              <div className="text-gray-300">sales@thrayana.com</div>
            </div>
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold text-lg px-6 py-3 rounded-2xl shadow-md">
              Get The Brochure
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-black/95 backdrop-blur">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation */}
              <nav className="space-y-4">
                <a 
                  onClick={() => handleNavigation('/')}
                  className={`${getLinkClasses('/')} block text-xl py-2`}
                >
                  Home
                </a>
                <a 
                  onClick={() => handleNavigation('/about')}
                  className={`${getLinkClasses('/about')} block text-xl py-2`}
                >
                  About
                </a>
                <a 
                  onClick={() => handleNavigation('/products')}
                  className={`${getLinkClasses('/products')} block text-xl py-2`}
                >
                  Products
                </a>
                <a 
                  onClick={() => handleNavigation('/certificates')}
                  className={`${getLinkClasses('/certificates')} block text-xl py-2`}
                >
                  Certificates
                </a>
                <a 
                  onClick={() => handleNavigation('/contact')}
                  className={`${getLinkClasses('/contact')} block text-xl py-2`}
                >
                  Contact
                </a>
              </nav>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t">
                <div className="space-y-2">
                  <div className="font-bold text-white">+91 9160040202</div>
                  <div className="font-bold text-white">+91 8310439092</div>
                  <div className="text-gray-300 text-sm">sales@thrayana.com</div>
                </div>
                <Button className="btn-primary w-full mt-4">
                  Get The Brochure
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;