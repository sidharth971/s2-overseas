const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 sm:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 sm:w-14 sm:h-12 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center shadow-lg">
                <img src="/assets/brand/Thrayana.jpg" alt="Thrayana Logo" className="h-full w-auto object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Thrayana PRIVATE LIMITED</h3>
                <p className="text-base text-gray-300 font-medium">Premium Export Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              Leading Banana Fiber, Indian spices, processed food & tea exporter connecting global markets with premium quality products. 
              We specialize in authentic Indian flavors and traditional handicrafts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-2 text-base">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Certificates</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Our Products</h4>
            <ul className="space-y-2 text-base">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Spices & Powders</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Tea Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Processed Foods</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Organic Products</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Contact Us</h4>
            <div className="space-y-3 text-base">
              <div className="flex items-center gap-2">
                <span className="text-primary">📞</span>
                <span className="text-gray-300 font-medium">+91 9160040202</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">📞</span>
                <span className="text-gray-300 font-medium">+91 8310439092</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✉️</span>
                <span className="text-gray-300 font-medium">sales@thrayana.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">🌐</span>
                <span className="text-gray-300 font-medium">thrayana.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-base text-gray-400 font-medium">
              © THRAYANA PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;