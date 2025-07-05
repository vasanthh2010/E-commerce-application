import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';


const StylePost = ({ post, onLike, onShare, onSave }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [isSaved, setIsSaved] = useState(post.isSaved);
  const [showProducts, setShowProducts] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(post.id, !isLiked);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave(post.id, !isSaved);
  };

  const handleShare = () => {
    onShare(post.id);
  };

  return (
    <div className="bg-surface rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
      {/* User Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Image
              src={post.user.avatar}
              alt={post.user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            {post.user.isVerified && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                <Icon name="Check" size={12} color="white" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-medium text-primary text-sm">{post.user.name}</h3>
            <p className="text-xs text-text-secondary">{post.location}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {post.badges.map((badge, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-accent-50 text-accent text-xs font-medium rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={post.image}
          alt={post.caption}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Product Tags Overlay */}
        {post.products && post.products.length > 0 && (
          <div className="absolute inset-0">
            {post.products.map((product, index) => (
              <button
                key={index}
                className="absolute w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                style={{ left: `${product.x}%`, top: `${product.y}%` }}
                onClick={() => setShowProducts(!showProducts)}
              >
                <Icon name="Plus" size={14} className="text-primary" />
              </button>
            ))}
          </div>
        )}

        {/* Style Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-black/70 text-white text-xs font-medium rounded-full backdrop-blur-sm">
            {post.category}
          </span>
        </div>

        {/* Occasion Badge */}
        {post.occasion && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-white/90 text-primary text-xs font-medium rounded-full backdrop-blur-sm">
              {post.occasion}
            </span>
          </div>
        )}
      </div>

      {/* Product Details Popup */}
      {showProducts && post.products && (
        <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-sm p-4 border-t border-border">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-primary text-sm">Shop This Look</h4>
            <button
              onClick={() => setShowProducts(false)}
              className="p-1 hover:bg-primary-50 rounded-full transition-colors"
            >
              <Icon name="X" size={16} className="text-text-secondary" />
            </button>
          </div>
          <div className="space-y-2">
            {post.products.map((product, index) => (
              <Link
                key={index}
                to="/individual-product-experience"
                className="flex items-center space-x-3 p-2 hover:bg-primary-50 rounded-lg transition-colors"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-8 h-8 rounded object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-primary truncate">{product.name}</p>
                  <p className="text-xs text-text-secondary">${product.price}</p>
                </div>
                <Icon name="ExternalLink" size={14} className="text-text-secondary" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {/* Actions */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className="flex items-center space-x-1 group/like"
            >
              <Icon
                name="Heart"
                size={20}
                className={`transition-colors duration-200 ${
                  isLiked
                    ? 'text-error fill-current' :'text-text-secondary group-hover/like:text-error'
                }`}
              />
              <span className="text-sm text-text-secondary">{post.likes}</span>
            </button>
            
            <button
              onClick={handleShare}
              className="flex items-center space-x-1 group/share"
            >
              <Icon
                name="Share2"
                size={20}
                className="text-text-secondary group-hover/share:text-primary transition-colors duration-200"
              />
              <span className="text-sm text-text-secondary">{post.shares}</span>
            </button>
            
            <Link
              to="/individual-product-experience"
              className="flex items-center space-x-1 group/shop"
            >
              <Icon
                name="ShoppingBag"
                size={20}
                className="text-text-secondary group-hover/shop:text-accent transition-colors duration-200"
              />
              <span className="text-sm text-text-secondary">Shop</span>
            </Link>
          </div>
          
          <button
            onClick={handleSave}
            className="group/save"
          >
            <Icon
              name="Bookmark"
              size={20}
              className={`transition-colors duration-200 ${
                isSaved
                  ? 'text-accent fill-current' :'text-text-secondary group-hover/save:text-accent'
              }`}
            />
          </button>
        </div>

        {/* Caption */}
        <div className="space-y-2">
          <p className="text-sm text-primary leading-relaxed">{post.caption}</p>
          
          {/* Hashtags */}
          {post.hashtags && post.hashtags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {post.hashtags.map((hashtag, index) => (
                <button
                  key={index}
                  className="text-xs text-accent hover:text-accent-600 transition-colors"
                >
                  #{hashtag}
                </button>
              ))}
            </div>
          )}
          
          {/* Timestamp */}
          <p className="text-xs text-text-secondary">{post.timeAgo}</p>
        </div>
      </div>
    </div>
  );
};

export default StylePost;