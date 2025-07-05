import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProfileHeader = ({ user, onEditProfile }) => {
  return (
    <div className="bg-gradient-to-r from-brand-primary to-accent rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-white/20">
              <Image
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-success rounded-full border-3 border-white flex items-center justify-center">
              <Icon name="Check" size={16} color="white" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl lg:text-3xl font-semibold mb-1">
                  Welcome back, {user.name}!
                </h1>
                <p className="text-white/80 text-sm lg:text-base">
                  {user.memberSince} • {user.loyaltyTier} Member
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={16} className="text-yellow-300 fill-current" />
                    <span className="text-sm font-medium">{user.styleScore}/100</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Award" size={16} className="text-white/80" />
                    <span className="text-sm">{user.totalOrders} Orders</span>
                  </div>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                iconName="Edit"
                iconPosition="left"
                onClick={onEditProfile}
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30"
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold">{user.stats.wishlistItems}</div>
            <div className="text-white/80 text-sm">Wishlist Items</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{user.stats.loyaltyPoints}</div>
            <div className="text-white/80 text-sm">Style Points</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{user.stats.referrals}</div>
            <div className="text-white/80 text-sm">Referrals</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{user.stats.reviews}</div>
            <div className="text-white/80 text-sm">Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;