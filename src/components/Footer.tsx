
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
      <div className="section-container section-padding">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="logo">MaxJoe</h3>
            <p className="footer-description">
              Crafting timeless luxury jewelry since 1985. Each piece represents our commitment 
              to exceptional quality and elegant design.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <span className="visually-hidden">Facebook</span>
                <div className="social-icon"></div>
              </a>
              <a href="#" className="social-link">
                <span className="visually-hidden">Instagram</span>
                <div className="social-icon"></div>
              </a>
              <a href="#" className="social-link">
                <span className="visually-hidden">Twitter</span>
                <div className="social-icon"></div>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="footer-section">
            <h4 className="footer-title">Shop</h4>
            <ul className="footer-links">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 MaxJoe Luxury Jewelry. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="/privacy" className="legal-link">
              Privacy Policy
            </a>
            <a href="/terms" className="legal-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
