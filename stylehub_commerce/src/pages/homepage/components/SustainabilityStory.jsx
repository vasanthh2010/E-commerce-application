import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SustainabilityStory = () => {
  const sustainabilityFeatures = [
    {
      id: 1,
      icon: "Leaf",
      title: "Eco-Friendly Materials",
      description: "Organic cotton, recycled polyester, and sustainable fabrics",
      stat: "85% sustainable materials"
    },
    {
      id: 2,
      icon: "Recycle",
      title: "Circular Fashion",
      description: "Take-back programs and upcycling initiatives",
      stat: "10K+ items recycled"
    },
    {
      id: 3,
      icon: "Heart",
      title: "Ethical Production",
      description: "Fair wages and safe working conditions for all workers",
      stat: "100% ethical partners"
    },
    {
      id: 4,
      icon: "Truck",
      title: "Carbon Neutral Shipping",
      description: "Offset emissions and eco-friendly packaging",
      stat: "Net-zero delivery"
    }
  ];

  const ecoFriendlyBrands = [
    {
      id: 1,
      name: "EcoLux",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      certification: "B-Corp Certified",
      specialty: "Luxury sustainable fashion"
    },
    {
      id: 2,
      name: "GreenThread",
      logo: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=100&h=100&fit=crop",
      certification: "GOTS Certified",
      specialty: "Organic cotton essentials"
    },
    {
      id: 3,
      name: "ReNew",
      logo: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=100&h=100&fit=crop",
      certification: "Cradle to Cradle",
      specialty: "Recycled materials"
    },
    {
      id: 4,
      name: "NaturalWear",
      logo: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop",
      certification: "Fair Trade",
      specialty: "Natural fiber clothing"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-success-50">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Leaf" size={24} className="text-success" />
            <h2 className="text-3xl lg:text-4xl font-semibold text-primary font-accent">
              Fashion with Purpose
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We believe style and sustainability go hand in hand. Discover how we're making fashion better for you and the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Sustainability Story */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-4 font-accent">
                Our Commitment to Tomorrow
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Every piece in our collection is chosen with care for both style and sustainability. 
                We partner with brands that share our vision of responsible fashion that doesn't compromise on quality or design.
              </p>
            </div>

            {/* Sustainability Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sustainabilityFeatures.map((feature) => (
                <div key={feature.id} className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={feature.icon} size={24} className="text-success" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-text-secondary text-sm mb-2">
                        {feature.description}
                      </p>
                      <p className="text-success font-medium text-sm">
                        {feature.stat}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/brand-designer-stories">
                <Button
                  variant="primary"
                  size="lg"
                  iconName="BookOpen"
                  iconPosition="left"
                  className="cta-button bg-success hover:bg-success-600"
                >
                  Our Story
                </Button>
              </Link>
              <Link to="/individual-product-experience">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Leaf"
                  iconPosition="left"
                  className="cta-button border-success text-success hover:bg-success hover:text-white"
                >
                  Shop Sustainable
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop"
                    alt="Sustainable fashion model"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-surface rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-success mb-1">2.5M</div>
                  <div className="text-text-secondary text-sm">Plastic bottles recycled</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-surface rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-success mb-1">50%</div>
                  <div className="text-text-secondary text-sm">Less water usage</div>
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop"
                    alt="Eco-friendly materials"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-success text-white rounded-full p-4 shadow-lg">
              <Icon name="Award" size={24} />
            </div>
          </div>
        </div>

        {/* Partner Brands */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-4 font-accent">
              Sustainable Brand Partners
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We carefully curate brands that meet our high standards for sustainability, ethics, and style
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecoFriendlyBrands.map((brand) => (
              <div key={brand.id} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-success-100 group-hover:border-success transition-colors duration-300">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} color="white" />
                  </div>
                </div>
                <h4 className="font-semibold text-primary mb-1">{brand.name}</h4>
                <p className="text-success text-sm font-medium mb-1">{brand.certification}</p>
                <p className="text-text-secondary text-xs">{brand.specialty}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/brand-designer-stories">
              <Button
                variant="outline"
                size="lg"
                iconName="Users"
                iconPosition="left"
                className="cta-button"
              >
                Meet All Partners
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityStory;