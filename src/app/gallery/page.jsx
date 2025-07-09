"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, PlayIcon } from '@heroicons/react/24/outline';

// Event-wise gallery data
const galleryEvents = [
  {
    id: 1,
    title: "Yoga Workshop 2024",
    coverImage: "/images/gallery/image1.jpg",
    media: [
      { id: 1, src: '/images/gallery/image1.jpg', alt: 'Workshop Session 1', type: 'image' },
      { id: 2, src: '/images/gallery/image2.jpg', alt: 'Workshop Session 2', type: 'image' },
      { id: 3, src: '/images/gallery/image3.jpg', alt: 'Workshop Session 3', type: 'image' },
      { id: 4, src: '/images/gallery/image4.jpg', alt: 'Workshop Session 4', type: 'image' },
      { id: 5, src: '/images/gallery/image5.jpg', alt: 'Yoga Day Celebration 1', type: 'image' },
      { id: 6, src: '/images/gallery/image6.jpg', alt: 'Yoga Day Celebration 2', type: 'image' },
    ]
  },
  {
    id: 2,
    title: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"',
    coverImage: "/images/gallery/national-conference/1.JPG",
    media: [
      { id: 1, src: '/images/gallery/national-conference/1.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 2, src: '/images/gallery/national-conference/2.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 3, src: '/images/gallery/national-conference/3.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 4, src: '/images/gallery/national-conference/4.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 5, src: '/images/gallery/national-conference/5.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 6, src: '/images/gallery/national-conference/6.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 7, src: '/images/gallery/national-conference/7.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 8, src: '/images/gallery/national-conference/8.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 9, src: '/images/gallery/national-conference/9.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 10, src: '/images/gallery/national-conference/10.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 11, src: '/images/gallery/national-conference/11.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 12, src: '/images/gallery/national-conference/12.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 13, src: '/images/gallery/national-conference/13.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 14, src: '/images/gallery/national-conference/14.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 15, src: '/images/gallery/national-conference/15.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 16, src: '/images/gallery/national-conference/16.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 17, src: '/images/gallery/national-conference/17.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 18, src: '/images/gallery/national-conference/18.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 19, src: '/images/gallery/national-conference/19.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 20, src: '/images/gallery/national-conference/20.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 21, src: '/images/gallery/national-conference/21.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 22, src: '/images/gallery/national-conference/22.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 23, src: '/images/gallery/national-conference/23.JPG', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 24, src: '/images/gallery/national-conference/24.jpg', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 25, src: '/images/gallery/national-conference/25.jpg', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 26, src: '/images/gallery/national-conference/26.jpg', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 27, src: '/images/gallery/national-conference/27.jpg', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 28, src: '/images/gallery/national-conference/28.jpg', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 29, src: '/images/gallery/national-conference/29.jpg', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 30, src: '/images/gallery/national-conference/30.jpg', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 31, src: '/images/gallery/national-conference/31.jpg', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 32, src: '/images/gallery/national-conference/32.jpg', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 33, src: '/images/gallery/national-conference/33.jpg', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 34, src: '/images/gallery/national-conference/34.jpg', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 35, src: '/images/gallery/national-conference/35.jpg', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 36, src: '/images/gallery/national-conference/36.jpg', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 37, src: '/images/gallery/national-conference/37.jpg', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
      { id: 38, src: '/images/gallery/national-conference/38.jpg', alt: 'One Day National Conference on "Yoga, Sports, and Well-being: A Holistic Approach"', type: 'image' },
    ]
  },
];

const GalleryPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [autoPlayInterval, setAutoPlayInterval] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const openEventGallery = (event) => {
    setSelectedEvent(event);
    setCurrentMediaIndex(0);
    setProgress(0);
    setIsTransitioning(false);
  };

  const closeEventGallery = () => {
    setSelectedEvent(null);
    setCurrentMediaIndex(0);
    setProgress(0);
    setIsTransitioning(false);
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      setAutoPlayInterval(null);
    }
  };

  const nextMedia = () => {
    if (selectedEvent && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentMediaIndex((prevIndex) => 
          prevIndex === selectedEvent.media.length - 1 ? 0 : prevIndex + 1
        );
        setProgress(0);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const prevMedia = () => {
    if (selectedEvent && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentMediaIndex((prevIndex) => 
          prevIndex === 0 ? selectedEvent.media.length - 1 : prevIndex - 1
        );
        setProgress(0);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const goToMedia = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentMediaIndex(index);
        setProgress(0);
        setIsTransitioning(false);
      }, 150);
    }
  };

  // Auto-scroll functionality with progress
  useEffect(() => {
    if (selectedEvent && !isTransitioning) {
      const progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            nextMedia();
            return 0;
          }
          return prevProgress + (100 / 40); // 40 steps over 4 seconds
        });
      }, 100); // Update every 100ms
      
      setAutoPlayInterval(progressInterval);
      
      return () => {
        clearInterval(progressInterval);
      };
    } else if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      setAutoPlayInterval(null);
    }
  }, [selectedEvent, currentMediaIndex, isTransitioning]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF8F3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore moments from our yoga sessions, workshops, and community events organized by categories.
          </p>
        </div>

        {/* Event Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryEvents.map((event) => (
            <div 
              key={event.id}
              onClick={() => openEventGallery(event)}
              className="group cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Stacked Images Effect */}
              <div className="relative">
                {/* Bottom stack layer */}
                <div className="absolute top-2 left-2 w-full h-48 bg-gray-300 rounded-xl shadow-md transform rotate-2"></div>
                {/* Middle stack layer */}
                <div className="absolute top-1 left-1 w-full h-48 bg-gray-200 rounded-xl shadow-md transform -rotate-1"></div>
                {/* Top main image */}
                <div className="relative w-full h-48 bg-white rounded-xl shadow-lg border border-gray-200 hover:border-orange-300 transition-all duration-300 overflow-hidden">
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Stack indicator */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                    {event.media.length} items
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <div className="mt-4 px-2">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors text-center">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Event Gallery */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 backdrop-blur-md bg-black/30 flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl mx-auto">
              {/* Header */}
              <div className="flex justify-between items-center mb-4 text-white">
                <div>
                  <h2 className="text-2xl font-bold drop-shadow-lg">{selectedEvent.title}</h2>
                </div>
                <button 
                  onClick={closeEventGallery}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Main Media Display */}
              <div 
                className="relative bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden mb-4 border border-white/20" 
                style={{ height: '60vh' }}
              >
                {/* Slideshow Container */}
                <div className="relative w-full h-full">
                  {selectedEvent.media.map((media, index) => (
                    <div
                      key={media.id}
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                        index === currentMediaIndex
                          ? 'opacity-100 scale-100 translate-x-0'
                          : index < currentMediaIndex
                          ? 'opacity-0 scale-95 -translate-x-full'
                          : 'opacity-0 scale-95 translate-x-full'
                      }`}
                    >
                      {media.type === 'image' ? (
                        <Image
                          src={media.src}
                          alt={media.alt}
                          fill
                          className="object-contain"
                          sizes="90vw"
                          priority={index === currentMediaIndex}
                        />
                      ) : (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <video
                            src={media.src}
                            controls
                            className="max-w-full max-h-full"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                {selectedEvent.media.length > 1 && (
                  <>
                    <button 
                      onClick={prevMedia}
                      disabled={isTransitioning}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 border border-white/20 disabled:opacity-50 z-10"
                    >
                      <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={nextMedia}
                      disabled={isTransitioning}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 border border-white/20 disabled:opacity-50 z-10"
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Media Counter with Progress */}
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/20 mb-2">
                    {currentMediaIndex + 1} / {selectedEvent.media.length}
                  </div>
                  <div className="w-32 bg-white/20 rounded-full h-1 overflow-hidden">
                    <div 
                      className="bg-orange-400 h-1 transition-all duration-100 ease-linear" 
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {selectedEvent.media.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToMedia(index)}
                      disabled={isTransitioning}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentMediaIndex
                          ? 'bg-orange-400 scale-125'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {selectedEvent.media.map((media, index) => (
                  <div
                    key={media.id}
                    onClick={() => goToMedia(index)}
                    className={`relative flex-shrink-0 w-20 h-20 cursor-pointer rounded-lg overflow-hidden border-2 transition-all backdrop-blur-sm ${
                      index === currentMediaIndex 
                        ? 'border-orange-400 scale-105 shadow-lg' 
                        : 'border-white/30 hover:border-orange-300'
                    }`}
                  >
                    {media.type === 'image' ? (
                      <Image
                        src={media.src}
                        alt={media.alt}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center">
                        <PlayIcon className="w-8 h-8 text-white" />
                      </div>
                    )}
                    {media.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                        <PlayIcon className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
