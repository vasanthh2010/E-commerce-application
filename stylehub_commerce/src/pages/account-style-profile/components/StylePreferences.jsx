import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StylePreferences = ({ preferences, onUpdatePreferences }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPreferences, setEditedPreferences] = useState(preferences);

  const styleCategories = [
    { id: 'casual', name: 'Casual', icon: 'Shirt' },
    { id: 'business', name: 'Business', icon: 'Briefcase' },
    { id: 'formal', name: 'Formal', icon: 'Crown' },
    { id: 'bohemian', name: 'Bohemian', icon: 'Flower' },
    { id: 'minimalist', name: 'Minimalist', icon: 'Circle' },
    { id: 'vintage', name: 'Vintage', icon: 'Clock' },
    { id: 'streetwear', name: 'Streetwear', icon: 'Zap' },
    { id: 'romantic', name: 'Romantic', icon: 'Heart' }
  ];

  const colorPalettes = [
    { id: 'neutral', name: 'Neutral Tones', colors: ['#F5F5F5', '#D4D4D4', '#A3A3A3', '#525252'] },
    { id: 'earth', name: 'Earth Tones', colors: ['#8B4513', '#D2691E', '#CD853F', '#F4A460'] },
    { id: 'jewel', name: 'Jewel Tones', colors: ['#4B0082', '#008B8B', '#B22222', '#FF8C00'] },
    { id: 'pastel', name: 'Pastel Colors', colors: ['#FFB6C1', '#E6E6FA', '#F0E68C', '#98FB98'] },
    { id: 'bold', name: 'Bold & Bright', colors: ['#FF0000', '#0000FF', '#FFFF00', '#FF00FF'] }
  ];

  const handleSave = () => {
    onUpdatePreferences(editedPreferences);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedPreferences(preferences);
    setIsEditing(false);
  };

  const toggleStyleCategory = (categoryId) => {
    setEditedPreferences(prev => ({
      ...prev,
      styleCategories: prev.styleCategories.includes(categoryId)
        ? prev.styleCategories.filter(id => id !== categoryId)
        : [...prev.styleCategories, categoryId]
    }));
  };

  const updateColorPalette = (paletteId) => {
    setEditedPreferences(prev => ({
      ...prev,
      preferredColors: paletteId
    }));
  };

  return (
    <div className="bg-surface rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-primary">Style Preferences</h2>
          <p className="text-text-secondary text-sm mt-1">
            Customize your style profile for better recommendations
          </p>
        </div>
        {!isEditing ? (
          <Button
            variant="outline"
            size="sm"
            iconName="Edit"
            iconPosition="left"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              iconName="Check"
              iconPosition="left"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {/* Style Categories */}
        <div>
          <h3 className="text-lg font-medium text-primary mb-3">Preferred Styles</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {styleCategories.map((category) => {
              const isSelected = (isEditing ? editedPreferences : preferences).styleCategories.includes(category.id);
              return (
                <div
                  key={category.id}
                  onClick={isEditing ? () => toggleStyleCategory(category.id) : undefined}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                    isSelected
                      ? 'border-accent bg-accent-50 text-accent' :'border-border bg-background hover:border-accent/50'
                  } ${isEditing ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <Icon
                      name={category.icon}
                      size={24}
                      className={`mb-2 ${isSelected ? 'text-accent' : 'text-text-secondary'}`}
                    />
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Color Preferences */}
        <div>
          <h3 className="text-lg font-medium text-primary mb-3">Color Palette</h3>
          <div className="space-y-3">
            {colorPalettes.map((palette) => {
              const isSelected = (isEditing ? editedPreferences : preferences).preferredColors === palette.id;
              return (
                <div
                  key={palette.id}
                  onClick={isEditing ? () => updateColorPalette(palette.id) : undefined}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                    isSelected
                      ? 'border-accent bg-accent-50' :'border-border bg-background hover:border-accent/50'
                  } ${isEditing ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        {palette.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-6 h-6 rounded-full border border-border"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span className="font-medium text-primary">{palette.name}</span>
                    </div>
                    {isSelected && (
                      <Icon name="Check" size={20} className="text-accent" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Size & Fit Preferences */}
        <div>
          <h3 className="text-lg font-medium text-primary mb-3">Size & Fit Preferences</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-background rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Ruler" size={18} className="text-text-secondary" />
                <span className="font-medium text-primary">Preferred Fit</span>
              </div>
              <p className="text-text-secondary text-sm">{preferences.preferredFit}</p>
            </div>
            <div className="p-4 bg-background rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Package" size={18} className="text-text-secondary" />
                <span className="font-medium text-primary">Size Range</span>
              </div>
              <p className="text-text-secondary text-sm">{preferences.sizeRange}</p>
            </div>
          </div>
        </div>

        {/* Sustainability Preferences */}
        <div>
          <h3 className="text-lg font-medium text-primary mb-3">Sustainability Priorities</h3>
          <div className="flex flex-wrap gap-2">
            {preferences.sustainabilityPriorities.map((priority, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-accent-50 text-accent rounded-full text-sm font-medium border border-accent/20"
              >
                {priority}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylePreferences;