import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="space-y-6">
      {/* Product Title and Price */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm font-medium text-accent bg-accent-50 px-2 py-1 rounded">
            {product.brand}
          </span>
          {product.isNew && (
            <span className="text-sm font-medium text-conversion-accent bg-warning-50 px-2 py-1 rounded">
              New Arrival
            </span>
          )}
        </div>
        <h1 className="text-2xl lg:text-3xl font-semibold text-primary mb-2">
          {product.name}
        </h1>
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-primary">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-text-secondary line-through">
              ${product.originalPrice}
            </span>
          )}
          {product.discount && (
            <span className="text-sm font-medium text-error bg-error-50 px-2 py-1 rounded">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </div>

      {/* Rating and Reviews */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={16}
              className={`${
                i < Math.floor(product.rating)
                  ? 'text-warning-400 fill-current' :'text-border'
              }`}
            />
          ))}
          <span className="text-sm font-medium text-primary ml-1">
            {product.rating}
          </span>
        </div>
        <span className="text-sm text-text-secondary">
          ({product.reviewCount} reviews)
        </span>
        <button className="text-sm text-accent hover:text-accent-600 font-medium">
          Read Reviews
        </button>
      </div>

      {/* Product Description */}
      <div>
        <p className="text-text-secondary leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="text-sm font-medium text-primary mb-3">
          Color: <span className="font-normal">{selectedColor.name}</span>
        </h3>
        <div className="flex space-x-2">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleColorSelect(color)}
              className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                selectedColor.name === color.name
                  ? 'border-primary shadow-md scale-110'
                  : 'border-border hover:border-primary'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-primary">Size</h3>
          <button className="text-sm text-accent hover:text-accent-600 font-medium flex items-center space-x-1">
            <Icon name="Ruler" size={14} />
            <span>Size Guide</span>
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {product.sizes.map((size) => (
            <button
              key={size.value}
              onClick={() => handleSizeSelect(size.value)}
              disabled={!size.available}
              className={`py-2 px-3 text-sm font-medium rounded-lg border transition-all duration-300 ${
                selectedSize === size.value
                  ? 'border-accent bg-accent text-white'
                  : size.available
                  ? 'border-border text-primary hover:border-primary' :'border-border text-text-muted bg-background cursor-not-allowed'
              }`}
            >
              {size.value}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selection */}
      <div>
        <h3 className="text-sm font-medium text-primary mb-3">Quantity</h3>
        <div className="flex items-center space-x-3">
          <div className="flex items-center border border-border rounded-lg">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="p-2 hover:bg-background transition-colors duration-300"
              disabled={quantity <= 1}
            >
              <Icon name="Minus" size={16} className="text-primary" />
            </button>
            <span className="px-4 py-2 text-primary font-medium min-w-[3rem] text-center">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="p-2 hover:bg-background transition-colors duration-300"
              disabled={quantity >= 10}
            >
              <Icon name="Plus" size={16} className="text-primary" />
            </button>
          </div>
          <span className="text-sm text-text-secondary">
            {product.stockCount} items left
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          iconName="ShoppingCart"
          iconPosition="left"
          disabled={!selectedSize}
          onClick={() => {}}
        >
          Add to Cart - ${(product.price * quantity).toFixed(2)}
        </Button>
        
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            size="md"
            iconName="Heart"
            iconPosition="left"
            onClick={() => {}}
          >
            Wishlist
          </Button>
          <Button
            variant="outline"
            size="md"
            iconName="Share2"
            iconPosition="left"
            onClick={() => {}}
          >
            Share
          </Button>
        </div>
      </div>

      {/* Shipping Info */}
      <div className="bg-background rounded-lg p-4 space-y-3">
        <div className="flex items-center space-x-3">
          <Icon name="Truck" size={20} className="text-accent" />
          <div>
            <p className="text-sm font-medium text-primary">Free Shipping</p>
            <p className="text-xs text-text-secondary">On orders over $75</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Icon name="RotateCcw" size={20} className="text-accent" />
          <div>
            <p className="text-sm font-medium text-primary">Easy Returns</p>
            <p className="text-xs text-text-secondary">30-day return policy</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Icon name="Shield" size={20} className="text-accent" />
          <div>
            <p className="text-sm font-medium text-primary">Secure Payment</p>
            <p className="text-xs text-text-secondary">SSL encrypted checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;