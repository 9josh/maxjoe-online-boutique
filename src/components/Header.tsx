
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
      <div className="header-content">
        <div className="header-inner">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="logo text-xl sm:text-2xl">
                MaxJoe
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link text-sm lg:text-base"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="btn btn-ghost p-2"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="btn btn-ghost p-2">
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="btn btn-ghost relative p-2">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="absolute -top-1 -right-1 bg-gray-800 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                  2
                </span>
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="btn btn-ghost md:hidden p-2">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-gray-700 hover:text-gray-900 font-medium py-3 border-b border-gray-100 text-lg"
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
          <div className="py-4 border-t border-gray-100">
            <div className="relative max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search luxury jewelry..."
                className="input pl-10 bg-gray-50 border-gray-200 hover:border-gray-400"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
