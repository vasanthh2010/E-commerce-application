import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const TrendReportSection = () => {
  const trendReports = [
    {
      id: 1,
      title: "Spring 2024 Color Forecast",
      subtitle: "Vibrant Optimism Meets Earthy Grounding",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["Color Trends", "Spring 2024", "Forecasting"],
      featured: true
    },
    {
      id: 2,
      title: "Sustainable Luxury Materials",
      subtitle: "Innovation in Eco-Conscious Fashion",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "March 10, 2024",
      readTime: "12 min read",
      tags: ["Sustainability", "Materials", "Innovation"]
    },
    {
      id: 3,
      title: "Digital Fashion Week Highlights",
      subtitle: "Key Takeaways from Global Runways",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "March 5, 2024",
      readTime: "15 min read",
      tags: ["Fashion Week", "Trends", "Analysis"]
    }
  ];

  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="TrendingUp" size={24} className="text-conversion-accent" />
            <span className="text-conversion-accent font-medium text-sm uppercase tracking-wider">
              Trend Intelligence
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-accent font-semibold text-primary mb-6">
            Fashion Forecasting & Analysis
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our expert trend analysis, seasonal forecasts, and style intelligence reports curated by fashion industry insiders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trendReports.map((report, index) => (
            <article 
              key={report.id} 
              className={`product-card group cursor-pointer ${
                report.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <div className={`${report.featured ? 'h-80 lg:h-96' : 'h-64'} relative`}>
                  <Image
                    src={report.image}
                    alt={report.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-conversion-accent text-white">
                      Trend Report
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 text-white/80">
                      <Icon name="Clock" size={14} />
                      <span className="text-xs">{report.readTime}</span>
                    </div>
                  </div>
                  
                  {report.featured && (
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-2">
                        {report.title}
                      </h3>
                      <p className="text-white/90 text-lg mb-4">
                        {report.subtitle}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-sm">{report.date}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          iconName="ArrowRight"
                          iconPosition="right"
                          className="text-white hover:bg-white/10"
                        >
                          Read Report
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                
                {!report.featured && (
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {report.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs px-2 py-1 bg-accent-50 text-accent rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                      {report.title}
                    </h3>
                    
                    <p className="text-text-secondary text-sm mb-4">
                      {report.subtitle}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary text-xs">{report.date}</span>
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
                )}
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="Archive"
            iconPosition="left"
            className="cta-button"
          >
            View All Reports
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendReportSection;