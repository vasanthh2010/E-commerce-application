import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroCarousel from './components/HeroCarousel';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import TrendingCollections from './components/TrendingCollections';
import CommunitySpotlight from './components/CommunitySpotlight';
import SustainabilityStory from './components/SustainabilityStory';
import RealTimeActivity from './components/RealTimeActivity';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'StyleHub Commerce - Fashion That Fits Your Life';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover curated fashion that combines style with sustainability. Join our community of fashion enthusiasts and find pieces that express your unique style.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        {/* Hero Section with Carousel */}
        <HeroCarousel />
        
        {/* Personalized Recommendations */}
        <PersonalizedRecommendations />
        
        {/* Trending Collections */}
        <TrendingCollections />
        
        {/* Community Spotlight */}
        <CommunitySpotlight />
        
        {/* Sustainability Story */}
        <SustainabilityStory />
        
        {/* Real-time Activity */}
        <RealTimeActivity />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;