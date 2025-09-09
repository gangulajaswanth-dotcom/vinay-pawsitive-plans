import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Heart, User, LogOut, Settings } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { AuthModal } from "@/components/AuthModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();
  const { user, loading, signOut } = useAuth();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Vinay", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Book Session", href: "/book" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-foreground">Vinay Pendyala</span>
              <p className="text-xs text-muted-foreground">Pet Nutrition Coach</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            {!loading && (
              <>
                {user ? (
                  <>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/shop">Buy Plans</Link>
                    </Button>
                    <Button variant="booking" size="sm" asChild>
                      <Link to="/book">Book Session – ₹899</Link>
                    </Button>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {user.email?.split('@')[0]}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem asChild>
                          <Link to="/dashboard" className="flex items-center gap-2">
                            <Settings className="h-4 w-4" />
                            Dashboard
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={signOut} className="flex items-center gap-2 text-destructive">
                          <LogOut className="h-4 w-4" />
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/shop">Buy Plans</Link>
                    </Button>
                    <Button variant="booking" size="sm" asChild>
                      <Link to="/book">Book Session – ₹899</Link>
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm"
                      onClick={() => setIsAuthModalOpen(true)}
                    >
                      Login / Register
                    </Button>
                  </>
                )}
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-muted rounded-md ${
                    isActive(item.href) ? "text-primary bg-muted" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" asChild>
                  <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Buy Plans</Link>
                </Button>
                <Button variant="booking" asChild>
                  <Link to="/book" onClick={() => setIsMenuOpen(false)}>Book Session – ₹899</Link>
                </Button>
                
                {!loading && (
                  <>
                    {user ? (
                      <>
                        <Button variant="default" asChild>
                          <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                        </Button>
                        <Button variant="ghost" onClick={() => { signOut(); setIsMenuOpen(false); }}>
                          Logout
                        </Button>
                      </>
                    ) : (
                      <Button 
                        variant="default"
                        onClick={() => { setIsAuthModalOpen(true); setIsMenuOpen(false); }}
                      >
                        Login / Register
                      </Button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </header>
  );
};

export default Header;