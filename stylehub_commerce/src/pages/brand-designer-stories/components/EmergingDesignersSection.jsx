import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const EmergingDesignersSection = () => {
  const emergingDesigners = [
    {
      id: 1,
      name: "Maya Chen",
      brand: "Ethereal Threads",
      location: "San Francisco, CA",
      specialty: "Sustainable Streetwear",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      collectionImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      description: "Blending traditional Asian textiles with modern urban aesthetics, Maya creates pieces that tell stories of cultural heritage and contemporary life.",
      achievements: ["CFDA Emerging Designer Award", "Sustainable Fashion Prize 2023"],
      isExclusive: true,
      launchDate: "April 2024"
    },
    {
      id: 2,
      name: "James Rodriguez",
      brand: "Artisan Collective",
      location: "Mexico City, Mexico",
      specialty: "Handcrafted Accessories",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      collectionImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      description: "Working with local artisans to preserve traditional craftsmanship while creating contemporary accessories that celebrate Mexican heritage.",
      achievements: ["Fair Trade Certified", "UNESCO Craft Award"],
      isExclusive: false,
      launchDate: "Available Now"
    },
    {
      id: 3,
      name: "Aisha Patel",
      brand: "Future Fabrics",
      location: "London, UK",
      specialty: "Tech-Integrated Fashion",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      collectionImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Pioneering the intersection of fashion and technology with smart fabrics that adapt to environmental conditions and user preferences.",
      achievements: ["Tech Innovation Award", "Wearable Tech Pioneer"],
      isExclusive: true,
      launchDate: "May 2024"
    }
  ];

  return (
    <section className="bg-primary-50 py-16 lg:py-24">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="Zap" size={24} className="text-brand-primary" />
            <span className="text-brand-primary font-medium text-sm uppercase tracking-wider">
              Emerging Talent
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-accent font-semibold text-primary mb-6">
            Tomorrow's Fashion Leaders
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover the next generation of fashion innovators. Get exclusive early access to collections from emerging designers who are reshaping the industry.
          </p>
        </div>
        
        <div className="space-y-16">
          {emergingDesigners.map((designer, index) => (
            <div 
              key={designer.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="editorial-spacing">
                  <div className="flex items-center space-x-3 mb-4">
                    {designer.isExclusive && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-conversion-accent text-white">
                        <Icon name="Star" size={12} className="mr-1" />
                        Exclusive Launch
                      </span>
                    )}
                    <span className="text-sm text-text-secondary">{designer.launchDate}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-2">
                    {designer.name}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="font-medium text-accent">{designer.brand}</span>
                    <span className="text-text-secondary">•</span>
                    <span className="text-text-secondary">{designer.specialty}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-6">
                    <Icon name="MapPin" size={16} className="text-text-secondary" />
                    <span className="text-text-secondary text-sm">{designer.location}</span>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {designer.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-primary">Recognition & Awards</h4>
                    <div className="space-y-2">
                      {designer.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center space-x-2">
                          <Icon name="Award" size={16} className="text-accent" />
                          <span className="text-sm text-text-secondary">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="primary"
                      size="lg"
                      iconName="ShoppingBag"
                      iconPosition="left"
                      className="cta-button"
                    >
                      {designer.isExclusive ? 'Get Early Access' : 'Shop Collection'}
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="lg"
                      iconName="User"
                      iconPosition="left"
                    >
                      Meet the Designer
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <Image
                        src={designer.image}
                        alt={`${designer.name} portrait`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Palette" size={16} className="text-accent" />
                        <span className="text-sm font-medium text-primary">Design Philosophy</span>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        "Fashion should be a bridge between cultures, not a barrier."
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="TrendingUp" size={16} className="text-conversion-accent" />
                        <span className="text-sm font-medium text-primary">Impact</span>
                      </div>
                      <div className="text-lg font-bold text-primary">500+</div>
                      <p className="text-xs text-text-secondary">Artisans Supported</p>
                    </div>
                    
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <Image
                        src={designer.collectionImage}
                        alt={`${designer.brand} collection preview`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            iconName="Users"
            iconPosition="left"
            className="cta-button"
          >
            Discover More Emerging Designers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergingDesignersSection;