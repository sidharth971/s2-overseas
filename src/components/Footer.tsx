const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">S2 Overseas</h3>
                <p className="text-sm text-gray-300">Pvt. Ltd</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Leading Indian spices, processed food & tea exporter connecting global markets with premium quality products.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Certificates</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Spices & Powders</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Tea Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Processed Foods</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Organic Products</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-orange-400">📞</span>
                <span className="text-gray-300">+91 9545205050</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">✉️</span>
                <span className="text-gray-300">sales@aquaconnectexim.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">🌐</span>
                <span className="text-gray-300">aquaconnectexim.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 S2 Overseas Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-4">
              <span className="text-sm text-gray-400">ISO 22000:2018 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;