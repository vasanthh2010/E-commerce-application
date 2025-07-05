import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-gradient-to-r from-brand-primary to-accent py-16 lg:py-24">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="Mail" size={24} className="text-white/80" />
            <span className="text-white/80 font-medium text-sm uppercase tracking-wider">
              Stay Connected
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-accent font-semibold text-white mb-6">
            Never Miss a Story
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            Get exclusive access to designer interviews, trend forecasts, and behind-the-scenes content delivered to your inbox weekly.
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="bg-white text-brand-primary hover:bg-white/90 whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
              
              <p className="text-white/70 text-sm mt-4">
                Join 50,000+ fashion enthusiasts. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Welcome to StyleHub Stories!</h3>
                  <p className="text-white/80">Check your inbox for a confirmation email.</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-center space-x-8 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-white/70 text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Weekly</div>
              <div className="text-white/70 text-sm">Stories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Exclusive</div>
              <div className="text-white/70 text-sm">Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;