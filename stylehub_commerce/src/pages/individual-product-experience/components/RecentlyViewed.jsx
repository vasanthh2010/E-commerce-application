import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecentlyViewed = ({ products }) => {
  const handleProductClick = (productId) => {
    console.log('Navigating to product:', productId);
  };

  const handleAddToCart = (productId) => {
    console.log('Adding to cart:', productId);
  };

  const handleAddToWishlist = (productId) => {
    console.log('Adding to wishlist:', productId);
  };

  return (
    <div className="bg-surface rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-primary">Recently Viewed</h3>
        <button className="text-sm text-accent hover:text-accent-600 font-medium">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative bg-background rounded-lg overflow-hidden mb-3 aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              />
              
              {/* Quick Actions */}
              <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  onClick={() => handleAddToWishlist(product.id)}
                  className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md"
                >
                  <Icon 
                    name="Heart" 
                    size={14} 
                    className={`${product.isWishlisted ? 'text-error fill-current' : 'text-primary'}`}
                  />
                </button>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md"
                >
                  <Icon name="ShoppingCart" size={14} className="text-primary" />
                </button>
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col space-y-1">
                {product.isNew && (
                  <span className="bg-accent text-white px-2 py-1 rounded text-xs font-medium">
                    New
                  </span>
                )}
                {product.discount && (
                  <span className="bg-error text-white px-2 py-1 rounded text-xs font-medium">
                    {product.discount}% OFF
                  </span>
                )}
              </div>

              {/* Quick View */}
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Button
                  variant="primary"
                  size="xs"
                  fullWidth
                  onClick={() => handleProductClick(product.id)}
                >
                  Quick View
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h4 
                className="font-medium text-primary text-sm line-clamp-2 cursor-pointer hover:text-accent transition-colors duration-300"
                onClick={() => handleProductClick(product.id)}
              >
                {product.name}
              </h4>
              
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-primary">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-text-secondary line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={12}
                      className={`${
                        i < Math.floor(product.rating)
                          ? 'text-warning-400 fill-current' :'text-border'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-text-secondary ml-1">
                    ({product.reviewCount})
                  </span>
                </div>
                
                {product.colors && (
                  <div className="flex space-x-1">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className="w-3 h-3 rounded-full border border-border"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                    {product.colors.length > 3 && (
                      <div className="w-3 h-3 rounded-full border border-border bg-background flex items-center justify-center">
                        <span className="text-xs text-text-secondary">
                          +{product.colors.length - 3}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Size Options */}
              {product.availableSizes && (
                <div className="flex flex-wrap gap-1">
                  {product.availableSizes.slice(0, 4).map((size) => (
                    <span
                      key={size}
                      className="text-xs bg-background text-text-secondary px-1.5 py-0.5 rounded"
                    >
                      {size}
                    </span>
                  ))}
                  {product.availableSizes.length > 4 && (
                    <span className="text-xs bg-background text-text-secondary px-1.5 py-0.5 rounded">
                      +{product.availableSizes.length - 4}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Clear History */}
      <div className="text-center mt-6">
        <button className="text-sm text-text-secondary hover:text-primary transition-colors duration-300">
          Clear Viewing History
        </button>
      </div>
    </div>
  );
};

export default RecentlyViewed;