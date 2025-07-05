import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const DesignerSpotlight = ({ designer }) => {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="editorial-spacing">
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Star" size={20} className="text-conversion-accent" />
                <span className="text-conversion-accent font-medium text-sm uppercase tracking-wider">
                  Designer Spotlight
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-accent font-semibold text-primary mb-6">
                Meet {designer.name}
              </h2>
              
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                {designer.bio}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary">Based in</p>
                    <p className="text-text-secondary">{designer.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Calendar" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary">Founded</p>
                    <p className="text-text-secondary">{designer.founded}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Award" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary">Specialty</p>
                    <p className="text-text-secondary">{designer.specialty}</p>
                  </div>
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
                  Shop Collection
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                >
                  Watch Interview
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={designer.image}
                  alt={`${designer.name} in their design studio`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Quote" size={24} className="text-accent" />
                  <span className="text-sm font-medium text-primary">Philosophy</span>
                </div>
                <p className="text-sm text-text-secondary italic leading-relaxed">
                  "{designer.philosophy}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignerSpotlight;