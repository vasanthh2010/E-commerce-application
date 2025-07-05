import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CustomerReviews = ({ reviews, averageRating, totalReviews }) => {
  const [sortBy, setSortBy] = useState('newest');
  const [filterBy, setFilterBy] = useState('all');

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'highest', label: 'Highest Rating' },
    { value: 'lowest', label: 'Lowest Rating' },
    { value: 'helpful', label: 'Most Helpful' }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Reviews' },
    { value: '5', label: '5 Stars' },
    { value: '4', label: '4 Stars' },
    { value: '3', label: '3 Stars' },
    { value: '2', label: '2 Stars' },
    { value: '1', label: '1 Star' },
    { value: 'photos', label: 'With Photos' }
  ];

  const ratingDistribution = [
    { stars: 5, count: 156, percentage: 78 },
    { stars: 4, count: 32, percentage: 16 },
    { stars: 3, count: 8, percentage: 4 },
    { stars: 2, count: 3, percentage: 1.5 },
    { stars: 1, count: 1, percentage: 0.5 }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleHelpful = (reviewId) => {
    console.log('Marking review as helpful:', reviewId);
  };

  return (
    <div className="bg-surface rounded-lg border border-border p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-primary mb-4">
          Customer Reviews ({totalReviews})
        </h3>

        {/* Rating Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                {averageRating}
              </div>
              <div className="flex items-center justify-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={`${
                      i < Math.floor(averageRating)
                        ? 'text-warning-400 fill-current' :'text-border'
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-text-secondary">
                Based on {totalReviews} reviews
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {ratingDistribution.map((rating) => (
              <div key={rating.stars} className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 w-16">
                  <span className="text-sm text-text-secondary">
                    {rating.stars}
                  </span>
                  <Icon name="Star" size={12} className="text-warning-400 fill-current" />
                </div>
                <div className="flex-1 bg-background rounded-full h-2">
                  <div
                    className="bg-warning-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${rating.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-text-secondary w-8">
                  {rating.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 mb-6">
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-border rounded-lg text-sm bg-surface text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="px-3 py-2 border border-border rounded-lg text-sm bg-surface text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {filterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <Button
            variant="outline"
            size="sm"
            iconName="Edit"
            iconPosition="left"
            onClick={() => {}}
          >
            Write a Review
          </Button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-background rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-primary">{review.name}</h4>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className={`${
                              i < review.rating
                                ? 'text-warning-400 fill-current' :'text-border'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-text-secondary">
                        {formatDate(review.date)}
                      </span>
                    </div>
                  </div>
                  {review.verified && (
                    <span className="text-xs bg-accent-50 text-accent px-2 py-1 rounded font-medium">
                      Verified Purchase
                    </span>
                  )}
                </div>

                {/* Size and Fit Info */}
                {review.sizeInfo && (
                  <div className="flex items-center space-x-4 mb-3 text-sm text-text-secondary">
                    <span>Size: {review.sizeInfo.size}</span>
                    <span>Fit: {review.sizeInfo.fit}</span>
                    <span>Height: {review.sizeInfo.height}</span>
                  </div>
                )}

                <p className="text-text-secondary mb-3 leading-relaxed">
                  {review.comment}
                </p>

                {/* Review Photos */}
                {review.photos && review.photos.length > 0 && (
                  <div className="flex space-x-2 mb-3">
                    {review.photos.map((photo, index) => (
                      <div
                        key={index}
                        className="w-16 h-16 bg-background rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity duration-300"
                      >
                        <Image
                          src={photo}
                          alt={`Review photo ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Review Actions */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleHelpful(review.id)}
                    className="flex items-center space-x-1 text-sm text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    <Icon name="ThumbsUp" size={14} />
                    <span>Helpful ({review.helpfulCount})</span>
                  </button>
                  <button className="text-sm text-text-secondary hover:text-primary transition-colors duration-300">
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-6">
        <Button
          variant="outline"
          size="md"
          onClick={() => {}}
        >
          Load More Reviews
        </Button>
      </div>
    </div>
  );
};

export default CustomerReviews;