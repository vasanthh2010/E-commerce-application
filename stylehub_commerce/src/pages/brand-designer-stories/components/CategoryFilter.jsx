import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      <div className="flex items-center space-x-2 mr-4">
        <Icon name="Filter" size={20} className="text-text-secondary" />
        <span className="text-sm font-medium text-text-secondary">Filter by:</span>
      </div>
      
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "primary" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className={`transition-all duration-300 ${
            activeCategory === category.id 
              ? 'bg-accent text-white' :'hover:bg-accent-50 hover:text-accent hover:border-accent'
          }`}
        >
          {category.name}
          {category.count && (
            <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
              activeCategory === category.id 
                ? 'bg-white/20 text-white' :'bg-text-secondary/10 text-text-secondary'
            }`}>
              {category.count}
            </span>
          )}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;