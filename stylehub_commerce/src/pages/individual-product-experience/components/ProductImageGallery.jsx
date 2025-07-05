import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProductImageGallery = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const images = [
    product.mainImage,
    ...product.additionalImages
  ];

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative bg-surface rounded-lg overflow-hidden aspect-square">
        <Image
          src={images[selectedImageIndex]}
          alt={`${product.name} - View ${selectedImageIndex + 1}`}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105"
            >
              <Icon name="ChevronLeft" size={20} className="text-primary" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105"
            >
              <Icon name="ChevronRight" size={20} className="text-primary" />
            </button>
          </>
        )}

        {/* 360° View Badge */}
        <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
          <Icon name="RotateCcw" size={14} />
          <span>360° View</span>
        </div>

        {/* Zoom Indicator */}
        <div className="absolute top-4 right-4 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
          <Icon name={isZoomed ? "ZoomOut" : "ZoomIn"} size={14} />
          <span>{isZoomed ? "Zoom Out" : "Zoom In"}</span>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              selectedImageIndex === index
                ? 'border-accent shadow-md'
                : 'border-border hover:border-primary'
            }`}
          >
            <Image
              src={image}
              alt={`${product.name} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Image Counter */}
      <div className="text-center text-sm text-text-secondary">
        {selectedImageIndex + 1} of {images.length}
      </div>
    </div>
  );
};

export default ProductImageGallery;