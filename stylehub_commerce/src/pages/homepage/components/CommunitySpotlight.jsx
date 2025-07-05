import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CommunitySpotlight = () => {
  const [currentFeedIndex, setCurrentFeedIndex] = useState(0);

  const communityPosts = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        username: "@sarahstyles",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        verified: true
      },
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
      caption: "Perfect work outfit that transitions to evening drinks! 💼✨",
      hashtags: ["#StyleHubLooks", "#WorkToWeekend", "#MinimalistChic"],
      likes: 234,
      comments: 18,
      timeAgo: "2h",
      products: [
        { name: "Wool Blazer", price: 189 },
        { name: "Silk Blouse", price: 95 }
      ]
    },
    {
      id: 2,
      user: {
        name: "Maya Rodriguez",
        username: "@mayafashion",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        verified: false
      },
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=400&h=500&fit=crop",
      caption: "Sustainable fashion doesn't mean compromising on style! 🌱",
      hashtags: ["#StyleHubLooks", "#SustainableFashion", "#EcoChic"],
      likes: 189,
      comments: 24,
      timeAgo: "4h",
      products: [
        { name: "Organic Cotton Dress", price: 78 },
        { name: "Recycled Accessories", price: 32 }
      ]
    },
    {
      id: 3,
      user: {
        name: "Jordan Kim",
        username: "@jordanstyle",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        verified: true
      },
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=400&h=500&fit=crop",
      caption: "Bold patterns and confident styling for the weekend! 🔥",
      hashtags: ["#StyleHubLooks", "#BoldFashion", "#WeekendVibes"],
      likes: 312,
      comments: 31,
      timeAgo: "6h",
      products: [
        { name: "Statement Jacket", price: 145 },
        { name: "Designer Jeans", price: 98 }
      ]
    },
    {
      id: 4,
      user: {
        name: "Alex Thompson",
        username: "@alexthreads",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        verified: false
      },
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      caption: "Layering game strong for the autumn season! 🍂",
      hashtags: ["#StyleHubLooks", "#AutumnStyle", "#LayeringMaster"],
      likes: 156,
      comments: 12,
      timeAgo: "8h",
      products: [
        { name: "Cashmere Sweater", price: 125 },
        { name: "Wool Coat", price: 225 }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeedIndex((prev) => (prev + 1) % communityPosts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [communityPosts.length]);

  const featuredPost = communityPosts[currentFeedIndex];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Users" size={24} className="text-accent" />
            <h2 className="text-3xl lg:text-4xl font-semibold text-primary font-accent">
              Community Spotlight
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get inspired by real customers styling their favorite pieces from StyleHub
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Featured Post */}
          <div className="order-2 lg:order-1">
            <div className="bg-surface rounded-2xl shadow-lg overflow-hidden">
              {/* Post Header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Image
                      src={featuredPost.user.avatar}
                      alt={featuredPost.user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {featuredPost.user.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                        <Icon name="Check" size={12} color="white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-primary">
                      {featuredPost.user.name}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {featuredPost.user.username} • {featuredPost.timeAgo}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="MoreHorizontal"
                    className="text-text-secondary"
                  />
                </div>
              </div>

              {/* Post Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt="Community style post"
                  className="w-full h-full object-cover"
                />
                
                {/* Product Tags */}
                <div className="absolute top-4 left-4 space-y-2">
                  {featuredPost.products.slice(0, 2).map((product, index) => (
                    <div
                      key={index}
                      className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 text-sm"
                    >
                      <p className="font-medium text-primary">{product.name}</p>
                      <p className="text-accent font-semibold">${product.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-4 space-y-4">
                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors">
                      <Icon name="Heart" size={20} />
                      <span className="text-sm font-medium">{featuredPost.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors">
                      <Icon name="MessageCircle" size={20} />
                      <span className="text-sm font-medium">{featuredPost.comments}</span>
                    </button>
                    <button className="text-text-secondary hover:text-primary transition-colors">
                      <Icon name="Share" size={20} />
                    </button>
                  </div>
                  <button className="text-text-secondary hover:text-accent transition-colors">
                    <Icon name="Bookmark" size={20} />
                  </button>
                </div>

                {/* Caption */}
                <div>
                  <p className="text-primary mb-2">{featuredPost.caption}</p>
                  <div className="flex flex-wrap gap-1">
                    {featuredPost.hashtags.map((tag, index) => (
                      <span key={index} className="text-accent text-sm hover:underline cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Stats & CTA */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-4 font-accent">
                Join the Style Community
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Share your StyleHub looks and get inspired by thousands of fashion enthusiasts. 
                Tag your posts with #StyleHubLooks to be featured!
              </p>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-surface rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-accent mb-2">12.5K</div>
                <div className="text-text-secondary">Style Posts</div>
              </div>
              <div className="text-center p-6 bg-surface rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-accent mb-2">8.2K</div>
                <div className="text-text-secondary">Active Stylists</div>
              </div>
            </div>

            {/* Feed Navigation */}
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              {communityPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeedIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFeedIndex
                      ? 'bg-accent scale-125' :'bg-border hover:bg-accent/50'
                  }`}
                  aria-label={`View post ${index + 1}`}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/community-style-gallery" className="flex-1">
                <Button
                  variant="primary"
                  size="lg"
                  iconName="Camera"
                  iconPosition="left"
                  className="w-full cta-button"
                >
                  View Gallery
                </Button>
              </Link>
              <Link to="/account-style-profile" className="flex-1">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Upload"
                  iconPosition="left"
                  className="w-full cta-button"
                >
                  Share Your Style
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySpotlight;