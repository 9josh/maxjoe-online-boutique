
import { useState, useEffect, useRef } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navigation = [
    { name: "Watches", href: "/watches" },
    { name: "Necklaces", href: "/necklaces" },
    { name: "Bracelets", href: "/bracelets" },
    { name: "Collections", href: "/collections" },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (href: string) => {
    // If clicking on the current page, just close the menu
    if (location.pathname === href) {
      setIsMobileMenuOpen(false);
      return;
    }
    // For navigation to other pages, React Router will handle it
    // and the menu will close naturally
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="section-container">
        <div className="flex-between padding-vertical-base">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="logo sm-subheading-lg">
                MaxJoe
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="md-display-block space-horizontal-lg lg-space-horizontal-xl display-hidden">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link body-sm lg-body-base"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex-start space-horizontal-sm sm-space-horizontal-base">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="btn btn-ghost padding-sm"
            >
              <Search className="size-4 sm-size-5" />
            </Button>
            <Button variant="ghost" size="sm" className="btn btn-ghost padding-sm">
              <User className="size-4 sm-size-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="btn btn-ghost position-relative padding-sm">
                <ShoppingCart className="size-4 sm-size-5" />
                <span className="position-absolute bg-primary text-white body-xs rounded-full size-4 sm-size-5 flex-center" style={{top: '-0.25rem', right: '-0.25rem'}}>
                  2
                </span>
              </Button>
            </Link>

            {/* Mobile Menu Button - Only visible on mobile */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMobileMenu}
              className="btn btn-ghost md-display-hidden padding-sm"
            >
              {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="padding-vertical-base border-top border-light">
            <div className="position-relative container-xs margin-auto">
              <Input
                type="text"
                placeholder="Search luxury jewelry..."
                className="input padding-left-xl bg-light border-base hover-border-dark"
                style={{paddingLeft: '2.5rem'}}
              />
              <Search className="position-absolute size-4 text-muted" style={{left: '0.75rem', top: '50%', transform: 'translateY(-50%)'}} />
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="mobile-nav-container md-display-hidden"
          >
            <nav className="mobile-nav-content">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavLinkClick(item.href)}
                  className="mobile-nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
