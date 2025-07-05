import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StyleTwins = ({ styleTwins, onConnect, onViewProfile }) => {
  const [connectedUsers, setConnectedUsers] = useState(new Set());

  const handleConnect = (userId) => {
    setConnectedUsers(prev => new Set([...prev, userId]));
    onConnect(userId);
  };

  return (
    <div className="bg-surface rounded-xl p-6 shadow-md border border-border">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary flex items-center">
            <Icon name="Users" size={20} className="mr-2 text-accent" />
            Your Style Twins
          </h3>
          <p className="text-sm text-text-secondary mt-1">
            Connect with users who share your style preferences and body type
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName="Settings"
          onClick={() => {}}
        >
          Preferences
        </Button>
      </div>

      {/* Style Twins Grid */}
      <div className="space-y-4">
        {styleTwins.map((twin, index) => (
          <div
            key={twin.id}
            className="flex items-center space-x-4 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200"
          >
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <Image
                src={twin.avatar}
                alt={twin.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center border-2 border-white">
                <span className="text-xs font-bold text-white">{twin.matchPercentage}%</span>
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-medium text-primary">{twin.name}</h4>
                {twin.isVerified && (
                  <Icon name="BadgeCheck" size={16} className="text-accent" />
                )}
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-text-secondary mb-2">
                <span>{twin.location}</span>
                <span>•</span>
                <span>{twin.followers} followers</span>
              </div>

              {/* Shared Interests */}
              <div className="flex flex-wrap gap-1 mb-2">
                {twin.sharedInterests.slice(0, 3).map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-accent-50 text-accent text-xs font-medium rounded-full"
                  >
                    {interest}
                  </span>
                ))}
                {twin.sharedInterests.length > 3 && (
                  <span className="px-2 py-1 bg-primary-100 text-text-secondary text-xs font-medium rounded-full">
                    +{twin.sharedInterests.length - 3} more
                  </span>
                )}
              </div>

              {/* Recent Activity */}
              <p className="text-xs text-text-secondary">
                {twin.recentActivity}
              </p>
            </div>

            {/* Recent Posts Preview */}
            <div className="hidden sm:flex space-x-2 flex-shrink-0">
              {twin.recentPosts.slice(0, 3).map((post, idx) => (
                <div
                  key={idx}
                  className="w-12 h-12 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() => onViewProfile(twin.id)}
                >
                  <Image
                    src={post.image}
                    alt={`Recent post ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col space-y-2 flex-shrink-0">
              {!connectedUsers.has(twin.id) ? (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleConnect(twin.id)}
                  iconName="UserPlus"
                  iconPosition="left"
                >
                  Connect
                </Button>
              ) : (
                <Button
                  variant="success"
                  size="sm"
                  disabled
                  iconName="Check"
                  iconPosition="left"
                >
                  Connected
                </Button>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onViewProfile(twin.id)}
                iconName="Eye"
                iconPosition="left"
              >
                View
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Compatibility Factors */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="font-medium text-primary mb-3 flex items-center">
          <Icon name="Target" size={16} className="mr-2" />
          Matching Factors
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Icon name="Ruler" size={14} className="text-accent" />
            <span className="text-sm text-text-secondary">Body Type</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Palette" size={14} className="text-accent" />
            <span className="text-sm text-text-secondary">Color Preferences</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Shirt" size={14} className="text-accent" />
            <span className="text-sm text-text-secondary">Style Categories</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="DollarSign" size={14} className="text-accent" />
            <span className="text-sm text-text-secondary">Budget Range</span>
          </div>
        </div>
      </div>

      {/* Find More */}
      <div className="mt-6 text-center">
        <Button
          variant="outline"
          iconName="Search"
          iconPosition="left"
          onClick={() => {}}
        >
          Find More Style Twins
        </Button>
      </div>
    </div>
  );
};

export default StyleTwins;