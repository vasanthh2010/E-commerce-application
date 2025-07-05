import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CompleteTheLook = ({ recommendations }) => {
  const handleAddToCart = (productId) => {
    console.log('Adding product to cart:', productId);
  };

  const handleAddAllToCart = () => {
    console.log('Adding all recommended products to cart');
  };

  const totalPrice = recommendations.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-surface rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-primary">Complete the Look</h3>
        <Button
          variant="primary"
          size="sm"
          iconName="ShoppingCart"
          iconPosition="left"
          onClick={handleAddAllToCart}
        >
          Add All (${totalPrice.toFixed(2)})
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map((item) => (
          <div key={item.id} className="group">
            <div className="relative bg-background rounded-lg overflow-hidden mb-3">
              <div className="aspect-square">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Quick Add Button */}
              <button
                onClick={() => handleAddToCart(item.id)}
                className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
              >
                <Icon name="Plus" size={16} className="text-primary" />
              </button>

              {/* Discount Badge */}
              {item.discount && (
                <div className="absolute top-3 left-3 bg-error text-white px-2 py-1 rounded text-xs font-medium">
                  {item.discount}% OFF
                </div>
              )}
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-primary text-sm line-clamp-2">
                {item.name}
              </h4>
              
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-primary">
                  ${item.price}
                </span>
                {item.originalPrice && (
                  <span className="text-sm text-text-secondary line-through">
                    ${item.originalPrice}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={12}
                      className={`${
                        i < Math.floor(item.rating)
                          ? 'text-warning-400 fill-current' :'text-border'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-text-secondary">
                  ({item.reviewCount})
                </span>
              </div>

              {/* Color Options */}
              {item.colors && (
                <div className="flex space-x-1">
                  {item.colors.slice(0, 4).map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-border"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                  {item.colors.length > 4 && (
                    <div className="w-4 h-4 rounded-full border border-border bg-background flex items-center justify-center">
                      <span className="text-xs text-text-secondary">
                        +{item.colors.length - 4}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Styling Tips */}
      <div className="mt-6 p-4 bg-background rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} className="text-warning-400 mt-0.5" />
          <div>
            <h4 className="font-medium text-primary mb-1">Styling Tip</h4>
            <p className="text-sm text-text-secondary">
              Layer this piece with a structured blazer for a polished office look, 
              or pair with casual denim for weekend styling. The versatile design 
              works beautifully with both neutral and bold accessories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteTheLook;