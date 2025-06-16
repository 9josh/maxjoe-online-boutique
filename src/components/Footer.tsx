
const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "Watches", href: "/watches" },
      { name: "Necklaces", href: "/necklaces" },
      { name: "Bracelets", href: "/bracelets" },
      { name: "Rings", href: "/rings" }
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "Size Guide", href: "/size-guide" },
      { name: "Care Instructions", href: "/care" },
      { name: "Returns", href: "/returns" }
    ],
    company: [
      { name: "About MaxJoe", href: "/about" },
      { name: "Our Story", href: "/story" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" }
    ]
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">MaxJoe</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              Crafting timeless luxury jewelry since 1985. Each piece represents our commitment 
              to exceptional quality and elegant design.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibent text-gray-800 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 sm:mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2024 MaxJoe Luxury Jewelry. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
