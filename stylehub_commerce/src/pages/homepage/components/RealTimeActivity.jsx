import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const RealTimeActivity = () => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const activities = [
    {
      id: 1,
      type: "purchase",
      user: "Sarah M.",
      location: "New York",
      action: "just purchased",
      item: "Sustainable Wool Blazer",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=100&fit=crop",
      timeAgo: "2 minutes ago",
      icon: "ShoppingBag"
    },
    {
      id: 2,
      type: "styling",
      user: "Maya R.",
      location: "Los Angeles",
      action: "styled the perfect work outfit with",
      item: "Organic Cotton Midi Dress",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=100&h=100&fit=crop",
      timeAgo: "5 minutes ago",
      icon: "Sparkles"
    },
    {
      id: 3,
      type: "trending",
      user: "127 people",
      location: "worldwide",
      action: "are viewing this trending",
      item: "Recycled Denim Jacket",
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=100&h=100&fit=crop",
      timeAgo: "now",
      icon: "TrendingUp"
    },
    {
      id: 4,
      type: "review",
      user: "Jordan K.",
      location: "Chicago",
      action: "left a 5-star review for",
      item: "Bamboo Fiber T-Shirt",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop",
      timeAgo: "8 minutes ago",
      icon: "Star"
    },
    {
      id: 5,
      type: "wishlist",
      user: "Alex T.",
      location: "Miami",
      action: "added to wishlist",
      item: "Designer Cashmere Sweater",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&h=100&fit=crop",
      timeAgo: "12 minutes ago",
      icon: "Heart"
    },
    {
      id: 6,
      type: "community",
      user: "Emma L.",
      location: "Seattle",
      action: "shared a #StyleHubLooks post featuring",
      item: "Sustainable Luxe Collection",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=100&fit=crop",
      timeAgo: "15 minutes ago",
      icon: "Camera"
    }
  ];

  const stats = [
    {
      id: 1,
      value: "2.4K",
      label: "Active shoppers",
      icon: "Users",
      color: "text-accent"
    },
    {
      id: 2,
      value: "156",
      label: "Items sold today",
      icon: "ShoppingCart",
      color: "text-success"
    },
    {
      id: 3,
      value: "89%",
      label: "Customer satisfaction",
      icon: "ThumbsUp",
      color: "text-warning"
    },
    {
      id: 4,
      value: "4.8",
      label: "Average rating",
      icon: "Star",
      color: "text-conversion-accent"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentActivityIndex((prev) => (prev + 1) % activities.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(timer);
  }, [activities.length]);

  const currentActivity = activities[currentActivityIndex];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-50 to-accent-50">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Activity" size={24} className="text-accent" />
            <h2 className="text-3xl lg:text-4xl font-semibold text-primary font-accent">
              Live Style Activity
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            See what's happening right now in the StyleHub community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Real-time Stats */}
          <div className="lg:col-span-1">
            <div className="bg-surface rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-6 font-accent">
                Right Now
              </h3>
              <div className="space-y-6">
                {stats.map((stat) => (
                  <div key={stat.id} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Icon name={stat.icon} size={20} className={stat.color} />
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-text-secondary text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Live Activity Feed */}
          <div className="lg:col-span-2">
            <div className="bg-surface rounded-2xl p-8 shadow-lg min-h-[300px] flex items-center justify-center">
              <div className={`w-full transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-center space-x-6">
                  {/* Activity Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-600 rounded-full flex items-center justify-center">
                      <Icon name={currentActivity.icon} size={24} color="white" />
                    </div>
                  </div>

                  {/* Activity Content */}
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="flex-1">
                        <p className="text-lg text-primary leading-relaxed">
                          <span className="font-semibold">{currentActivity.user}</span>
                          {currentActivity.location && (
                            <span className="text-text-secondary"> from {currentActivity.location}</span>
                          )}
                          <span> {currentActivity.action} </span>
                          <span className="font-medium text-accent">{currentActivity.item}</span>
                        </p>
                        <p className="text-text-secondary text-sm mt-2">
                          {currentActivity.timeAgo}
                        </p>
                      </div>

                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-accent-100">
                          <Image
                            src={currentActivity.image}
                            alt={currentActivity.item}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activity Type Badge */}
                <div className="flex justify-center mt-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    currentActivity.type === 'purchase' ? 'bg-success-100 text-success' :
                    currentActivity.type === 'styling' ? 'bg-accent-100 text-accent' :
                    currentActivity.type === 'trending' ? 'bg-warning-100 text-warning' :
                    currentActivity.type === 'review' ? 'bg-conversion-accent/10 text-conversion-accent' :
                    currentActivity.type === 'wishlist'? 'bg-error-100 text-error' : 'bg-primary-100 text-primary'
                  }`}>
                    <Icon 
                      name={currentActivity.icon} 
                      size={12} 
                      className="mr-1" 
                    />
                    {currentActivity.type.charAt(0).toUpperCase() + currentActivity.type.slice(1)}
                  </span>
                </div>
              </div>
            </div>

            {/* Activity Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {activities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsVisible(false);
                    setTimeout(() => {
                      setCurrentActivityIndex(index);
                      setIsVisible(true);
                    }, 300);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentActivityIndex
                      ? 'bg-accent scale-125' :'bg-border hover:bg-accent/50'
                  }`}
                  aria-label={`View activity ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Social Proof CTA */}
        <div className="text-center mt-12">
          <div className="bg-surface rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4 font-accent">
              Join the StyleHub Community
            </h3>
            <p className="text-text-secondary mb-6">
              Be part of the fashion conversation. Share your style, discover trends, and connect with fellow fashion enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/community-style-gallery">
                <Button
                  variant="primary"
                  size="lg"
                  iconName="Users"
                  iconPosition="left"
                  className="cta-button"
                >
                  Join Community
                </Button>
              </Link>
              <Link to="/individual-product-experience">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ShoppingBag"
                  iconPosition="left"
                  className="cta-button"
                >
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeActivity;