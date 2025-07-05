import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ onFilterChange, activeFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(activeFilters || {});

  const filterCategories = [
    {
      id: 'style',
      label: 'Style',
      icon: 'Shirt',
      options: ['Casual', 'Formal', 'Bohemian', 'Minimalist', 'Vintage', 'Streetwear', 'Elegant', 'Sporty']
    },
    {
      id: 'occasion',
      label: 'Occasion',
      icon: 'Calendar',
      options: ['Work', 'Weekend', 'Date Night', 'Party', 'Travel', 'Wedding', 'Brunch', 'Gym']
    },
    {
      id: 'season',
      label: 'Season',
      icon: 'Sun',
      options: ['Spring', 'Summer', 'Fall', 'Winter', 'All Season']
    },
    {
      id: 'bodyType',
      label: 'Body Type',
      icon: 'User',
      options: ['Petite', 'Tall', 'Curvy', 'Athletic', 'Plus Size', 'All Types']
    },
    {
      id: 'priceRange',
      label: 'Price Range',
      icon: 'DollarSign',
      options: ['Under $50', '$50-$100', '$100-$200', '$200-$500', '$500+']
    }
  ];

  const popularHashtags = [
    '#StyleHubSustainable',
    '#ConfidenceBuilding',
    '#WorkWear',
    '#WeekendVibes',
    '#DateNightLook',
    '#SustainableFashion',
    '#BudgetStyle',
    '#VintageFinds'
  ];

  const handleFilterSelect = (categoryId, option) => {
    const newFilters = { ...selectedFilters };
    
    if (!newFilters[categoryId]) {
      newFilters[categoryId] = [];
    }
    
    const index = newFilters[categoryId].indexOf(option);
    if (index > -1) {
      newFilters[categoryId].splice(index, 1);
      if (newFilters[categoryId].length === 0) {
        delete newFilters[categoryId];
      }
    } else {
      newFilters[categoryId].push(option);
    }
    
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleHashtagClick = (hashtag) => {
    onFilterChange({ ...selectedFilters, hashtag: hashtag.replace('#', '') });
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
    onFilterChange({});
  };

  const getActiveFilterCount = () => {
    return Object.values(selectedFilters).reduce((count, filters) => {
      return count + (Array.isArray(filters) ? filters.length : 1);
    }, 0);
  };

  return (
    <div className="bg-surface rounded-xl shadow-md border border-border overflow-hidden">
      {/* Filter Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Filter" size={20} className="text-accent" />
            <h3 className="font-semibold text-primary">Filters</h3>
            {getActiveFilterCount() > 0 && (
              <span className="px-2 py-1 bg-accent text-white text-xs font-medium rounded-full">
                {getActiveFilterCount()}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            {getActiveFilterCount() > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-text-secondary hover:text-error"
              >
                Clear All
              </Button>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-primary-50 rounded-lg transition-colors"
            >
              <Icon
                name={isExpanded ? "ChevronUp" : "ChevronDown"}
                size={16}
                className="text-text-secondary"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Hashtags */}
      <div className="p-4 border-b border-border">
        <h4 className="text-sm font-medium text-primary mb-3">Trending Hashtags</h4>
        <div className="flex flex-wrap gap-2">
          {popularHashtags.map((hashtag, index) => (
            <button
              key={index}
              onClick={() => handleHashtagClick(hashtag)}
              className="px-3 py-1 bg-accent-50 text-accent text-sm font-medium rounded-full hover:bg-accent-100 transition-colors"
            >
              {hashtag}
            </button>
          ))}
        </div>
      </div>

      {/* Expanded Filters */}
      {isExpanded && (
        <div className="p-4 space-y-6">
          {filterCategories.map((category) => (
            <div key={category.id}>
              <h4 className="flex items-center space-x-2 text-sm font-medium text-primary mb-3">
                <Icon name={category.icon} size={16} className="text-accent" />
                <span>{category.label}</span>
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {category.options.map((option, index) => {
                  const isSelected = selectedFilters[category.id]?.includes(option);
                  return (
                    <button
                      key={index}
                      onClick={() => handleFilterSelect(category.id, option)}
                      className={`px-3 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                        isSelected
                          ? 'bg-accent text-white border-accent' :'bg-surface text-text-secondary border-border hover:border-accent hover:text-accent'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Active Filters Summary */}
      {getActiveFilterCount() > 0 && (
        <div className="p-4 bg-primary-50 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary">
              {getActiveFilterCount()} filter{getActiveFilterCount() > 1 ? 's' : ''} applied
            </span>
            <Button
              variant="primary"
              size="sm"
              iconName="Search"
              iconPosition="left"
              onClick={() => onFilterChange(selectedFilters)}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;