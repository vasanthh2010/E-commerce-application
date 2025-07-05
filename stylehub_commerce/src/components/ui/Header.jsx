import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Products', path: '/individual-product-experience', icon: 'ShoppingBag' },
    { name: 'Style Gallery', path: '/community-style-gallery', icon: 'Camera' },
    { name: 'Brand Stories', path: '/brand-designer-stories', icon: 'BookOpen' },
    { name: 'My Profile', path: '/account-style-profile', icon: 'User' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth ${
        isScrolled 
          ? 'bg-surface/95 backdrop-blur-glass shadow-md' 
          : 'bg-surface/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-brand-primary to-accent rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <Icon 
                  name="Sparkles" 
                  size={24} 
                  color="white" 
                  className="lg:w-7 lg:h-7"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-semibold text-primary tracking-tight">
                StyleHub
              </h1>
              <p className="text-xs lg:text-sm text-text-secondary font-medium -mt-1">
                Commerce
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item.path)
                    ? 'text-accent bg-accent-50' :'text-text-secondary hover:text-primary hover:bg-primary-50'
                }`}
              >
                <Icon 
                  name={item.icon} 
                  size={18} 
                  className={`transition-colors duration-300 ${
                    isActivePath(item.path) ? 'text-accent' : 'text-current'
                  }`}
                />
                <span>{item.name}</span>
                {isActivePath(item.path) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              iconName="Search"
              iconSize={20}
              className="text-text-secondary hover:text-primary"
              onClick={() => {}}
            >
              Search
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              iconName="Heart"
              iconSize={20}
              className="text-text-secondary hover:text-primary relative"
              onClick={() => {}}
            >
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"></span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              iconName="ShoppingCart"
              iconSize={20}
              className="text-text-secondary hover:text-primary relative"
              onClick={() => {}}
            >
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-conversion-accent text-white text-xs rounded-full flex items-center justify-center font-medium">
                2
              </span>
            </Button>

            <Button
              variant="primary"
              size="sm"
              iconName="User"
              iconPosition="left"
              className="ml-2"
              onClick={() => {}}
            >
              Account
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              iconName="Search"
              iconSize={20}
              className="text-text-secondary"
              onClick={() => {}}
            />
            
            <Button
              variant="ghost"
              size="sm"
              iconName="ShoppingCart"
              iconSize={20}
              className="text-text-secondary relative"
              onClick={() => {}}
            >
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-conversion-accent text-white text-xs rounded-full flex items-center justify-center font-medium">
                2
              </span>
            </Button>

            <button
              onClick={toggleMenu}
              className="p-2 text-text-secondary hover:text-primary transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? "X" : "Menu"} 
                size={24} 
                className="transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-smooth overflow-hidden ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 pb-6' :'max-h-0 opacity-0 pb-0'
          }`}
        >
          <nav className="pt-4 border-t border-border">
            <div className="space-y-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'text-accent bg-accent-50 border-l-4 border-accent' :'text-text-secondary hover:text-primary hover:bg-primary-50'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon 
                    name={item.icon} 
                    size={20} 
                    className={`transition-colors duration-300 ${
                      isActivePath(item.path) ? 'text-accent' : 'text-current'
                    }`}
                  />
                  <span>{item.name}</span>
                  {isActivePath(item.path) && (
                    <Icon name="ChevronRight" size={16} className="ml-auto text-accent" />
                  )}
                </Link>
              ))}
            </div>

            <div className="pt-4 mt-4 border-t border-border">
              <div className="flex items-center justify-between px-4">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Heart"
                  iconPosition="left"
                  className="text-text-secondary"
                  onClick={closeMenu}
                >
                  Wishlist
                </Button>
                
                <Button
                  variant="primary"
                  size="sm"
                  iconName="User"
                  iconPosition="left"
                  onClick={closeMenu}
                >
                  Account
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;