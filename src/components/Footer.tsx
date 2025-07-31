const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">S2</span>
              </div>
              <div>
                <h3 className="text-lg font-bold gradient-text">S2 Overseas Pvt. Ltd</h3>
                <p className="text-sm text-gray-300 font-medium">Premium Export Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading Indian spices, processed food & tea exporter connecting global markets with premium quality products. 
              We specialize in authentic Indian flavors and traditional handicrafts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Certificates</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Spices & Powders</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Tea Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Processed Foods</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors font-medium">Organic Products</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary">📞</span>
                <span className="text-gray-300 font-medium">+91 9160040202</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✉️</span>
                <span className="text-gray-300 font-medium">sales@s2overseas.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">🌐</span>
                <span className="text-gray-300 font-medium">s2overseas.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 font-medium">
              © 2024 S2 Overseas Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-4">
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