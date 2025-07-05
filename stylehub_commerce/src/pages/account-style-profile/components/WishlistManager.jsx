import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WishlistManager = ({ wishlistItems, onRemoveItem, onMoveToCart }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortBy, setSortBy] = useState('recent');
  const [viewMode, setViewMode] = useState('grid');

  const sortOptions = [
    { id: 'recent', name: 'Recently Added' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'name', name: 'Name A-Z' }
  ];

  const sortedItems = [...wishlistItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'recent':
      default:
        return new Date(b.dateAdded) - new Date(a.dateAdded);
    }
  });

  const toggleItemSelection = (itemId) => {
    setSelectedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const selectAllItems = () => {
    setSelectedItems(wishlistItems.map(item => item.id));
  };

  const clearSelection = () => {
    setSelectedItems([]);
  };

  const handleBulkAction = (action) => {
    selectedItems.forEach(itemId => {
      if (action === 'remove') {
        onRemoveItem(itemId);
      } else if (action === 'cart') {
        onMoveToCart(itemId);
      }
    });
    clearSelection();
  };

  const getPriceStatus = (item) => {
    if (item.priceDropped) {
      return { text: 'Price Dropped!', color: 'text-success', icon: 'TrendingDown' };
    }
    if (item.backInStock) {
      return { text: 'Back in Stock!', color: 'text-accent', icon: 'Package' };
    }
    if (item.lowStock) {
      return { text: 'Low Stock', color: 'text-warning', icon: 'AlertTriangle' };
    }
    return null;
  };

  return (
    <div className="bg-surface rounded-xl border border-border p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-primary">My Wishlist</h2>
          <p className="text-text-secondary text-sm mt-1">
            {wishlistItems.length} items saved for later
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))}
          </select>
          
          <div className="flex border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-accent text-white' : 'bg-surface text-text-secondary hover:text-primary'}`}
            >
              <Icon name="Grid3X3" size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-accent text-white' : 'bg-surface text-text-secondary hover:text-primary'}`}
            >
              <Icon name="List" size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedItems.length > 0 && (
        <div className="flex items-center justify-between p-4 bg-accent-50 rounded-lg mb-6 border border-accent/20">
          <span className="text-accent font-medium">
            {selectedItems.length} item{selectedItems.length > 1 ? 's' : ''} selected
          </span>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              iconName="ShoppingCart"
              iconPosition="left"
              onClick={() => handleBulkAction('cart')}
            >
              Add to Cart
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="Trash2"
              iconPosition="left"
              onClick={() => handleBulkAction('remove')}
              className="text-error hover:text-error"
            >
              Remove
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSelection}
            >
              Clear
            </Button>
          </div>
        </div>
      )}

      {/* Select All/Clear All */}
      {wishlistItems.length > 0 && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={selectedItems.length === wishlistItems.length ? clearSelection : selectAllItems}
              className="text-sm text-accent hover:text-accent/80 font-medium"
            >
              {selectedItems.length === wishlistItems.length ? 'Clear All' : 'Select All'}
            </button>
          </div>
        </div>
      )}

      {/* Wishlist Items */}
      {wishlistItems.length > 0 ? (
        <div className={viewMode === 'grid' ?'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' :'space-y-4'
        }>
          {sortedItems.map((item) => {
            const isSelected = selectedItems.includes(item.id);
            const priceStatus = getPriceStatus(item);
            
            return (
              <div
                key={item.id}
                className={`relative border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md ${
                  isSelected ? 'border-accent bg-accent-50' : 'border-border bg-surface'
                } ${viewMode === 'list' ? 'flex' : ''}`}
              >
                {/* Selection Checkbox */}
                <div className="absolute top-3 left-3 z-10">
                  <button
                    onClick={() => toggleItemSelection(item.id)}
                    className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                      isSelected 
                        ? 'bg-accent border-accent text-white' :'bg-white border-border hover:border-accent'
                    }`}
                  >
                    {isSelected && <Icon name="Check" size={14} />}
                  </button>
                </div>

                {/* Price Status Badge */}
                {priceStatus && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium bg-white border ${priceStatus.color}`}>
                      <Icon name={priceStatus.icon} size={12} className="inline mr-1" />
                      {priceStatus.text}
                    </div>
                  </div>
                )}

                <div className={`${viewMode === 'list' ? 'w-32 h-32' : 'aspect-square'} overflow-hidden bg-background`}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className={viewMode === 'list' ? 'flex items-center justify-between' : ''}>
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <h3 className="font-medium text-primary mb-1 line-clamp-2">{item.name}</h3>
                      <p className="text-text-secondary text-sm mb-2">{item.brand}</p>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-semibold text-primary">${item.price}</span>
                        {item.originalPrice && item.originalPrice > item.price && (
                          <span className="text-text-muted text-sm line-through">${item.originalPrice}</span>
                        )}
                        {item.priceDropped && (
                          <span className="text-success text-sm font-medium">
                            Save ${(item.originalPrice - item.price).toFixed(2)}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-text-secondary text-sm mb-3">
                        <Icon name="Calendar" size={14} />
                        <span>Added {item.dateAdded}</span>
                      </div>
                    </div>

                    <div className={`flex gap-2 ${viewMode === 'list' ? 'flex-col' : ''}`}>
                      <Button
                        variant="primary"
                        size="sm"
                        iconName="ShoppingCart"
                        iconPosition="left"
                        onClick={() => onMoveToCart(item.id)}
                        className={viewMode === 'list' ? 'w-full' : ''}
                      >
                        Add to Cart
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="Trash2"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-error hover:text-error"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <Icon name="Heart" size={48} className="text-text-muted mx-auto mb-4" />
          <h3 className="text-lg font-medium text-primary mb-2">Your wishlist is empty</h3>
          <p className="text-text-secondary mb-4">
            Save items you love to keep track of them
          </p>
          <Button variant="primary" iconName="ShoppingBag" iconPosition="left">
            Start Shopping
          </Button>
        </div>
      )}
    </div>
  );
};

export default WishlistManager;