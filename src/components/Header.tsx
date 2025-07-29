import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">S2 Overseas Pvt. Ltd</h1>
              {/* <p className="text-xs text-muted-foreground"></p> */}
            </div>
          </div>

          {/* ISO Certification */}
          <div className="hidden md:flex items-center gap-2">
            <div className="bg-red-600 text-white text-xs px-2 py-1 rounded">ISO</div>
            <div className="text-sm">
              <div className="font-semibold">22000:2018</div>
              <div className="text-xs text-muted-foreground">Certified</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-orange-500 transition-colors">About</a>
            <a href="#" className="text-foreground hover:text-orange-500 transition-colors">Products</a>
            <a href="#" className="text-foreground hover:text-orange-500 transition-colors">Service</a>
            <a href="#" className="text-foreground hover:text-orange-500 transition-colors">Certificates</a>
            <a href="#" className="text-foreground hover:text-orange-500 transition-colors">Contact</a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:block text-right text-sm">
              <div className="font-semibold">+91 9160040202</div>
              <div className="text-muted-foreground">sales@s2overseas.com</div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get The Brochure
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;