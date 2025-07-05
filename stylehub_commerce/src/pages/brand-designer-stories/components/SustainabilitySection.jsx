import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SustainabilitySection = () => {
  const sustainabilityMetrics = [
    {
      icon: "Leaf",
      value: "85%",
      label: "Sustainable Materials",
      description: "Organic cotton, recycled polyester, and eco-friendly dyes"
    },
    {
      icon: "Droplets",
      value: "40%",
      label: "Water Reduction",
      description: "Innovative dyeing processes that minimize water usage"
    },
    {
      icon: "Recycle",
      value: "95%",
      label: "Waste Recycled",
      description: "Fabric scraps transformed into new products"
    },
    {
      icon: "Users",
      value: "100%",
      label: "Fair Trade",
      description: "Ethical labor practices across all manufacturing partners"
    }
  ];

  const certifications = [
    { name: "GOTS Certified", icon: "CheckCircle" },
    { name: "Fair Trade", icon: "Heart" },
    { name: "B-Corp", icon: "Award" },
    { name: "Carbon Neutral", icon: "Leaf" }
  ];

  return (
    <section className="bg-accent-50 py-16 lg:py-24">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="Leaf" size={24} className="text-accent" />
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Sustainability Impact
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-accent font-semibold text-primary mb-6">
            Fashion with Purpose
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Every brand we partner with shares our commitment to environmental responsibility and ethical practices. Discover how fashion can be a force for positive change.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sustainabilityMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={metric.icon} size={28} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
              <div className="font-semibold text-primary mb-2">{metric.label}</div>
              <p className="text-sm text-text-secondary leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Transparency in Every Thread
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="MapPin" size={16} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Supply Chain Transparency</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Track every garment from fiber to finished product with our blockchain-enabled supply chain visibility.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Shield" size={16} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Ethical Manufacturing</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    All partners undergo rigorous audits ensuring fair wages, safe working conditions, and worker rights.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="RotateCcw" size={16} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Circular Fashion</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Take-back programs and upcycling initiatives that give garments a second life.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-accent-200">
                  <Icon name={cert.icon} size={16} className="text-accent" />
                  <span className="text-sm font-medium text-primary">{cert.name}</span>
                </div>
              ))}
            </div>
            
            <Button
              variant="primary"
              size="lg"
              iconName="ExternalLink"
              iconPosition="right"
              className="cta-button"
            >
              View Impact Report
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80"
                alt="Sustainable fashion production facility"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Leaf" size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-primary">2.5M</div>
                  <div className="text-xs text-text-secondary">Liters Water Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;