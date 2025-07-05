import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CategoryFilter from './components/CategoryFilter';
import FeaturedStoryCard from './components/FeaturedStoryCard';
import DesignerSpotlight from './components/DesignerSpotlight';
import SustainabilitySection from './components/SustainabilitySection';
import TrendReportSection from './components/TrendReportSection';
import EmergingDesignersSection from './components/EmergingDesignersSection';
import NewsletterSubscription from './components/NewsletterSubscription';

const BrandDesignerStories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const categories = [
    { id: 'all', name: 'All Stories', count: 24 },
    { id: 'sustainability', name: 'Sustainability', count: 8 },
    { id: 'heritage', name: 'Heritage Brands', count: 6 },
    { id: 'emerging', name: 'Emerging Designers', count: 5 },
    { id: 'trends', name: 'Trend Reports', count: 3 },
    { id: 'interviews', name: 'Designer Interviews', count: 2 }
  ];

  const featuredStories = [
    {
      id: 1,
      title: "The Renaissance of Italian Craftsmanship",
      excerpt: "How traditional Italian ateliers are embracing modern sustainability practices while preserving centuries-old techniques that define luxury fashion.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Heritage",
      readTime: "12 min read",
      author: {
        name: "Isabella Romano",
        role: "Fashion Historian",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616c9c0b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      },
      likes: 1247,
      comments: 89,
      shares: 156
    },
    {
      id: 2,
      title: "Zero Waste Fashion: The Future is Circular",
      excerpt: "Meet the designers revolutionizing fashion through zero-waste patterns and circular design principles that eliminate textile waste entirely.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80",
      category: "Sustainability",
      readTime: "8 min read",
      author: {
        name: "Dr. Sarah Chen",
        role: "Sustainability Expert",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      likes: 892,
      comments: 67,
      shares: 234
    },
    {
      id: 3,
      title: "From Sketch to Runway: A Designer\'s Journey",
      excerpt: "Follow emerging designer Maya Patel as she transforms her cultural heritage into contemporary fashion that celebrates diversity and inclusion.",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Emerging",
      readTime: "15 min read",
      author: {
        name: "Marcus Johnson",
        role: "Fashion Journalist",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      likes: 1456,
      comments: 123,
      shares: 89
    },
    {
      id: 4,
      title: "The Art of Slow Fashion",
      excerpt: "Discover how mindful consumption and quality craftsmanship are reshaping the fashion industry\'s relationship with time and value.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Sustainability",
      readTime: "10 min read",
      author: {
        name: "Elena Vasquez",
        role: "Slow Fashion Advocate",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
      },
      likes: 743,
      comments: 45,
      shares: 167
    },
    {
      id: 5,
      title: "Digital Fashion Week: The New Frontier",
      excerpt: "How virtual runways and digital fashion are creating new opportunities for designers and changing the way we experience fashion shows.",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Trends",
      readTime: "7 min read",
      author: {
        name: "Alex Thompson",
        role: "Tech Fashion Writer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      },
      likes: 634,
      comments: 78,
      shares: 145
    }
  ];

  const spotlightDesigner = {
    name: "Amara Okafor",
    bio: "Nigerian-born, London-based designer Amara Okafor creates contemporary African fashion that bridges traditional craftsmanship with modern silhouettes. Her work celebrates African heritage while addressing global fashion's need for cultural authenticity and sustainable practices.",
    location: "London, United Kingdom",
    founded: "2019",
    specialty: "Contemporary African Fashion",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    philosophy: "Fashion should honor the past while embracing the future, creating bridges between cultures rather than barriers."
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const filteredStories = activeCategory === 'all' 
    ? featuredStories 
    : featuredStories.filter(story => 
        story.category.toLowerCase() === activeCategory.replace('emerging', 'emerging').replace('trends', 'trends')
      );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        
        <section className="py-16 lg:py-24 bg-surface">
          <div className="container-max section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-accent font-semibold text-primary mb-6">
                Featured Stories
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Dive deep into the world of fashion with our curated collection of brand stories, designer interviews, and industry insights.
              </p>
            </div>
            
            <CategoryFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story, index) => (
                <FeaturedStoryCard 
                  key={story.id}
                  story={story}
                  isLarge={index === 0}
                />
              ))}
            </div>
          </div>
        </section>
        
        <DesignerSpotlight designer={spotlightDesigner} />
        
        <SustainabilitySection />
        
        <TrendReportSection />
        
        <EmergingDesignersSection />
        
        <NewsletterSubscription />
      </main>
      
      <footer className="bg-primary-800 text-white py-12">
        <div className="container-max section-padding">
          <div className="text-center">
            <p className="text-primary-300">
              © {new Date().getFullYear()} StyleHub Commerce. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BrandDesignerStories;