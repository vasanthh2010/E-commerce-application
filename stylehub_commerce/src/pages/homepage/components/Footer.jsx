import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "New Arrivals", path: "/individual-product-experience" },
        { name: "Trending Now", path: "/individual-product-experience" },
        { name: "Sustainable Fashion", path: "/individual-product-experience" },
        { name: "Sale", path: "/individual-product-experience" },
        { name: "Gift Cards", path: "/individual-product-experience" }
      ]
    },
    {
      title: "Style",
      links: [
        { name: "Style Gallery", path: "/community-style-gallery" },
        { name: "Style Quiz", path: "/account-style-profile" },
        { name: "Outfit Builder", path: "/account-style-profile" },
        { name: "Trend Reports", path: "/brand-designer-stories" },
        { name: "Style Tips", path: "/brand-designer-stories" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "StyleHub Looks", path: "/community-style-gallery" },
        { name: "Brand Stories", path: "/brand-designer-stories" },
        { name: "Style Challenges", path: "/community-style-gallery" },
        { name: "Fashion Blog", path: "/brand-designer-stories" },
        { name: "Influencer Program", path: "/community-style-gallery" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/account-style-profile" },
        { name: "Size Guide", path: "/individual-product-experience" },
        { name: "Returns & Exchanges", path: "/account-style-profile" },
        { name: "Shipping Info", path: "/account-style-profile" },
        { name: "Contact Us", path: "/account-style-profile" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "Instagram", url: "#" },
    { name: "Facebook", icon: "Facebook", url: "#" },
    { name: "Twitter", icon: "Twitter", url: "#" },
    { name: "Pinterest", icon: "Camera", url: "#" },
    { name: "TikTok", icon: "Video", url: "#" }
  ];

  const sustainabilityCertifications = [
    { name: "B-Corp Certified", icon: "Award" },
    { name: "Carbon Neutral", icon: "Leaf" },
    { name: "Fair Trade", icon: "Heart" },
    { name: "GOTS Certified", icon: "Shield" }
  ];

  return (
    <footer className="bg-primary-800 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-accent to-accent-600 py-12">
        <div className="container-max section-padding">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4 font-accent">
              Stay in Style
            </h3>
            <p className="text-accent-100 mb-6">
              Get the latest trends, exclusive offers, and style inspiration delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/70 focus:border-white"
              />
              <Button
                variant="primary"
                size="md"
                iconName="Send"
                iconPosition="right"
                className="bg-white text-accent hover:bg-white/90"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-accent-100 text-sm mt-3">
              Join 50,000+ style enthusiasts. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/homepage" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-600 rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={24} color="white" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight">StyleHub</h1>
                  <p className="text-sm text-primary-300 -mt-1">Commerce</p>
                </div>
              </Link>
              <p className="text-primary-300 mb-6 leading-relaxed">
                Where style meets sustainability. Discover fashion that fits your life, 
                values, and personal aesthetic with our curated collection of conscious brands.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="lg:col-span-1">
                <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-primary-300 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sustainability Certifications */}
      <div className="border-t border-primary-700 py-8">
        <div className="container-max section-padding">
          <div className="text-center mb-6">
            <h4 className="font-semibold text-lg mb-2">Our Commitments</h4>
            <p className="text-primary-300 text-sm">
              Certified sustainable and ethical practices
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {sustainabilityCertifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center space-x-2 bg-primary-700 rounded-lg px-4 py-2"
              >
                <Icon name={cert.icon} size={16} className="text-success" />
                <span className="text-sm font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-700 py-6">
        <div className="container-max section-padding">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-primary-300 text-sm">
                © {currentYear} StyleHub Commerce. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <Link to="/account-style-profile" className="text-primary-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/account-style-profile" className="text-primary-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="/account-style-profile" className="text-primary-300 hover:text-white transition-colors">
                  Accessibility
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-primary-300 text-sm">Secure payments</span>
              <div className="flex space-x-2">
                <div className="w-8 h-6 bg-primary-600 rounded flex items-center justify-center">
                  <Icon name="CreditCard" size={14} />
                </div>
                <div className="w-8 h-6 bg-primary-600 rounded flex items-center justify-center">
                  <Icon name="Smartphone" size={14} />
                </div>
                <div className="w-8 h-6 bg-primary-600 rounded flex items-center justify-center">
                  <Icon name="Shield" size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;