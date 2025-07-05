import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ProductImageGallery from './components/ProductImageGallery';
import ProductInfo from './components/ProductInfo';
import ProductTabs from './components/ProductTabs';
import CompleteTheLook from './components/CompleteTheLook';
import CustomerReviews from './components/CustomerReviews';
import HowOthersStyled from './components/HowOthersStyled';
import RecentlyViewed from './components/RecentlyViewed';
import Icon from '../../components/AppIcon';

const IndividualProductExperience = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  // Mock product data
  const product = {
    id: "prod-001",
    name: "Sustainable Organic Cotton Oversized Blazer",
    brand: "EcoLux",
    price: 189.99,
    originalPrice: 249.99,
    discount: 24,
    rating: 4.7,
    reviewCount: 234,
    stockCount: 12,
    isNew: true,
    description: `Crafted from 100% organic cotton, this oversized blazer combines contemporary style with sustainable fashion. The relaxed fit and structured shoulders create a perfect balance between comfort and sophistication. Features include functional pockets, premium horn buttons, and a fully lined interior for year-round versatility.`,
    mainImage: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=800&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=800&fit=crop"
    ],
    colors: [
      { name: "Sage Green", hex: "#9CAF88" },
      { name: "Cream", hex: "#F5F5DC" },
      { name: "Charcoal", hex: "#36454F" }
    ],
    sizes: [
      { value: "XS", available: true },
      { value: "S", available: true },
      { value: "M", available: true },
      { value: "L", available: true },
      { value: "XL", available: false },
      { value: "XXL", available: true }
    ],
    material: "100% Organic Cotton",
    fit: "Oversized",
    origin: "Made in Portugal",
    styleCode: "EL-BLZ-001",
    features: [
      "Sustainable organic cotton fabric",
      "Fully lined interior",
      "Functional front pockets",
      "Premium horn buttons",
      "Structured shoulders",
      "Machine washable"
    ],
    sizeChart: [
      { size: "XS", chest: "32-34", waist: "24-26", length: "28" },
      { size: "S", chest: "34-36", waist: "26-28", length: "29" },
      { size: "M", chest: "36-38", waist: "28-30", length: "30" },
      { size: "L", chest: "38-40", waist: "30-32", length: "31" },
      { size: "XL", chest: "40-42", waist: "32-34", length: "32" },
      { size: "XXL", chest: "42-44", waist: "34-36", length: "33" }
    ],
    fitNotes: "This blazer is designed with an oversized fit. For a more fitted look, consider sizing down. The model is 5'8\" and wearing size S.",
    careInstructions: [
      "Machine wash cold with like colors",
      "Use mild detergent",
      "Tumble dry low or hang to dry",
      "Iron on medium heat if needed",
      "Professional dry cleaning recommended for best results"
    ],
    careTips: "To maintain the blazer's shape and extend its lifespan, hang it on padded hangers and allow it to air out between wears. Store in a breathable garment bag to prevent dust accumulation.",
    sustainabilityFeatures: [
      "Made from 100% organic cotton",
      "GOTS certified sustainable production",
      "Carbon-neutral shipping",
      "Recyclable packaging materials",
      "Fair trade manufacturing practices"
    ],
    certifications: ["GOTS Certified", "Fair Trade", "Carbon Neutral"]
  };

  // Mock recommendations data
  const recommendations = [
    {
      id: "rec-001",
      name: "High-Waisted Tailored Trousers",
      price: 89.99,
      originalPrice: 119.99,
      discount: 25,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
      rating: 4.5,
      reviewCount: 89,
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Navy", hex: "#000080" }
      ]
    },
    {
      id: "rec-002",
      name: "Silk Blend Camisole",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      rating: 4.8,
      reviewCount: 156,
      colors: [
        { name: "Ivory", hex: "#FFFFF0" },
        { name: "Blush", hex: "#DE5D83" }
      ]
    },
    {
      id: "rec-003",
      name: "Leather Crossbody Bag",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4.6,
      reviewCount: 203,
      colors: [
        { name: "Tan", hex: "#D2B48C" },
        { name: "Black", hex: "#000000" }
      ]
    }
  ];

  // Mock reviews data
  const reviews = [
    {
      id: "rev-001",
      name: "Sarah Johnson",
      username: "sarahj_style",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      date: "2024-01-15",
      verified: true,
      comment: `Absolutely love this blazer! The quality is exceptional and the fit is perfect for my body type. I'm 5'6" and the length hits just right. The organic cotton feels so soft and breathable. I've gotten so many compliments wearing this to work and casual outings.`,
      sizeInfo: {
        size: "M",fit: "Perfect",height: "5\'6\""
      },
      photos: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop"
      ],
      helpfulCount: 23,
      isLiked: false
    },
    {
      id: "rev-002",
      name: "Emily Chen",
      username: "emilyc_fashion",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 4,
      date: "2024-01-10",
      verified: true,
      comment: `Great blazer with excellent sustainability credentials. The oversized fit is very on-trend. Only minor issue is that it wrinkles easily, but that's expected with natural cotton. The color is beautiful and matches everything in my wardrobe.`,
      sizeInfo: {
        size: "S",
        fit: "Slightly loose",
        height: "5\'4\""
      },
      photos: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop"
      ],
      helpfulCount: 18,
      isLiked: true
    },
    {
      id: "rev-003",
      name: "Jessica Martinez",
      username: "jess_sustainable",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      date: "2024-01-05",
      verified: true,
      comment: `This blazer exceeded my expectations! As someone who prioritizes sustainable fashion, I'm thrilled with the quality and ethics behind this piece. The fit is flattering and the construction is top-notch. Will definitely be purchasing more from this brand.`,
      sizeInfo: {
        size: "L",
        fit: "Perfect",
        height: "5\'8\""
      },
      photos: [],
      helpfulCount: 31,
      isLiked: false
    }
  ];

  // Mock user styles data
  const userStyles = [
    {
      id: "style-001",
      user: {
        id: "user-001",
        name: "Alex Rivera",
        username: "alexr_style",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        isFollowing: false
      },
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
      caption: "Perfect for those important client meetings! Paired with my favorite trousers and heels.",
      likes: 127,
      comments: 23,
      isLiked: false,
      tags: ["workwear", "professional", "sustainable"],
      products: [
        {
          id: "prod-001",
          name: "Sustainable Organic Cotton Oversized Blazer",
          price: 189.99,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=100&fit=crop"
        }
      ]
    },
    {
      id: "style-002",
      user: {
        id: "user-002",
        name: "Maya Patel",
        username: "maya_minimalist",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        isFollowing: true
      },
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      caption: "Casual Friday vibes with this amazing blazer over a simple tee and jeans.",
      likes: 89,
      comments: 15,
      isLiked: true,
      tags: ["casual", "friday", "comfortable"],
      products: [
        {
          id: "prod-001",
          name: "Sustainable Organic Cotton Oversized Blazer",
          price: 189.99,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=100&fit=crop"
        }
      ]
    },
    {
      id: "style-003",
      user: {
        id: "user-003",
        name: "Sophie Williams",
        username: "sophie_chic",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        isFollowing: false
      },
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
      caption: "Date night ready! This blazer transforms any outfit into something special.",
      likes: 156,
      comments: 31,
      isLiked: false,
      tags: ["datenight", "elegant", "versatile"],
      products: [
        {
          id: "prod-001",
          name: "Sustainable Organic Cotton Oversized Blazer",
          price: 189.99,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=100&fit=crop"
        }
      ]
    },
    {
      id: "style-004",
      user: {
        id: "user-004",
        name: "Zoe Thompson",
        username: "zoe_ecofashion",
        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        isFollowing: true
      },
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      caption: "Love supporting sustainable brands! This blazer is a wardrobe staple.",
      likes: 203,
      comments: 45,
      isLiked: true,
      tags: ["sustainable", "ecofriendly", "staple"],
      products: [
        {
          id: "prod-001",
          name: "Sustainable Organic Cotton Oversized Blazer",
          price: 189.99,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=100&fit=crop"
        }
      ]
    }
  ];

  // Mock recently viewed products
  const recentlyViewed = [
    {
      id: "recent-001",
      name: "Merino Wool Sweater",
      price: 129.99,
      originalPrice: 159.99,
      discount: 19,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
      rating: 4.6,
      reviewCount: 145,
      isNew: false,
      isWishlisted: true,
      colors: [
        { name: "Cream", hex: "#F5F5DC" },
        { name: "Navy", hex: "#000080" }
      ],
      availableSizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: "recent-002",
      name: "Denim Wide-Leg Jeans",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop",
      rating: 4.4,
      reviewCount: 89,
      isNew: true,
      isWishlisted: false,
      colors: [
        { name: "Light Blue", hex: "#ADD8E6" },
        { name: "Dark Blue", hex: "#00008B" }
      ],
      availableSizes: ["26", "27", "28", "29", "30", "31", "32"]
    },
    {
      id: "recent-003",
      name: "Silk Scarf",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      rating: 4.8,
      reviewCount: 67,
      isNew: false,
      isWishlisted: true,
      colors: [
        { name: "Floral", hex: "#FFB6C1" },
        { name: "Geometric", hex: "#DDA0DD" }
      ]
    },
    {
      id: "recent-004",
      name: "Leather Ankle Boots",
      price: 199.99,
      originalPrice: 249.99,
      discount: 20,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      rating: 4.7,
      reviewCount: 234,
      isNew: false,
      isWishlisted: false,
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Brown", hex: "#8B4513" }
      ],
      availableSizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsSticky(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="pt-20 pb-4 bg-surface border-b border-border">
        <div className="container-max section-padding">
          <nav className="flex items-center space-x-2 text-sm">
            <a href="/homepage" className="text-text-secondary hover:text-primary transition-colors duration-300">
              Home
            </a>
            <Icon name="ChevronRight" size={14} className="text-text-muted" />
            <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-300">
              Women
            </a>
            <Icon name="ChevronRight" size={14} className="text-text-muted" />
            <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-300">
              Blazers
            </a>
            <Icon name="ChevronRight" size={14} className="text-text-muted" />
            <span className="text-primary font-medium">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="container-max section-padding py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Product Images */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductImageGallery product={product} />
          </div>

          {/* Product Information */}
          <div>
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-12">
          <ProductTabs product={product} />
        </div>

        {/* Complete the Look */}
        <div className="mb-12">
          <CompleteTheLook recommendations={recommendations} />
        </div>

        {/* Customer Reviews */}
        <div className="mb-12">
          <CustomerReviews 
            reviews={reviews} 
            averageRating={product.rating} 
            totalReviews={product.reviewCount} 
          />
        </div>

        {/* How Others Styled It */}
        <div className="mb-12">
          <HowOthersStyled userStyles={userStyles} />
        </div>

        {/* Recently Viewed */}
        <div className="mb-12">
          <RecentlyViewed products={recentlyViewed} />
        </div>
      </div>

      {/* Sticky Add to Cart (Mobile) */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-surface border-t border-border p-4 lg:hidden transition-all duration-300 z-40 ${
          isSticky ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-background rounded overflow-hidden">
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-primary text-sm line-clamp-1">
                  {product.name}
                </p>
                <p className="text-sm text-text-secondary">
                  ${product.price}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-3 text-text-secondary hover:text-primary transition-colors duration-300">
              <Icon name="Heart" size={20} />
            </button>
            <button className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-600 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Footer Spacer for Mobile Sticky Bar */}
      <div className="h-20 lg:hidden" />
    </div>
  );
};

export default IndividualProductExperience;