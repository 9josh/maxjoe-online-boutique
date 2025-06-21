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
    <footer className="footer">
      <div className="section-container padding-vertical-xl sm\:padding-vertical-2xl">
        <div className="grid-layout grid-1 sm\:grid-2 lg\:grid-4 gap-xl">
          {/* Brand */}
          <div className="text-center sm\:text-left">
            <h3 className="subheading-lg sm\:subheading-xl font-bold text-primary margin-bottom-base">MaxJoe</h3>
            <p className="text-secondary margin-bottom-lg line-height-relaxed body-sm sm\:body-base">
              Crafting timeless luxury jewelry since 1985. Each piece represents our commitment 
              to exceptional quality and elegant design.
            </p>
            <div className="flex-start space-horizontal-base flex-center sm\:flex-start">
              <a href="#" className="text-light hover\:text-secondary transition-colors">
                <span className="visually-hidden">Facebook</span>
                <div className="size-6 bg-light rounded"></div>
              </a>
              <a href="#" className="text-light hover\:text-secondary transition-colors">
                <span className="visually-hidden">Instagram</span>
                <div className="size-6 bg-light rounded"></div>
              </a>
              <a href="#" className="text-light hover\:text-secondary transition-colors">
                <span className="visually-hidden">Twitter</span>
                <div className="size-6 bg-light rounded"></div>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="text-center sm\:text-left">
            <h4 className="body-sm font-semibold text-primary text-uppercase letter-spacing-wider margin-bottom-base">Shop</h4>
            <ul className="space-vertical-sm">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-secondary hover\:text-primary transition-colors body-sm sm\:body-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="text-center sm\:text-left">
            <h4 className="body-sm font-semibold text-primary text-uppercase letter-spacing-wider margin-bottom-base">Support</h4>
            <ul className="space-vertical-sm">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-secondary hover\:text-primary transition-colors body-sm sm\:body-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center sm\:text-left">
            <h4 className="body-sm font-semibold text-primary text-uppercase letter-spacing-wider margin-bottom-base">Company</h4>
            <ul className="space-vertical-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-secondary hover\:text-primary transition-colors body-sm sm\:body-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-top border-base margin-top-xl sm\:margin-top-2xl padding-top-xl flex-column md\:flex-row flex-center md\:flex-between text-center md\:text-left">
          <p className="text-muted body-xs sm\:body-sm">
            © 2024 MaxJoe Luxury Jewelry. All rights reserved.
          </p>
          <div className="flex-column sm\:flex-row space-vertical-sm sm\:space-horizontal-lg margin-top-base md\:margin-top-none">
            <a href="/privacy" className="text-muted hover\:text-primary-light body-xs sm\:body-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted hover\:text-primary-light body-xs sm\:body-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
