import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Minimalist Chic",
      subtitle: "Less is more, but make it luxurious",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=800&fit=crop",
      model: "Emma Chen",
      style: "Clean lines, neutral tones, timeless pieces"
    },
    {
      id: 2,
      title: "Bold Maximalist",
      subtitle: "Express yourself with fearless fashion",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=1200&h=800&fit=crop",
      model: "Zara Williams",
      style: "Vibrant colors, mixed patterns, statement pieces"
    },
    {
      id: 3,
      title: "Sustainable Conscious",
      subtitle: "Style that cares for tomorrow",
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=1200&h=800&fit=crop",
      model: "Maya Patel",
      style: "Eco-friendly fabrics, ethical brands, mindful choices"
    },
    {
      id: 4,
      title: "Urban Professional",
      subtitle: "Power dressing for the modern workplace",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1200&h=800&fit=crop",
      model: "Jordan Thompson",
      style: "Structured silhouettes, versatile pieces, confidence"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' :'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={`${slide.title} style inspiration`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container-max section-padding">
                <div className="max-w-2xl">
                  <div className="space-y-6 text-white">
                    {/* Style Category */}
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-0.5 bg-accent"></div>
                      <span className="text-sm font-medium tracking-wider uppercase opacity-90">
                        {slide.title}
                      </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="hero-text text-white font-accent">
                      Style is personal, but you don't have to figure it out
                      <span className="text-gradient"> alone</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl lg:text-2xl text-white/90 font-light leading-relaxed">
                      {slide.subtitle}
                    </p>

                    {/* Style Description */}
                    <p className="text-base text-white/80 max-w-lg">
                      Featuring {slide.model}: {slide.style}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link to="/account-style-profile">
                        <Button
                          variant="primary"
                          size="lg"
                          iconName="Sparkles"
                          iconPosition="left"
                          className="cta-button bg-accent hover:bg-accent-600 text-white shadow-lg"
                        >
                          Discover Your Style
                        </Button>
                      </Link>
                      
                      <Link to="/individual-product-experience">
                        <Button
                          variant="outline"
                          size="lg"
                          iconName="TrendingUp"
                          iconPosition="left"
                          className="cta-button border-white text-white hover:bg-white hover:text-primary"
                        >
                          Shop Trending Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-3">
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125' :'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Previous slide"
      >
        <Icon name="ChevronLeft" size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Next slide"
      >
        <Icon name="ChevronRight" size={24} />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 right-4 z-20 text-white/70">
        <div className="flex items-center space-x-2 text-sm">
          <span>Scroll to explore</span>
          <Icon name="ChevronDown" size={16} className="animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;