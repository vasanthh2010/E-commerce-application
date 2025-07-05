import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const TrendingCollections = () => {
  const collections = [
    {
      id: 1,
      name: "Autumn Essentials",
      description: "Cozy layers and warm tones for the perfect fall wardrobe",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop",
      itemCount: 24,
      priceRange: "$45 - $189",
      trending: true,
      tags: ["Cozy", "Layering", "Warm Tones"]
    },
    {
      id: 2,
      name: "Sustainable Luxe",
      description: "Premium eco-friendly pieces that don't compromise on style",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=600&h=400&fit=crop",
      itemCount: 18,
      priceRange: "$78 - $295",
      trending: false,
      tags: ["Eco-Friendly", "Premium", "Ethical"]
    },
    {
      id: 3,
      name: "Work to Weekend",
      description: "Versatile pieces that transition seamlessly from office to social",
      image: "https://images.pixabay.com/photo-2016-11-29-13-14-attractive-1869761_1280.jpg?w=600&h=400&fit=crop",
      itemCount: 32,
      priceRange: "$52 - $225",
      trending: true,
      tags: ["Versatile", "Professional", "Chic"]
    }
  ];

  const lifestyleImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
      caption: "Coffee shop styling",
      context: "Perfect for casual meetings"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
      caption: "Weekend brunch look",
      context: "Effortlessly chic"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop",
      caption: "Evening dinner style",
      context: "Sophisticated elegance"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="TrendingUp" size={24} className="text-accent" />
            <h2 className="text-3xl lg:text-4xl font-semibold text-primary font-accent">
              Trending Collections
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover seasonal highlights and curated collections that define this moment in fashion
          </p>
        </div>

        {/* Main Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {collections.map((collection) => (
            <div key={collection.id} className="group relative overflow-hidden rounded-2xl bg-surface shadow-lg hover:shadow-xl transition-all duration-500">
              {/* Collection Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Trending Badge */}
                {collection.trending && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-sm font-medium px-3 py-1 rounded-full flex items-center gap-2">
                      <Icon name="Flame" size={14} />
                      Trending
                    </span>
                  </div>
                )}

                {/* Collection Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2 font-accent">
                    {collection.name}
                  </h3>
                  <p className="text-white/90 mb-4 line-clamp-2">
                    {collection.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm text-white/80">
                        {collection.itemCount} pieces
                      </p>
                      <p className="text-sm font-medium">
                        {collection.priceRange}
                      </p>
                    </div>
                    
                    <Link to="/individual-product-experience">
                      <Button
                        variant="primary"
                        size="sm"
                        iconName="ArrowRight"
                        iconPosition="right"
                        className="bg-white text-primary hover:bg-white/90"
                      >
                        Explore
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {collection.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-primary-50 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lifestyle Context Section */}
        <div className="bg-primary-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-4 font-accent">
              Real Styling Contexts
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              See how our pieces work in real life situations and get inspired for your own styling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lifestyleImages.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl">
                <div className="aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-medium mb-1">{item.caption}</h4>
                  <p className="text-sm text-white/90">{item.context}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/community-style-gallery">
              <Button
                variant="outline"
                size="lg"
                iconName="Camera"
                iconPosition="left"
                className="cta-button"
              >
                View Style Gallery
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCollections;