import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('details');

  const tabs = [
    { id: 'details', label: 'Details', icon: 'Info' },
    { id: 'sizing', label: 'Size & Fit', icon: 'Ruler' },
    { id: 'care', label: 'Care', icon: 'Shirt' },
    { id: 'sustainability', label: 'Sustainability', icon: 'Leaf' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-primary mb-2">Product Details</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex justify-between">
                  <span>Material:</span>
                  <span className="text-primary">{product.material}</span>
                </li>
                <li className="flex justify-between">
                  <span>Fit:</span>
                  <span className="text-primary">{product.fit}</span>
                </li>
                <li className="flex justify-between">
                  <span>Origin:</span>
                  <span className="text-primary">{product.origin}</span>
                </li>
                <li className="flex justify-between">
                  <span>Style Code:</span>
                  <span className="text-primary">{product.styleCode}</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Features</h4>
              <ul className="space-y-1 text-sm text-text-secondary">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={14} className="text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      
      case 'sizing':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-primary mb-2">Size Guide</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-primary">Size</th>
                      <th className="text-left py-2 text-primary">Chest</th>
                      <th className="text-left py-2 text-primary">Waist</th>
                      <th className="text-left py-2 text-primary">Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.sizeChart.map((size, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="py-2 font-medium text-primary">{size.size}</td>
                        <td className="py-2 text-text-secondary">{size.chest}</td>
                        <td className="py-2 text-text-secondary">{size.waist}</td>
                        <td className="py-2 text-text-secondary">{size.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Fit Notes</h4>
              <p className="text-sm text-text-secondary">{product.fitNotes}</p>
            </div>
          </div>
        );
      
      case 'care':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-primary mb-2">Care Instructions</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                {product.careInstructions.map((instruction, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Icon name="Droplets" size={14} className="text-accent" />
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background rounded-lg p-4">
              <h4 className="font-medium text-primary mb-2 flex items-center space-x-2">
                <Icon name="Lightbulb" size={16} className="text-warning-400" />
                <span>Care Tips</span>
              </h4>
              <p className="text-sm text-text-secondary">
                {product.careTips}
              </p>
            </div>
          </div>
        );
      
      case 'sustainability':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-primary mb-2">Sustainability Features</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                {product.sustainabilityFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Icon name="Leaf" size={14} className="text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent-50 rounded-lg p-4">
              <h4 className="font-medium text-primary mb-2 flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-accent" />
                <span>Certifications</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="bg-accent text-white px-2 py-1 rounded text-xs font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-surface rounded-lg border border-border">
      {/* Tab Navigation */}
      <div className="flex border-b border-border overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              activeTab === tab.id
                ? 'text-accent border-b-2 border-accent bg-accent-50' :'text-text-secondary hover:text-primary'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProductTabs;