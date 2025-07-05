import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FeaturedStoryCard = ({ story, isLarge = false }) => {
  const cardClasses = isLarge 
    ? "col-span-1 md:col-span-2 lg:col-span-2 row-span-2" :"col-span-1";

  return (
    <article className={`${cardClasses} product-card group cursor-pointer`}>
      <div className="relative overflow-hidden">
        <div className={`${isLarge ? 'h-80 lg:h-96' : 'h-64'} relative`}>
          <Image
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              story.category === 'Sustainability' ?'bg-accent text-white' 
                : story.category === 'Heritage' ?'bg-brand-secondary text-white' :'bg-conversion-accent text-white'
            }`}>
              {story.category}
            </span>
          </div>
          
          <div className="absolute top-4 right-4">
            <div className="flex items-center space-x-1 text-white/80">
              <Icon name="Clock" size={14} />
              <span className="text-xs">{story.readTime}</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={story.author.avatar}
                alt={story.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-primary">{story.author.name}</p>
              <p className="text-xs text-text-secondary">{story.author.role}</p>
            </div>
          </div>
          
          <h3 className={`${isLarge ? 'text-xl lg:text-2xl' : 'text-lg'} font-semibold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300`}>
            {story.title}
          </h3>
          
          <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
            {story.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs text-text-secondary">
              <div className="flex items-center space-x-1">
                <Icon name="Heart" size={14} />
                <span>{story.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="MessageCircle" size={14} />
                <span>{story.comments}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Share2" size={14} />
                <span>{story.shares}</span>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
              className="text-accent hover:text-accent-600 p-0"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedStoryCard;