
import { useState } from "react";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigation = [
    { name: "Watches", href: "/watches" },
    { name: "Necklaces", href: "/necklaces" },
    { name: "Bracelets", href: "/bracelets" },
    { name: "Collections", href: "/collections" },
  ];

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

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="btn btn-ghost md-display-hidden padding-sm">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="size-80">
                <nav className="flex-column space-vertical-base margin-top-xl">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-primary-light hover-text-primary font-medium padding-vertical-sm border-bottom border-light subheading-lg"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
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
      </div>
    </header>
  );
};

export default Header;
