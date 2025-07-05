import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LoyaltyProgram = ({ loyaltyData }) => {
  const tiers = [
    { name: 'Style Explorer', minPoints: 0, color: 'text-gray-600', bgColor: 'bg-gray-100' },
    { name: 'Style Enthusiast', minPoints: 500, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { name: 'Style Curator', minPoints: 1500, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { name: 'Style Icon', minPoints: 3000, color: 'text-yellow-600', bgColor: 'bg-yellow-100' }
  ];

  const getCurrentTier = () => {
    return tiers.reduce((current, tier) => 
      loyaltyData.points >= tier.minPoints ? tier : current
    );
  };

  const getNextTier = () => {
    const currentTier = getCurrentTier();
    const currentIndex = tiers.findIndex(tier => tier.name === currentTier.name);
    return currentIndex < tiers.length - 1 ? tiers[currentIndex + 1] : null;
  };

  const currentTier = getCurrentTier();
  const nextTier = getNextTier();
  const progressPercentage = nextTier 
    ? ((loyaltyData.points - currentTier.minPoints) / (nextTier.minPoints - currentTier.minPoints)) * 100
    : 100;

  const benefits = [
    { icon: 'Gift', title: 'Birthday Rewards', description: 'Special discounts on your birthday' },
    { icon: 'Zap', title: 'Early Access', description: 'Shop new collections before everyone else' },
    { icon: 'Truck', title: 'Free Shipping', description: 'Complimentary shipping on all orders' },
    { icon: 'Users', title: 'Exclusive Events', description: 'VIP access to fashion shows and events' },
    { icon: 'Percent', title: 'Member Discounts', description: 'Extra savings on sale items' },
    { icon: 'MessageSquare', title: 'Style Concierge', description: 'Personal styling consultations' }
  ];

  return (
    <div className="bg-surface rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-primary">Style Rewards</h2>
          <p className="text-text-secondary text-sm mt-1">
            Earn points with every purchase and unlock exclusive benefits
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          iconName="Info"
          iconPosition="left"
        >
          Learn More
        </Button>
      </div>

      {/* Current Status */}
      <div className="bg-gradient-to-r from-brand-primary to-accent rounded-xl p-6 text-white mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold">{loyaltyData.points.toLocaleString()}</h3>
            <p className="text-white/80">Style Points</p>
          </div>
          <div className="text-right">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20`}>
              <Icon name="Crown" size={16} className="mr-1" />
              {currentTier.name}
            </div>
          </div>
        </div>

        {nextTier && (
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-white/80">Progress to {nextTier.name}</span>
              <span className="text-white/80">
                {nextTier.minPoints - loyaltyData.points} points to go
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white rounded-full h-2 transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Tier Benefits */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-primary mb-4">Your Benefits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.slice(0, tiers.findIndex(tier => tier.name === currentTier.name) + 3).map((benefit, index) => (
            <div key={index} className="p-4 bg-background rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center">
                  <Icon name={benefit.icon} size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-primary text-sm">{benefit.title}</h4>
                  <p className="text-text-secondary text-xs mt-1">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Rewards */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-primary mb-4">Available Rewards</h3>
        <div className="space-y-3">
          {loyaltyData.availableRewards.map((reward, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center">
                  <Icon name={reward.icon} size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">{reward.title}</h4>
                  <p className="text-text-secondary text-sm">{reward.description}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Icon name="Star" size={14} className="text-warning" />
                    <span className="text-sm font-medium text-primary">{reward.points} points</span>
                  </div>
                </div>
              </div>
              <Button
                variant={loyaltyData.points >= reward.points ? "primary" : "ghost"}
                size="sm"
                disabled={loyaltyData.points < reward.points}
              >
                {loyaltyData.points >= reward.points ? "Redeem" : "Locked"}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-medium text-primary mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {loyaltyData.recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'earned' ? 'bg-success-50' : 'bg-warning-50'
                }`}>
                  <Icon 
                    name={activity.type === 'earned' ? 'Plus' : 'Minus'} 
                    size={16} 
                    className={activity.type === 'earned' ? 'text-success' : 'text-warning'} 
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary">{activity.description}</p>
                  <p className="text-xs text-text-secondary">{activity.date}</p>
                </div>
              </div>
              <div className={`text-sm font-medium ${
                activity.type === 'earned' ? 'text-success' : 'text-warning'
              }`}>
                {activity.type === 'earned' ? '+' : '-'}{activity.points}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;