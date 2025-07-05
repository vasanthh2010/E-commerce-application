import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import ProfileHeader from './components/ProfileHeader';
import StylePreferences from './components/StylePreferences';
import OrderHistory from './components/OrderHistory';
import WishlistManager from './components/WishlistManager';
import LoyaltyProgram from './components/LoyaltyProgram';
import AccountSettings from './components/AccountSettings';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const AccountStyleProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Mock user data
  const userData = {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    memberSince: "Member since 2022",
    loyaltyTier: "Style Curator",
    styleScore: 85,
    totalOrders: 24,
    stats: {
      wishlistItems: 12,
      loyaltyPoints: 2450,
      referrals: 8,
      reviews: 15
    }
  };

  const stylePreferences = {
    styleCategories: ['minimalist', 'business', 'casual'],
    preferredColors: 'neutral',
    preferredFit: 'Tailored with comfortable room',
    sizeRange: 'S-M (US 4-8)',
    sustainabilityPriorities: ['Eco-friendly materials', 'Ethical manufacturing', 'Local brands', 'Minimal packaging']
  };

  const orderHistory = [
    {
      id: 1,
      orderNumber: "SH-2024-001",
      date: "March 15, 2024",
      status: "delivered",
      total: 245.99,
      trackingNumber: "TRK123456789",
      items: [
        {
          name: "Organic Cotton Blazer",
          brand: "EcoStyle",
          size: "M",
          color: "Navy",
          quantity: 1,
          price: 129.99,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=150&fit=crop"
        },
        {
          name: "Sustainable Silk Blouse",
          brand: "GreenThread",
          size: "S",
          color: "Ivory",
          quantity: 1,
          price: 89.99,
          image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=150&h=150&fit=crop"
        }
      ]
    },
    {
      id: 2,
      orderNumber: "SH-2024-002",
      date: "March 10, 2024",
      status: "processing",
      total: 189.50,
      trackingNumber: "TRK987654321",
      items: [
        {
          name: "Recycled Wool Sweater",
          brand: "EarthWear",
          size: "M",
          color: "Charcoal",
          quantity: 2,
          price: 94.75,
          image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=150&h=150&fit=crop"
        }
      ]
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "Vintage-Inspired Midi Dress",
      brand: "RetroChic",
      price: 159.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop",
      dateAdded: "2 days ago",
      priceDropped: true,
      backInStock: false,
      lowStock: false
    },
    {
      id: 2,
      name: "Sustainable Denim Jacket",
      brand: "EcoFashion",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=300&h=300&fit=crop",
      dateAdded: "1 week ago",
      priceDropped: false,
      backInStock: true,
      lowStock: false
    },
    {
      id: 3,
      name: "Minimalist Leather Handbag",
      brand: "CleanLines",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      dateAdded: "3 days ago",
      priceDropped: false,
      backInStock: false,
      lowStock: true
    }
  ];

  const loyaltyData = {
    points: 2450,
    tier: "Style Curator",
    availableRewards: [
      {
        id: 1,
        title: "$25 Style Credit",
        description: "Use towards any purchase",
        points: 500,
        icon: "Gift"
      },
      {
        id: 2,
        title: "Free Personal Styling Session",
        description: "60-minute virtual consultation",
        points: 1000,
        icon: "Users"
      },
      {
        id: 3,
        title: "Exclusive Designer Preview",
        description: "Early access to new collections",
        points: 1500,
        icon: "Eye"
      }
    ],
    recentActivity: [
      {
        type: "earned",
        description: "Purchase reward points",
        points: 245,
        date: "March 15, 2024"
      },
      {
        type: "redeemed",
        description: "Free shipping reward",
        points: 100,
        date: "March 10, 2024"
      },
      {
        type: "earned",
        description: "Review bonus points",
        points: 50,
        date: "March 8, 2024"
      }
    ]
  };

  const accountSettings = {
    personal: {
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      dateOfBirth: "1990-05-15"
    },
    notifications: {
      email: {
        orderUpdates: true,
        promotions: true,
        styleUpdates: false,
        newsletter: true
      },
      push: {
        orderUpdates: true,
        priceDrops: true,
        backInStock: false
      }
    },
    privacy: {
      profileVisibility: {
        publicProfile: false,
        showPurchases: false,
        showWishlist: true
      },
      dataSharing: {
        analytics: true,
        personalization: true,
        marketing: false
      }
    },
    security: {
      twoFactorEnabled: false,
      loginActivity: [
        {
          device: "desktop",
          location: "New York, NY",
          date: "Today at 2:30 PM",
          current: true
        },
        {
          device: "mobile",
          location: "New York, NY",
          date: "Yesterday at 8:15 AM",
          current: false
        },
        {
          device: "desktop",
          location: "Boston, MA",
          date: "March 10, 2024",
          current: false
        }
      ]
    }
  };

  const navigationItems = [
    { id: 'overview', name: 'Overview', icon: 'LayoutDashboard' },
    { id: 'style', name: 'Style Profile', icon: 'Palette' },
    { id: 'orders', name: 'Order History', icon: 'Package' },
    { id: 'wishlist', name: 'Wishlist', icon: 'Heart' },
    { id: 'rewards', name: 'Style Rewards', icon: 'Award' },
    { id: 'settings', name: 'Settings', icon: 'Settings' }
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const handleEditProfile = () => {
    setActiveSection('settings');
  };

  const handleUpdatePreferences = (newPreferences) => {
    console.log('Updated preferences:', newPreferences);
  };

  const handleRemoveWishlistItem = (itemId) => {
    console.log('Remove wishlist item:', itemId);
  };

  const handleMoveToCart = (itemId) => {
    console.log('Move to cart:', itemId);
  };

  const handleUpdateSettings = (newSettings) => {
    console.log('Updated settings:', newSettings);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            <ProfileHeader user={userData} onEditProfile={handleEditProfile} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-surface rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-primary">Recent Orders</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={() => setActiveSection('orders')}
                  >
                    View All
                  </Button>
                </div>
                <div className="space-y-3">
                  {orderHistory.slice(0, 2).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                      <div>
                        <p className="font-medium text-primary">#{order.orderNumber}</p>
                        <p className="text-text-secondary text-sm">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">${order.total}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          order.status === 'delivered' ? 'bg-success-50 text-success' : 'bg-warning-50 text-warning'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-primary">Wishlist Highlights</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={() => setActiveSection('wishlist')}
                  >
                    View All
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {wishlistItems.slice(0, 2).map((item) => (
                    <div key={item.id} className="relative">
                      <div className="aspect-square rounded-lg overflow-hidden bg-background">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {item.priceDropped && (
                        <div className="absolute top-2 right-2 bg-success text-white text-xs px-2 py-1 rounded-full">
                          Sale!
                        </div>
                      )}
                      <p className="text-sm font-medium text-primary mt-2 line-clamp-2">{item.name}</p>
                      <p className="text-sm text-accent font-semibold">${item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Style Insights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-background rounded-lg">
                  <Icon name="TrendingUp" size={32} className="text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">85</div>
                  <div className="text-text-secondary text-sm">Style Score</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <Icon name="Heart" size={32} className="text-error mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{userData.stats.wishlistItems}</div>
                  <div className="text-text-secondary text-sm">Saved Items</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <Icon name="Star" size={32} className="text-warning mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{userData.stats.loyaltyPoints}</div>
                  <div className="text-text-secondary text-sm">Style Points</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <Icon name="Users" size={32} className="text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{userData.stats.referrals}</div>
                  <div className="text-text-secondary text-sm">Referrals</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'style':
        return <StylePreferences preferences={stylePreferences} onUpdatePreferences={handleUpdatePreferences} />;
      case 'orders':
        return <OrderHistory orders={orderHistory} />;
      case 'wishlist':
        return <WishlistManager wishlistItems={wishlistItems} onRemoveItem={handleRemoveWishlistItem} onMoveToCart={handleMoveToCart} />;
      case 'rewards':
        return <LoyaltyProgram loyaltyData={loyaltyData} />;
      case 'settings':
        return <AccountSettings settings={accountSettings} onUpdateSettings={handleUpdateSettings} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 lg:pt-24">
        <div className="container-max section-padding">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-surface rounded-xl border border-border p-4 sticky top-24">
                <nav className="space-y-2">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-accent text-white' :'text-text-secondary hover:text-primary hover:bg-background'
                      }`}
                    >
                      <Icon 
                        name={item.icon} 
                        size={20} 
                        className={activeSection === item.id ? 'text-white' : 'text-current'} 
                      />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white mt-16">
        <div className="container-max section-padding py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={24} color="white" />
              </div>
              <h3 className="text-2xl font-semibold">StyleHub Commerce</h3>
            </div>
            <p className="text-white/80 mb-6">
              Your personal style journey, curated with care
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-white/60">
              <span>© {new Date().getFullYear()} StyleHub Commerce</span>
              <span>•</span>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AccountStyleProfile;