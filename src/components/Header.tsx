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
      return `${baseClasses} text-primary font-semibold`;
    }
    return `${baseClasses} text-foreground hover:text-primary`;
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
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-12 h-10 sm:w-14 sm:h-12 lg:w-16 lg:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xs sm:text-sm">Thrayana</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground gradient-text">Thrayana PRIVATE LIMITED</h1>
            </div>
            <div className="sm:hidden">
              <h1 className="text-sm font-bold text-foreground gradient-text">Thrayana</h1>
            </div>
          </div>

          {/* ISO Certification - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-3">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-md">ISO</div>
            <div className="text-base">
              <div className="font-bold text-foreground">22000:2025</div>
              <div className="text-sm text-muted-foreground">Certified</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <a 
              onClick={() => navigate('/')}
              className={`${getLinkClasses('/')} text-lg`}
            >
              Home
            </a>
            <a 
              onClick={() => navigate('/about')}
              className={`${getLinkClasses('/about')} text-lg`}
            >
              About
            </a>
            <a 
              onClick={() => navigate('/products')}
              className={`${getLinkClasses('/products')} text-lg`}
            >
              Products
            </a>
            <a 
              onClick={() => navigate('/certificates')}
              className={`${getLinkClasses('/certificates')} text-lg`}
            >
              Certificates
            </a>
            <a 
              onClick={navigateToContact}
              className={`${getLinkClasses('/contact')} text-lg`}
            >
              Contact
            </a>
          </nav>

          {/* Desktop Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right text-base">
              <div className="font-bold text-foreground">+91 9160040202</div>
              <div className="font-bold text-foreground">+91 8310439092</div>
              <div className="text-muted-foreground text-sm">sales@thrayana.com</div>
            </div>
            <Button className="btn-primary text-lg px-6 py-3">
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
          <div className="lg:hidden border-t bg-background/95 backdrop-blur">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation */}
              <nav className="space-y-4">
                <a 
                  onClick={() => handleNavigation('/')}
                  className={`${getLinkClasses('/')} block text-lg py-2`}
                >
                  Home
                </a>
                <a 
                  onClick={() => handleNavigation('/about')}
                  className={`${getLinkClasses('/about')} block text-lg py-2`}
                >
                  About
                </a>
                <a 
                  onClick={() => handleNavigation('/products')}
                  className={`${getLinkClasses('/products')} block text-lg py-2`}
                >
                  Products
                </a>
                <a 
                  onClick={() => handleNavigation('/certificates')}
                  className={`${getLinkClasses('/certificates')} block text-lg py-2`}
                >
                  Certificates
                </a>
                <a 
                  onClick={() => handleNavigation('/contact')}
                  className={`${getLinkClasses('/contact')} block text-lg py-2`}
                >
                  Contact
                </a>
              </nav>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t">
                <div className="space-y-2">
                  <div className="font-bold text-foreground">+91 9160040202</div>
                  <div className="font-bold text-foreground">+91 8310439092</div>
                  <div className="text-muted-foreground text-sm">sales@thrayana.com</div>
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