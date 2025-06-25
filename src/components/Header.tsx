
import { useState, useEffect, useRef } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { getCartCount } = useCart();

  const cartCount = getCartCount();

  const navigation = [
    { name: "Watches", href: "/watches" },
    { name: "Necklaces", href: "/necklaces" },
    { name: "Bracelets", href: "/bracelets" },
    { name: "Collections", href: "/collections" },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Don't close if clicking on the menu button or mobile menu container
      if (
        menuButtonRef.current?.contains(target) ||
        mobileMenuRef.current?.contains(target)
      ) {
        return;
      }
      
      // Close menu if clicking outside
      if (isMobileMenuOpen) {
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

  // Close search when clicking outside
  useEffect(() => {
    const handleSearchClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Don't close if clicking on the search button or search container
      if (
        searchButtonRef.current?.contains(target) ||
        searchContainerRef.current?.contains(target)
      ) {
        return;
      }
      
      // Close search if clicking outside
      if (isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleSearchClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleSearchClickOutside);
    };
  }, [isSearchOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
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
              ref={searchButtonRef}
              variant="ghost"
              size="sm"
              onClick={toggleSearch}
              className="btn btn-ghost padding-sm"
            >
              <Search className="size-4 sm-size-5" />
            </Button>
            <Link to="/profile">
              <Button variant="ghost" size="sm" className="btn btn-ghost padding-sm">
                <User className="size-4 sm-size-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="btn btn-ghost position-relative padding-sm">
                <ShoppingCart className="size-4 sm-size-5" />
                {cartCount > 0 && (
                  <span className="position-absolute bg-red-500 text-white body-xs rounded-full size-4 sm-size-5 flex-center" style={{top: '-0.25rem', right: '-0.25rem'}}>
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button - Only visible on mobile */}
            <Button 
              ref={menuButtonRef}
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
          <div ref={searchContainerRef} className="search-container">
            <div className="search-inner">
              <div className="search-input-wrapper">
                <Input
                  type="text"
                  placeholder="Search luxury jewelry..."
                  className="search-input"
                />
                <Search className="search-icon" />
              </div>
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
