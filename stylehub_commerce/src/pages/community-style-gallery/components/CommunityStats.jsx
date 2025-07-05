import React from 'react';
import Icon from '../../../components/AppIcon';

const CommunityStats = ({ stats }) => {
  const statItems = [
    {
      id: 'totalPosts',
      label: 'Style Posts',
      value: stats.totalPosts,
      icon: 'Camera',
      color: 'text-accent',
      bgColor: 'bg-accent-50'
    },
    {
      id: 'activeChallenges',
      label: 'Active Challenges',
      value: stats.activeChallenges,
      icon: 'Trophy',
      color: 'text-warning',
      bgColor: 'bg-warning-50'
    },
    {
      id: 'communityMembers',
      label: 'Community Members',
      value: stats.communityMembers,
      icon: 'Users',
      color: 'text-brand-primary',
      bgColor: 'bg-primary-50'
    },
    {
      id: 'expertContributions',
      label: 'Expert Tips',
      value: stats.expertContributions,
      icon: 'Award',
      color: 'text-conversion-accent',
      bgColor: 'bg-orange-50'
    }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="bg-surface rounded-xl shadow-md border border-border p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary">Community Pulse</h3>
          <p className="text-sm text-text-secondary mt-1">
            Real-time community activity and engagement
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-xs text-accent font-medium">Live</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statItems.map((item) => (
          <div
            key={item.id}
            className="text-center p-4 rounded-lg border border-border hover:shadow-md transition-shadow duration-200"
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 ${item.bgColor} rounded-lg mb-3`}>
              <Icon name={item.icon} size={24} className={item.color} />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">
              {formatNumber(item.value)}
            </div>
            <div className="text-sm text-text-secondary">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Trending Topics */}
      <div className="border-t border-border pt-6">
        <h4 className="font-medium text-primary mb-4 flex items-center">
          <Icon name="TrendingUp" size={16} className="mr-2 text-accent" />
          Trending This Week
        </h4>
        
        <div className="space-y-3">
          {stats.trendingTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-6 h-6 bg-accent text-white text-xs font-bold rounded-full">
                  {index + 1}
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">{topic.name}</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-text-secondary">{topic.posts} posts</span>
                    <span className="text-xs text-text-secondary">•</span>
                    <span className="text-xs text-accent">+{topic.growth}% this week</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                <Icon name="ArrowUp" size={14} className="text-accent" />
                <span className="text-xs font-medium text-accent">{topic.engagement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="border-t border-border pt-6 mt-6">
        <h4 className="font-medium text-primary mb-4 flex items-center">
          <Icon name="Activity" size={16} className="mr-2 text-accent" />
          Recent Activity
        </h4>
        
        <div className="space-y-2">
          {stats.recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
              <span className="text-text-secondary">
                <span className="font-medium text-primary">{activity.user}</span>
                {' '}{activity.action}{' '}
                <span className="text-accent">{activity.target}</span>
              </span>
              <span className="text-xs text-text-secondary ml-auto">
                {activity.timeAgo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Community Highlights */}
      <div className="border-t border-border pt-6 mt-6">
        <h4 className="font-medium text-primary mb-4 flex items-center">
          <Icon name="Star" size={16} className="mr-2 text-accent" />
          This Week's Highlights
        </h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.weeklyHighlights.map((highlight, index) => (
            <div
              key={index}
              className="p-3 bg-accent-50 rounded-lg border border-accent-200"
            >
              <div className="flex items-center space-x-2 mb-2">
                <Icon name={highlight.icon} size={16} className="text-accent" />
                <span className="text-sm font-medium text-accent">{highlight.title}</span>
              </div>
              <p className="text-xs text-accent-700">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityStats;