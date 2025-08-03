import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S2</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground gradient-text">S2 Overseas Pvt. Ltd</h1>
            </div>
          </div>

          {/* ISO Certification */}
          <div className="hidden md:flex items-center gap-2">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-md">ISO</div>
            <div className="text-sm">
              <div className="font-bold text-foreground">22000:2025</div>
              <div className="text-xs text-muted-foreground">Certified</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-primary font-semibold hover:text-primary/80 transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a 
              href="#products" 
              onClick={scrollToProducts}
              className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Products
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Service</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Certificates</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:block text-right text-sm">
              <div className="font-bold text-foreground">+91 9160040202</div>
              <div className="text-muted-foreground text-xs">sales@s2overseas.com</div>
            </div>
            <Button className="btn-primary">
              Get The Brochure
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;