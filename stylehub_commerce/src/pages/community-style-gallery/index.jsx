import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import StylePost from './components/StylePost';
import StyleChallenge from './components/StyleChallenge';
import StyleTwins from './components/StyleTwins';
import ExpertContent from './components/ExpertContent';
import FilterBar from './components/FilterBar';
import CommunityStats from './components/CommunityStats';

const CommunityStyleGallery = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [activeFilters, setActiveFilters] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for community posts
  const mockPosts = [
    {
      id: 1,
      user: {
        name: "Emma Rodriguez",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        isVerified: true
      },
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop",
      caption: "Loving this sustainable fashion find! Perfect for transitioning from work to weekend. The quality is amazing and it fits like a dream. #StyleHubSustainable #ConfidenceBuilding",
      location: "San Francisco, CA",
      category: "Sustainable",
      occasion: "Work to Weekend",
      hashtags: ["StyleHubSustainable", "ConfidenceBuilding", "WorkWear", "WeekendVibes"],
      likes: 234,
      shares: 45,
      timeAgo: "2 hours ago",
      isLiked: false,
      isSaved: false,
      badges: ["Eco-Friendly", "Top Rated"],
      products: [
        {
          id: 1,
          name: "Organic Cotton Blazer",
          price: 89,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=100&fit=crop",
          x: 30,
          y: 40
        },
        {
          id: 2,
          name: "Recycled Denim Jeans",
          price: 65,
          image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=100&h=100&fit=crop",
          x: 60,
          y: 70
        }
      ]
    },
    {
      id: 2,
      user: {
        name: "Sophia Chen",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        isVerified: false
      },
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=600&fit=crop",
      caption: "Date night ready! This outfit makes me feel so confident and elegant. The fit is perfect and the color is stunning. Can\'t wait to wear it out tonight!",
      location: "New York, NY",
      category: "Elegant",
      occasion: "Date Night",
      hashtags: ["DateNightLook", "ConfidenceBuilding", "Elegant"],
      likes: 189,
      shares: 32,
      timeAgo: "4 hours ago",
      isLiked: true,
      isSaved: false,
      badges: ["Trending"],
      products: [
        {
          id: 3,
          name: "Silk Wrap Dress",
          price: 145,
          image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=100&h=100&fit=crop",
          x: 45,
          y: 35
        }
      ]
    },
    {
      id: 3,
      user: {
        name: "Maya Patel",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        isVerified: true
      },
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=600&fit=crop",
      caption: "Casual Friday vibes! Found these amazing pieces that are both comfortable and stylish. Perfect for those long work days when you want to look put-together but feel relaxed.",
      location: "Austin, TX",
      category: "Casual",
      occasion: "Work",
      hashtags: ["WorkWear", "CasualFriday", "Comfort"],
      likes: 156,
      shares: 28,
      timeAgo: "6 hours ago",
      isLiked: false,
      isSaved: true,
      badges: ["Staff Pick"],
      products: [
        {
          id: 4,
          name: "Knit Cardigan",
          price: 78,
          image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=100&h=100&fit=crop",
          x: 25,
          y: 30
        },
        {
          id: 5,
          name: "High-Waist Trousers",
          price: 92,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=100&fit=crop",
          x: 55,
          y: 65
        }
      ]
    }
  ];

  // Mock data for style challenges
  const mockChallenges = [
    {
      id: 1,
      title: "Sustainable Style Challenge",
      description: "Show us how you style eco-friendly fashion pieces for maximum impact. Create looks that prove sustainable can be stylish!",
      endDate: "2024-02-15",
      participants: 1247,
      entries: 892,
      votes: 3456,
      hasJoined: false,
      prize: "$500 StyleHub gift card + featured styling session with our expert team",
      rules: [
        "Use at least one sustainable or eco-friendly piece",
        "Include product tags for all items",
        "Share your sustainability story in the caption",
        "Use hashtag #StyleHubSustainable"
      ],
      hashtags: ["StyleHubSustainable", "EcoFashion", "SustainableStyle"],
      featuredEntries: [
        {
          id: 1,
          user: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          },
          image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop",
          votes: 234
        },
        {
          id: 2,
          user: {
            name: "Jordan Kim",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
          },
          image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop",
          votes: 189
        }
      ]
    }
  ];

  // Mock data for style twins
  const mockStyleTwins = [
    {
      id: 1,
      name: "Isabella Martinez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      location: "Los Angeles, CA",
      followers: 2340,
      matchPercentage: 94,
      isVerified: true,
      sharedInterests: ["Minimalist", "Sustainable", "Work Wear", "Casual Chic", "Neutral Tones"],
      recentActivity: "Posted 3 new outfits this week",
      recentPosts: [
        { image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&h=100&fit=crop" },
        { image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=100&h=100&fit=crop" },
        { image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=100&h=100&fit=crop" }
      ]
    },
    {
      id: 2,
      name: "Zoe Thompson",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      location: "Seattle, WA",
      followers: 1890,
      matchPercentage: 89,
      isVerified: false,
      sharedInterests: ["Bohemian", "Vintage", "Sustainable", "Color Pop"],
      recentActivity: "Joined 2 style challenges",
      recentPosts: [
        { image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&h=100&fit=crop" },
        { image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=100&h=100&fit=crop" },
        { image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=100&h=100&fit=crop" }
      ]
    }
  ];

  // Mock data for expert content
  const mockExpertContent = [
    {
      id: 1,
      category: 'tips',
      title: "5 Essential Styling Rules That Never Go Out of Fashion",
      excerpt: "Master these timeless principles to elevate any outfit and build a versatile wardrobe that works for every occasion.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=300&fit=crop",
      expert: {
        name: "Rachel Sterling",
        title: "Celebrity Stylist & Fashion Consultant",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      readTime: 5,
      likes: 456,
      comments: 89,
      keyPoints: [
        "Fit is everything - invest in tailoring",
        "Build around quality basics",
        "Understand your body type and dress for it",
        "Color coordination creates instant polish",
        "Accessories can transform any outfit"
      ],
      tags: ["Styling Tips", "Wardrobe Basics", "Fashion Rules"]
    },
    {
      id: 2,
      category: 'trends',
      title: "Spring 2024 Trend Forecast: What\'s Coming Next",
      excerpt: "Get ahead of the curve with our comprehensive analysis of the trends that will dominate the upcoming season.",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=300&fit=crop",
      expert: {
        name: "Marcus Chen",
        title: "Fashion Trend Analyst",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      readTime: 8,
      likes: 678,
      comments: 134,
      keyPoints: [
        "Bold florals make a statement return",
        "Sustainable fabrics gain mainstream appeal",
        "Oversized blazers continue their reign",
        "Pastel color palettes dominate",
        "Vintage-inspired accessories are key"
      ],
      tags: ["Trend Forecast", "Spring 2024", "Fashion Trends"]
    },
    {
      id: 3,
      category: 'education',
      title: "Understanding Fabric Quality: A Buyer\'s Guide",
      excerpt: "Learn how to identify quality fabrics and make informed purchasing decisions that will enhance your wardrobe longevity.",
      expert: {
        name: "Dr. Sarah Williams",
        title: "Textile Expert & Sustainable Fashion Advocate",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      readTime: 12,
      likes: 234,
      comments: 67,
      keyPoints: [
        "Natural fibers vs synthetic materials",
        "How to read fabric labels correctly",
        "Signs of quality construction",
        "Care instructions that preserve quality",
        "Investment pieces worth the cost"
      ],
      tags: ["Fashion Education", "Fabric Guide", "Quality"]
    }
  ];

  // Mock community stats
  const mockStats = {
    totalPosts: 45678,
    activeChallenges: 12,
    communityMembers: 234567,
    expertContributions: 89,
    trendingTopics: [
      { name: "Sustainable Fashion", posts: 1234, growth: 23, engagement: "High" },
      { name: "Work From Home Style", posts: 987, growth: 18, engagement: "Medium" },
      { name: "Date Night Looks", posts: 756, growth: 31, engagement: "High" },
      { name: "Budget Fashion", posts: 654, growth: 15, engagement: "Medium" }
    ],
    recentActivity: [
      { user: "Emma R.", action: "joined challenge", target: "Sustainable Style", timeAgo: "2m" },
      { user: "Alex K.", action: "posted in", target: "#WorkWear", timeAgo: "5m" },
      { user: "Maya P.", action: "shared outfit", target: "Date Night", timeAgo: "8m" },
      { user: "Jordan L.", action: "voted in", target: "Style Challenge", timeAgo: "12m" }
    ],
    weeklyHighlights: [
      {
        icon: "TrendingUp",
        title: "Most Liked Post",
        description: "Emma\'s sustainable outfit got 2.3K likes this week!"
      },
      {
        icon: "Award",
        title: "Challenge Winner",
        description: "Congratulations to Maya for winning the Casual Chic challenge!"
      }
    ]
  };

  const tabs = [
    { id: 'feed', label: 'Style Feed', icon: 'Grid3X3' },
    { id: 'challenges', label: 'Challenges', icon: 'Trophy' },
    { id: 'twins', label: 'Style Twins', icon: 'Users' },
    { id: 'experts', label: 'Expert Tips', icon: 'Award' }
  ];

  const handleLike = (postId, isLiked) => {
    console.log(`Post ${postId} ${isLiked ? 'liked' : 'unliked'}`);
  };

  const handleShare = (postId) => {
    console.log(`Sharing post ${postId}`);
  };

  const handleSave = (postId, isSaved) => {
    console.log(`Post ${postId} ${isSaved ? 'saved' : 'unsaved'}`);
  };

  const handleJoinChallenge = (challengeId) => {
    console.log(`Joined challenge ${challengeId}`);
  };

  const handleVoteChallenge = (challengeId, entryId) => {
    console.log(`Voted for entry ${entryId} in challenge ${challengeId}`);
  };

  const handleConnectStyleTwin = (userId) => {
    console.log(`Connected with user ${userId}`);
  };

  const handleViewProfile = (userId) => {
    console.log(`Viewing profile of user ${userId}`);
  };

  const handleBookConsultation = () => {
    console.log('Booking expert consultation');
  };

  const handleSaveExpertPost = (postId) => {
    console.log(`Saved expert post ${postId}`);
  };

  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
    console.log('Filters changed:', filters);
  };

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [activeTab, activeFilters]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-text text-primary mb-6">
              Community Style Gallery
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Discover, share, and celebrate authentic style expression with our vibrant community of fashion enthusiasts
            </p>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                iconName="Camera"
                iconPosition="left"
                onClick={() => {}}
              >
                Share Your Style
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Trophy"
                iconPosition="left"
                onClick={() => setActiveTab('challenges')}
              >
                Join Challenges
              </Button>
              <Button
                variant="ghost"
                size="lg"
                iconName="Users"
                iconPosition="left"
                onClick={() => setActiveTab('twins')}
              >
                Find Style Twins
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Community Stats */}
              <CommunityStats stats={mockStats} />
              
              {/* Filter Bar */}
              <FilterBar
                onFilterChange={handleFilterChange}
                activeFilters={activeFilters}
              />
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Tab Navigation */}
              <div className="bg-surface rounded-xl shadow-md border border-border mb-8 overflow-hidden">
                <div className="flex overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'text-accent bg-accent-50 border-b-2 border-accent' :'text-text-secondary hover:text-primary hover:bg-primary-50'
                      }`}
                    >
                      <Icon name={tab.icon} size={18} />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Loading State */}
              {isLoading && (
                <div className="flex items-center justify-center py-12">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-text-secondary">Loading amazing content...</span>
                  </div>
                </div>
              )}

              {/* Tab Content */}
              {!isLoading && (
                <div className="space-y-8">
                  {/* Style Feed */}
                  {activeTab === 'feed' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {mockPosts.map((post) => (
                        <StylePost
                          key={post.id}
                          post={post}
                          onLike={handleLike}
                          onShare={handleShare}
                          onSave={handleSave}
                        />
                      ))}
                    </div>
                  )}

                  {/* Challenges */}
                  {activeTab === 'challenges' && (
                    <div className="space-y-8">
                      {mockChallenges.map((challenge) => (
                        <StyleChallenge
                          key={challenge.id}
                          challenge={challenge}
                          onJoin={handleJoinChallenge}
                          onVote={handleVoteChallenge}
                        />
                      ))}
                    </div>
                  )}

                  {/* Style Twins */}
                  {activeTab === 'twins' && (
                    <StyleTwins
                      styleTwins={mockStyleTwins}
                      onConnect={handleConnectStyleTwin}
                      onViewProfile={handleViewProfile}
                    />
                  )}

                  {/* Expert Content */}
                  {activeTab === 'experts' && (
                    <ExpertContent
                      expertPosts={mockExpertContent}
                      onBookConsultation={handleBookConsultation}
                      onSavePost={handleSaveExpertPost}
                    />
                  )}
                </div>
              )}

              {/* Load More */}
              {!isLoading && (
                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="ChevronDown"
                    iconPosition="right"
                    onClick={() => {}}
                  >
                    Load More Content
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-brand-primary to-accent">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Ready to Share Your Style?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of style enthusiasts sharing their fashion journey and discovering new inspiration every day
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              iconName="Camera"
              iconPosition="left"
              className="bg-white text-brand-primary hover:bg-white/90"
              onClick={() => {}}
            >
              Upload Your First Look
            </Button>
            <Link to="/account-style-profile">
              <Button
                variant="ghost"
                size="lg"
                iconName="User"
                iconPosition="left"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Complete Your Profile
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-800 text-white py-12">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-brand-primary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">StyleHub Commerce</h3>
                  <p className="text-sm text-white/70">Community Style Gallery</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-4">
                Celebrating authentic style expression through community connection, expert guidance, and sustainable fashion choices.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/community-style-gallery" className="hover:text-white transition-colors">Style Gallery</Link></li>
                <li><Link to="/brand-designer-stories" className="hover:text-white transition-colors">Expert Tips</Link></li>
                <li><Link to="/account-style-profile" className="hover:text-white transition-colors">Your Profile</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} StyleHub Commerce. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommunityStyleGallery;