import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ExpertContent = ({ expertPosts, onBookConsultation, onSavePost }) => {
  const [savedPosts, setSavedPosts] = useState(new Set());
  const [activeTab, setActiveTab] = useState('tips');

  const handleSavePost = (postId) => {
    setSavedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
    onSavePost(postId);
  };

  const tabs = [
    { id: 'tips', label: 'Styling Tips', icon: 'Lightbulb' },
    { id: 'trends', label: 'Trend Forecast', icon: 'TrendingUp' },
    { id: 'education', label: 'Fashion Education', icon: 'BookOpen' }
  ];

  const filteredPosts = expertPosts.filter(post => post.category === activeTab);

  return (
    <div className="bg-surface rounded-xl shadow-md border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-primary to-accent p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Icon name="Award" size={24} className="mr-3" color="white" />
              Expert Insights
            </h3>
            <p className="text-sm opacity-90">
              Professional styling advice from certified fashion experts
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="Calendar"
            className="text-white border-white/30 hover:bg-white/10"
            onClick={() => onBookConsultation()}
          >
            Book Consultation
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-accent border-b-2 border-accent bg-accent-50' :'text-text-secondary hover:text-primary hover:bg-primary-50'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="space-y-6">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
            >
              {/* Expert Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Image
                      src={post.expert.avatar}
                      alt={post.expert.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Award" size={12} color="white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">{post.expert.name}</h4>
                    <p className="text-xs text-text-secondary">{post.expert.title}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-accent-50 text-accent text-xs font-medium rounded-full">
                    {post.readTime} min read
                  </span>
                  <button
                    onClick={() => handleSavePost(post.id)}
                    className="p-1 hover:bg-primary-50 rounded-full transition-colors"
                  >
                    <Icon
                      name="Bookmark"
                      size={16}
                      className={`transition-colors ${
                        savedPosts.has(post.id)
                          ? 'text-accent fill-current' :'text-text-secondary hover:text-accent'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Post Content */}
              <div className="space-y-3">
                <h5 className="font-semibold text-primary text-lg leading-tight">
                  {post.title}
                </h5>
                
                {post.image && (
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <p className="text-text-secondary leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Key Points */}
                {post.keyPoints && post.keyPoints.length > 0 && (
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h6 className="font-medium text-primary mb-2 flex items-center">
                      <Icon name="CheckCircle" size={16} className="mr-2 text-accent" />
                      Key Takeaways
                    </h6>
                    <ul className="space-y-1">
                      {post.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-text-secondary">
                          <Icon name="ArrowRight" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-secondary-50 text-secondary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors">
                      <Icon name="Heart" size={16} />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors">
                      <Icon name="MessageCircle" size={16} />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors">
                      <Icon name="Share2" size={16} />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                  
                  <Link
                    to="/brand-designer-stories"
                    className="text-accent hover:text-accent-600 text-sm font-medium transition-colors"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-6">
          <Button
            variant="outline"
            iconName="ChevronDown"
            iconPosition="right"
            onClick={() => {}}
          >
            Load More Expert Content
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExpertContent;