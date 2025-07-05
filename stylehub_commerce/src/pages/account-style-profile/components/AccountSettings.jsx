import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const AccountSettings = ({ settings, onUpdateSettings }) => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [editedSettings, setEditedSettings] = useState(settings);

  const tabs = [
    { id: 'personal', name: 'Personal Info', icon: 'User' },
    { id: 'notifications', name: 'Notifications', icon: 'Bell' },
    { id: 'privacy', name: 'Privacy', icon: 'Shield' },
    { id: 'security', name: 'Security', icon: 'Lock' }
  ];

  const handleSave = () => {
    onUpdateSettings(editedSettings);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedSettings(settings);
    setIsEditing(false);
  };

  const updateSetting = (category, key, value) => {
    setEditedSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-primary mb-2">First Name</label>
          {isEditing ? (
            <Input
              type="text"
              value={editedSettings.personal.firstName}
              onChange={(e) => updateSetting('personal', 'firstName', e.target.value)}
              placeholder="Enter first name"
            />
          ) : (
            <p className="text-text-secondary">{settings.personal.firstName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-2">Last Name</label>
          {isEditing ? (
            <Input
              type="text"
              value={editedSettings.personal.lastName}
              onChange={(e) => updateSetting('personal', 'lastName', e.target.value)}
              placeholder="Enter last name"
            />
          ) : (
            <p className="text-text-secondary">{settings.personal.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-primary mb-2">Email Address</label>
        {isEditing ? (
          <Input
            type="email"
            value={editedSettings.personal.email}
            onChange={(e) => updateSetting('personal', 'email', e.target.value)}
            placeholder="Enter email address"
          />
        ) : (
          <p className="text-text-secondary">{settings.personal.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-primary mb-2">Phone Number</label>
        {isEditing ? (
          <Input
            type="tel"
            value={editedSettings.personal.phone}
            onChange={(e) => updateSetting('personal', 'phone', e.target.value)}
            placeholder="Enter phone number"
          />
        ) : (
          <p className="text-text-secondary">{settings.personal.phone}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-primary mb-2">Date of Birth</label>
        {isEditing ? (
          <Input
            type="date"
            value={editedSettings.personal.dateOfBirth}
            onChange={(e) => updateSetting('personal', 'dateOfBirth', e.target.value)}
          />
        ) : (
          <p className="text-text-secondary">{settings.personal.dateOfBirth}</p>
        )}
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-primary mb-4">Email Notifications</h3>
        <div className="space-y-4">
          {Object.entries(settings.notifications.email).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-primary capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <p className="text-text-secondary text-sm">
                  {key === 'orderUpdates' && 'Get notified about order status changes'}
                  {key === 'promotions' && 'Receive exclusive offers and discounts'}
                  {key === 'styleUpdates' && 'New arrivals and style recommendations'}
                  {key === 'newsletter' && 'Weekly fashion tips and trends'}
                </p>
              </div>
              <button
                onClick={() => updateSetting('notifications', 'email', {
                  ...editedSettings.notifications.email,
                  [key]: !editedSettings.notifications.email[key]
                })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  (isEditing ? editedSettings : settings).notifications.email[key]
                    ? 'bg-accent' :'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    (isEditing ? editedSettings : settings).notifications.email[key]
                      ? 'translate-x-6' :'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-primary mb-4">Push Notifications</h3>
        <div className="space-y-4">
          {Object.entries(settings.notifications.push).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-primary capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <p className="text-text-secondary text-sm">
                  {key === 'orderUpdates' && 'Real-time order status notifications'}
                  {key === 'priceDrops' && 'Alert when wishlist items go on sale'}
                  {key === 'backInStock' && 'Notify when out-of-stock items return'}
                </p>
              </div>
              <button
                onClick={() => updateSetting('notifications', 'push', {
                  ...editedSettings.notifications.push,
                  [key]: !editedSettings.notifications.push[key]
                })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  (isEditing ? editedSettings : settings).notifications.push[key]
                    ? 'bg-accent' :'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    (isEditing ? editedSettings : settings).notifications.push[key]
                      ? 'translate-x-6' :'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPrivacy = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-primary mb-4">Profile Visibility</h3>
        <div className="space-y-4">
          {Object.entries(settings.privacy.profileVisibility).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-primary capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <p className="text-text-secondary text-sm">
                  {key === 'publicProfile' && 'Allow others to view your style profile'}
                  {key === 'showPurchases' && 'Display your recent purchases publicly'}
                  {key === 'showWishlist' && 'Make your wishlist visible to others'}
                </p>
              </div>
              <button
                onClick={() => updateSetting('privacy', 'profileVisibility', {
                  ...editedSettings.privacy.profileVisibility,
                  [key]: !editedSettings.privacy.profileVisibility[key]
                })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  (isEditing ? editedSettings : settings).privacy.profileVisibility[key]
                    ? 'bg-accent' :'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    (isEditing ? editedSettings : settings).privacy.profileVisibility[key]
                      ? 'translate-x-6' :'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-primary mb-4">Data Sharing</h3>
        <div className="space-y-4">
          {Object.entries(settings.privacy.dataSharing).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-primary capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <p className="text-text-secondary text-sm">
                  {key === 'analytics' && 'Help improve our service with usage data'}
                  {key === 'personalization' && 'Use data to personalize your experience'}
                  {key === 'marketing' && 'Share data with partners for relevant ads'}
                </p>
              </div>
              <button
                onClick={() => updateSetting('privacy', 'dataSharing', {
                  ...editedSettings.privacy.dataSharing,
                  [key]: !editedSettings.privacy.dataSharing[key]
                })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  (isEditing ? editedSettings : settings).privacy.dataSharing[key]
                    ? 'bg-accent' :'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    (isEditing ? editedSettings : settings).privacy.dataSharing[key]
                      ? 'translate-x-6' :'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <div className="p-4 bg-background rounded-lg border border-border">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-primary">Password</h4>
            <p className="text-text-secondary text-sm">Last changed 3 months ago</p>
          </div>
          <Button variant="outline" size="sm">
            Change Password
          </Button>
        </div>
      </div>

      <div className="p-4 bg-background rounded-lg border border-border">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-primary">Two-Factor Authentication</h4>
            <p className="text-text-secondary text-sm">
              {settings.security.twoFactorEnabled ? 'Enabled' : 'Add an extra layer of security'}
            </p>
          </div>
          <Button 
            variant={settings.security.twoFactorEnabled ? "outline" : "primary"} 
            size="sm"
          >
            {settings.security.twoFactorEnabled ? 'Manage' : 'Enable'}
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-primary mb-4">Login Activity</h3>
        <div className="space-y-3">
          {settings.security.loginActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center">
                  <Icon name={activity.device === 'mobile' ? 'Smartphone' : 'Monitor'} size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-primary">{activity.location}</p>
                  <p className="text-text-secondary text-sm">{activity.device} • {activity.date}</p>
                </div>
              </div>
              {activity.current && (
                <span className="px-2 py-1 bg-success-50 text-success text-xs rounded-full font-medium">
                  Current
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-surface rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-primary">Account Settings</h2>
          <p className="text-text-secondary text-sm mt-1">
            Manage your account preferences and security
          </p>
        </div>
        {activeTab === 'personal' && (
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <Button variant="ghost" size="sm" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" onClick={handleSave}>
                  Save Changes
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                size="sm"
                iconName="Edit"
                iconPosition="left"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-300 ${
              activeTab === tab.id
                ? 'text-accent border-b-2 border-accent bg-accent-50' :'text-text-secondary hover:text-primary hover:bg-background'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'personal' && renderPersonalInfo()}
        {activeTab === 'notifications' && renderNotifications()}
        {activeTab === 'privacy' && renderPrivacy()}
        {activeTab === 'security' && renderSecurity()}
      </div>
    </div>
  );
};

export default AccountSettings;