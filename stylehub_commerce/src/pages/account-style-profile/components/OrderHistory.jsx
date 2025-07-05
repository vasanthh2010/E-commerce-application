import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OrderHistory = ({ orders }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [expandedOrder, setExpandedOrder] = useState(null);

  const filterOptions = [
    { id: 'all', name: 'All Orders', count: orders.length },
    { id: 'delivered', name: 'Delivered', count: orders.filter(o => o.status === 'delivered').length },
    { id: 'processing', name: 'Processing', count: orders.filter(o => o.status === 'processing').length },
    { id: 'shipped', name: 'Shipped', count: orders.filter(o => o.status === 'shipped').length }
  ];

  const filteredOrders = selectedFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === selectedFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'text-success bg-success-50 border-success/20';
      case 'shipped': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'processing': return 'text-warning bg-warning-50 border-warning/20';
      case 'cancelled': return 'text-error bg-error-50 border-error/20';
      default: return 'text-text-secondary bg-background border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered': return 'CheckCircle';
      case 'shipped': return 'Truck';
      case 'processing': return 'Clock';
      case 'cancelled': return 'XCircle';
      default: return 'Package';
    }
  };

  const toggleOrderExpansion = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="bg-surface rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-primary">Order History</h2>
          <p className="text-text-secondary text-sm mt-1">
            Track your purchases and manage returns
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          iconName="Download"
          iconPosition="left"
        >
          Export
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-border">
        {filterOptions.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-300 ${
              selectedFilter === filter.id
                ? 'text-accent border-b-2 border-accent bg-accent-50' :'text-text-secondary hover:text-primary hover:bg-background'
            }`}
          >
            {filter.name}
            <span className="ml-2 px-2 py-0.5 bg-background rounded-full text-xs">
              {filter.count}
            </span>
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-4 bg-background">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="font-semibold text-primary">Order #{order.orderNumber}</h3>
                    <p className="text-text-secondary text-sm">{order.date}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                    <Icon name={getStatusIcon(order.status)} size={14} className="inline mr-1" />
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-semibold text-primary">${order.total}</div>
                    <div className="text-text-secondary text-sm">{order.items.length} items</div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName={expandedOrder === order.id ? "ChevronUp" : "ChevronDown"}
                    onClick={() => toggleOrderExpansion(order.id)}
                  />
                </div>
              </div>
            </div>

            {expandedOrder === order.id && (
              <div className="p-4 border-t border-border">
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-background">
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-primary">{item.name}</h4>
                        <p className="text-text-secondary text-sm">
                          Size: {item.size} • Color: {item.color}
                        </p>
                        <p className="text-text-secondary text-sm">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-primary">${item.price}</div>
                        {order.status === 'delivered' && (
                          <Button
                            variant="ghost"
                            size="xs"
                            iconName="MessageSquare"
                            iconPosition="left"
                            className="mt-1"
                          >
                            Review
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-text-secondary text-sm">
                    <Icon name="Truck" size={16} />
                    <span>Tracking: {order.trackingNumber}</span>
                  </div>
                  <div className="flex gap-2">
                    {order.status === 'delivered' && (
                      <Button variant="outline" size="sm" iconName="RotateCcw" iconPosition="left">
                        Return
                      </Button>
                    )}
                    <Button variant="outline" size="sm" iconName="Eye" iconPosition="left">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Package" size={48} className="text-text-muted mx-auto mb-4" />
          <h3 className="text-lg font-medium text-primary mb-2">No orders found</h3>
          <p className="text-text-secondary mb-4">
            {selectedFilter === 'all' ? "You haven't placed any orders yet." 
              : `No ${selectedFilter} orders found.`}
          </p>
          <Button variant="primary" iconName="ShoppingBag" iconPosition="left">
            Start Shopping
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;