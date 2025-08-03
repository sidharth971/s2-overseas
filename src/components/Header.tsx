import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActiveLink = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-colors font-medium text-lg cursor-pointer";
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
  };

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50">
      <div className="w-full px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">Thrayana</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground gradient-text">Thrayana PRIVATE LIMITED</h1>
            </div>
          </div>

          {/* ISO Certification */}
          <div className="hidden md:flex items-center gap-3">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-md">ISO</div>
            <div className="text-base">
              <div className="font-bold text-foreground">22000:2025</div>
              <div className="text-sm text-muted-foreground">Certified</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <a 
              onClick={() => navigate('/')}
              className={getLinkClasses('/')}
            >
              Home
            </a>
            <a 
              onClick={() => navigate('/about')}
              className={getLinkClasses('/about')}
            >
              About
            </a>
            <a 
              onClick={() => navigate('/products')}
              className={getLinkClasses('/products')}
            >
              Products
            </a>
            <a 
              onClick={() => navigate('/certificates')}
              className={getLinkClasses('/certificates')}
            >
              Certificates
            </a>
            <a 
              onClick={navigateToContact}
              className={getLinkClasses('/contact')}
            >
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center gap-6">
            <div className="hidden xl:block text-right text-base">
              <div className="font-bold text-foreground">+91 9160040202</div>
              <div className="text-muted-foreground text-sm">sales@s2overseas.com</div>
            </div>
            <Button className="btn-primary text-lg px-6 py-3">
              Get The Brochure
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;