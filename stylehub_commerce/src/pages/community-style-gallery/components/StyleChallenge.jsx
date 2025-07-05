import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StyleChallenge = ({ challenge, onJoin, onVote }) => {
  const [hasJoined, setHasJoined] = useState(challenge.hasJoined);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleJoin = () => {
    setHasJoined(true);
    onJoin(challenge.id);
  };

  const handleVote = (entryId) => {
    setSelectedEntry(entryId);
    onVote(challenge.id, entryId);
  };

  const getDaysLeft = () => {
    const endDate = new Date(challenge.endDate);
    const today = new Date();
    const diffTime = endDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="bg-surface rounded-xl overflow-hidden shadow-md border border-border">
      {/* Challenge Header */}
      <div className="relative">
        <div className="bg-gradient-to-r from-accent to-brand-primary p-6 text-white">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Trophy" size={20} color="white" />
                <span className="text-sm font-medium opacity-90">Style Challenge</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{challenge.description}</p>
            </div>
            <div className="text-right">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="text-lg font-bold">{getDaysLeft()}</div>
                <div className="text-xs opacity-90">days left</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Challenge Stats */}
        <div className="absolute -bottom-4 left-6 right-6">
          <div className="bg-surface rounded-lg shadow-lg p-4 border border-border">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-semibold text-primary">{challenge.participants}</div>
                <div className="text-xs text-text-secondary">Participants</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-primary">{challenge.entries}</div>
                <div className="text-xs text-text-secondary">Entries</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-primary">{challenge.votes}</div>
                <div className="text-xs text-text-secondary">Votes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Content */}
      <div className="p-6 pt-8">
        {/* Challenge Rules */}
        <div className="mb-6">
          <h4 className="font-medium text-primary mb-3 flex items-center">
            <Icon name="List" size={16} className="mr-2" />
            Challenge Rules
          </h4>
          <ul className="space-y-2">
            {challenge.rules.map((rule, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                <Icon name="Check" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prize Information */}
        {challenge.prize && (
          <div className="mb-6 p-4 bg-accent-50 rounded-lg border border-accent-200">
            <h4 className="font-medium text-accent mb-2 flex items-center">
              <Icon name="Gift" size={16} className="mr-2" />
              Prize
            </h4>
            <p className="text-sm text-accent-700">{challenge.prize}</p>
          </div>
        )}

        {/* Featured Entries */}
        {challenge.featuredEntries && challenge.featuredEntries.length > 0 && (
          <div className="mb-6">
            <h4 className="font-medium text-primary mb-3 flex items-center">
              <Icon name="Star" size={16} className="mr-2" />
              Featured Entries
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {challenge.featuredEntries.map((entry, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => handleVote(entry.id)}
                >
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={entry.image}
                      alt={`Entry by ${entry.user.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Entry Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg">
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Image
                              src={entry.user.avatar}
                              alt={entry.user.name}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                            <span className="text-xs font-medium text-primary">
                              {entry.user.name}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Heart" size={12} className="text-error" />
                            <span className="text-xs text-text-secondary">{entry.votes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Vote Indicator */}
                  {selectedEntry === entry.id && (
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                        <Icon name="Check" size={14} color="white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          {!hasJoined ? (
            <Button
              variant="primary"
              onClick={handleJoin}
              iconName="Plus"
              iconPosition="left"
              className="flex-1"
            >
              Join Challenge
            </Button>
          ) : (
            <Button
              variant="success"
              disabled
              iconName="Check"
              iconPosition="left"
              className="flex-1"
            >
              Joined
            </Button>
          )}
          
          <Button
            variant="outline"
            iconName="ExternalLink"
            iconPosition="left"
          >
            View All
          </Button>
        </div>

        {/* Hashtags */}
        {challenge.hashtags && challenge.hashtags.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {challenge.hashtags.map((hashtag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary-50 text-primary text-xs font-medium rounded-full"
                >
                  #{hashtag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StyleChallenge;