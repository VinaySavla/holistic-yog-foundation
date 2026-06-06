"use client";

import React, { useEffect, useState } from 'react';
import { 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon, 
  BoltIcon,
  MegaphoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';


// Default event data
const defaultEvent = {
  title: "International Day of Yoga 2026",
  description: "Join us for a transformative experience exploring the ancient wisdom of yoga, sports and its modern applications for holistic well-being.",
  date: "June 21, 2026",
  time: "All Day",
  venue: "Holy Faith School, 90 Feet Road, Kachore, Kalyan East"
};

const bannerImages = [
  {
    src: "/images/conference/InternationalYogaDay2026.png",
    alt: "International Day of Yoga 2026 banner",
  },
  {
    src: "/images/conference/banner21jun20262.jpeg",
    alt: "International Day of Yoga 2026 alternate banner",
  },
];

const BannerSection = ({
  title = "Upcoming",
  subtitle = "Stay informed. Stay connected. Be a part of our next big gathering.",
  event = defaultEvent,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % bannerImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#FDF7F2] rounded-lg p-8">
      {/* Full-screen image viewer */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative flex h-full w-full max-w-6xl items-center justify-center">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-0 top-0 z-10 rounded-full bg-white/90 p-3 text-gray-700 shadow-lg transition-colors hover:text-black"
              aria-label="Close full-screen image viewer"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <div className="max-h-[90vh] w-full overflow-hidden rounded-2xl bg-white shadow-2xl">
              <img
                src={bannerImages[activeImageIndex].src}
                alt={bannerImages[activeImageIndex].alt}
                className="h-[90vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-2">
          <MegaphoneIcon className="w-6 h-6 text-blue-500 mr-2" />
          <h2 className="text-2xl font-bold text-black">{title}</h2>
        </div>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      
      <div className="bg-blue-100 rounded-xl p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Event Image */}
          <div className="md:w-2/5">
            <div
              className="group relative h-48 cursor-pointer overflow-hidden rounded-lg bg-gray-200 md:h-full"
              onClick={() => setIsModalOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setIsModalOpen(true);
                }
              }}
            >
              {bannerImages.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 h-full w-full object-contain transition-all duration-700 ease-in-out ${
                    index === activeImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-3 py-2 text-white">
                <span className="text-xs font-medium uppercase tracking-[0.2em]">Tap to view full screen</span>
                <span className="text-xs font-medium">{activeImageIndex + 1}/{bannerImages.length}</span>
              </div>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {bannerImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setActiveImageIndex(index);
                    }}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      index === activeImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Show banner image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Event Details */}
          <div className="md:w-3/5">
            <div className="flex items-start mb-4">
              <div className="bg-white p-2 rounded-lg mr-3">
                <BoltIcon className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
            </div>
            
            <div className="ml-10 mb-6">
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <p className="text-gray-700">{event.description}</p>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3 ml-10">
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 text-blue-500 mr-3" />
                <p className="text-gray-700">Date: <span className="font-medium">{event.date}</span></p>
              </div>
              
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 text-blue-500 mr-3" />
                <p className="text-gray-700">Time: <span className="font-medium">{event.time}</span></p>
              </div>
              
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 text-blue-500 mr-3" />
                <p className="text-gray-700">Venue: <span className="font-medium">{event.venue}</span></p>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                {/* <Link href="https://docs.google.com/forms/d/e/1FAIpQLScYVhWJ5s0hwffZE57OALRwqVFOuxxhCRxc5xraTBhe_yqF2Q/viewform" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
                    Register Now
                  </button>
                </Link> */}
                {/* <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white flex-1 flex items-center justify-center gap-2 border border-orange-500 font-medium py-2 px-6 rounded-full transition-colors"
                >
                  <DocumentTextIcon className="w-5 h-5" />
                  View Details
                </button> */}
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;