import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PersonalizedRecommendations = () => {
  const recommendedProducts = [
    {
      id: 1,
      name: "Sustainable Wool Blazer",
      brand: "EcoLux",
      price: 189,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 124,
      isNew: false,
      isSustainable: true,
      colors: ["#2D3748", "#8B4513", "#1A202C"],
      sizes: ["XS", "S", "M", "L", "XL"],
      matchReason: "Perfect for your minimalist style"
    },
    {
      id: 2,
      name: "Organic Cotton Midi Dress",
      brand: "GreenThread",
      price: 95,
      originalPrice: null,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 89,
      isNew: true,
      isSustainable: true,
      colors: ["#F7FAFC", "#E2E8F0", "#CBD5E0"],
      sizes: ["XS", "S", "M", "L"],
      matchReason: "Matches your recent searches"
    },
    {
      id: 3,
      name: "Recycled Denim Jacket",
      brand: "ReNew",
      price: 78,
      originalPrice: 98,
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=400&h=500&fit=crop",
      rating: 4.7,
      reviews: 156,
      isNew: false,
      isSustainable: true,
      colors: ["#4A5568", "#2D3748"],
      sizes: ["S", "M", "L", "XL"],
      matchReason: "Trending in your area"
    },
    {
      id: 4,
      name: "Bamboo Fiber T-Shirt",
      brand: "NaturalWear",
      price: 32,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      rating: 4.6,
      reviews: 203,
      isNew: false,
      isSustainable: true,
      colors: ["#FFFFFF", "#F7FAFC", "#2D3748", "#38A169"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      matchReason: "Based on your style preferences"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Sparkles" size={24} className="text-accent" />
            <h2 className="text-3xl lg:text-4xl font-semibold text-primary font-accent">
              Styled for You
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Curated recommendations based on your style preferences and browsing history
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="group product-card">
              {/* Product Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-accent text-white text-xs font-medium px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                  {product.isSustainable && (
                    <span className="bg-success text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                      <Icon name="Leaf" size={12} />
                      Eco
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Icon name="Heart" size={16} className="text-text-secondary hover:text-accent" />
                  </button>
                  <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Icon name="Eye" size={16} className="text-text-secondary" />
                  </button>
                </div>

                {/* Match Reason */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-text-secondary font-medium">
                      {product.matchReason}
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 bg-surface rounded-b-lg">
                <div className="space-y-3">
                  {/* Brand & Name */}
                  <div>
                    <p className="text-sm text-text-secondary font-medium">
                      {product.brand}
                    </p>
                    <h3 className="text-base font-medium text-primary line-clamp-2">
                      {product.name}
                    </h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={14}
                          className={`${
                            i < Math.floor(product.rating)
                              ? 'text-warning fill-current' :'text-border'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-text-secondary">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Colors */}
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-text-secondary">Colors:</span>
                    <div className="flex space-x-1">
                      {product.colors.slice(0, 3).map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-border"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      {product.colors.length > 3 && (
                        <span className="text-xs text-text-secondary">
                          +{product.colors.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold text-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-text-secondary line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Link to="/individual-product-experience">
                    <Button
                      variant="primary"
                      size="sm"
                      iconName="ShoppingCart"
                      iconPosition="left"
                      className="w-full"
                    >
                      Add to Cart
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/individual-product-experience">
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="cta-button"
            >
              View All Recommendations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedRecommendations;