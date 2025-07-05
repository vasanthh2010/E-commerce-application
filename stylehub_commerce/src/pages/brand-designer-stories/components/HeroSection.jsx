import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Fashion design studio with sketches and fabrics"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 to-accent-900/40"></div>
      </div>
      
      <div className="relative z-10 container-max section-padding text-center">
        <div className="max-w-4xl mx-auto editorial-spacing">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="Sparkles" size={24} className="text-accent" />
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Behind the Brands
            </span>
          </div>
          
          <h1 className="hero-text text-white font-accent mb-6">
            Stories That Shape
            <span className="text-gradient block">Fashion Forward</span>
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            Discover the visionaries, values, and craftsmanship behind every piece. From emerging designers to heritage brands, explore the stories that make fashion meaningful.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              iconName="BookOpen"
              iconPosition="left"
              className="cta-button bg-accent hover:bg-accent-600"
            >
              Explore Stories
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              iconName="Play"
              iconPosition="left"
              className="text-white hover:bg-white/10 border-white/30"
            >
              Watch Documentary
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;