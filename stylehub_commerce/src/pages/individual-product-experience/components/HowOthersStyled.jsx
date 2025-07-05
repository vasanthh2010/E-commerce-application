import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HowOthersStyled = ({ userStyles }) => {
  const [selectedStyle, setSelectedStyle] = useState(null);

  const handleStyleClick = (style) => {
    setSelectedStyle(style);
  };

  const handleCloseModal = () => {
    setSelectedStyle(null);
  };

  const handleFollowUser = (userId) => {
    console.log('Following user:', userId);
  };

  const handleLikeStyle = (styleId) => {
    console.log('Liking style:', styleId);
  };

  return (
    <div className="bg-surface rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-primary">How Others Styled It</h3>
        <Button
          variant="outline"
          size="sm"
          iconName="Upload"
          iconPosition="left"
          onClick={() => {}}
        >
          Share Your Style
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {userStyles.map((style) => (
          <div
            key={style.id}
            className="group cursor-pointer"
            onClick={() => handleStyleClick(style)}
          >
            <div className="relative bg-background rounded-lg overflow-hidden mb-3 aspect-square">
              <Image
                src={style.image}
                alt={`Style by ${style.user.name}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              
              {/* Like Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLikeStyle(style.id);
                }}
                className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <Icon 
                  name="Heart" 
                  size={14} 
                  className={`${style.isLiked ? 'text-error fill-current' : 'text-primary'}`}
                />
              </button>

              {/* User Avatar */}
              <div className="absolute bottom-3 left-3 w-8 h-8 bg-white rounded-full overflow-hidden border-2 border-white">
                <Image
                  src={style.user.avatar}
                  alt={style.user.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Like Count */}
              <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                <Icon name="Heart" size={10} />
                <span>{style.likes}</span>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium text-primary">
                @{style.user.username}
              </p>
              <p className="text-xs text-text-secondary line-clamp-2">
                {style.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Style Detail Modal */}
      {selectedStyle && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-surface rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-background rounded-full overflow-hidden">
                    <Image
                      src={selectedStyle.user.avatar}
                      alt={selectedStyle.user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">
                      {selectedStyle.user.name}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      @{selectedStyle.user.username}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleFollowUser(selectedStyle.user.id)}
                  >
                    {selectedStyle.user.isFollowing ? 'Following' : 'Follow'}
                  </Button>
                  <button
                    onClick={handleCloseModal}
                    className="p-2 hover:bg-background rounded-full transition-colors duration-300"
                  >
                    <Icon name="X" size={20} className="text-text-secondary" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <div className="aspect-square bg-background rounded-lg overflow-hidden">
                    <Image
                      src={selectedStyle.image}
                      alt={`Style by ${selectedStyle.user.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Style Details</h4>
                    <p className="text-text-secondary">{selectedStyle.caption}</p>
                  </div>

                  {selectedStyle.tags && (
                    <div>
                      <h4 className="font-medium text-primary mb-2">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedStyle.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-background text-text-secondary px-2 py-1 rounded text-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedStyle.products && (
                    <div>
                      <h4 className="font-medium text-primary mb-2">Featured Products</h4>
                      <div className="space-y-3">
                        {selectedStyle.products.map((product) => (
                          <div key={product.id} className="flex items-center space-x-3 p-3 bg-background rounded-lg">
                            <div className="w-12 h-12 bg-surface rounded overflow-hidden">
                              <Image
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-primary">
                                {product.name}
                              </p>
                              <p className="text-sm text-text-secondary">
                                ${product.price}
                              </p>
                            </div>
                            <Button
                              variant="outline"
                              size="xs"
                              onClick={() => {}}
                            >
                              Shop
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <button
                      onClick={() => handleLikeStyle(selectedStyle.id)}
                      className="flex items-center space-x-2 text-text-secondary hover:text-error transition-colors duration-300"
                    >
                      <Icon 
                        name="Heart" 
                        size={20} 
                        className={selectedStyle.isLiked ? 'text-error fill-current' : ''}
                      />
                      <span>{selectedStyle.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-300">
                      <Icon name="MessageCircle" size={20} />
                      <span>{selectedStyle.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-300">
                      <Icon name="Share2" size={20} />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View More */}
      <div className="text-center mt-6">
        <Button
          variant="outline"
          size="md"
          onClick={() => {}}
        >
          View More Styles
        </Button>
      </div>
    </div>
  );
};

export default HowOthersStyled;