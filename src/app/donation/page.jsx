"use client";

import React from 'react';
import Image from 'next/image';
import { HeartIcon, HandRaisedIcon, GlobeAsiaAustraliaIcon, AcademicCapIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function DonationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HeartIcon className="mx-auto h-16 w-16 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Support us
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Help us spread holistic well-being, mental peace, and inner empowerment to communities worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why should we donate to yoga charity?
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Donating to a yoga charity supports more than just physical postures — it helps spread holistic well-being, 
            mental peace, and inner empowerment to communities that may otherwise never access it. Here are key reasons 
            why supporting yoga charities matters:
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Reason 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
            <div className="flex items-center mb-4">
              <UserGroupIcon className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">
                Promotes Holistic Health in Underserved Communities
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Many yoga charities work with:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Underprivileged children</li>
              <li>Elderly people</li>
              <li>Rural women</li>
              <li>Refugees or trauma survivors</li>
            </ul>
            <p className="text-gray-700">
              They offer free yoga classes, stress relief workshops, and emotional healing tools where mental healthcare is scarce.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
            <div className="flex items-center mb-4">
              <GlobeAsiaAustraliaIcon className="h-8 w-8 text-amber-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">
                Preserves and Promotes Ancient Indian Wisdom
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Yoga is a profound part of Bharatiya parampara (Indian tradition). Supporting yoga charities helps:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Revive authentic yogic teachings</li>
              <li>Preserve traditional practices like Patanjali Yoga, Bhakti Yoga, and Ayurveda-based approaches</li>
              <li>Prevent commercialization or dilution of ancient knowledge</li>
            </ul>
          </div>

          {/* Reason 3 */}          <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
            <div className="flex items-center mb-4">
              <SparklesIcon className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">
                Mental Health Support Beyond Medicine
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Yoga, pranayama, and meditation are proven to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Reduce anxiety, depression, and trauma</li>
              <li>Improve concentration and sleep</li>
            </ul>
            <p className="text-gray-700">
              Charities bring these non-invasive, side-effect-free methods to those who cannot afford therapy or medication.
            </p>
          </div>

          {/* Reason 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
            <div className="flex items-center mb-4">
              <AcademicCapIcon className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">
                Education Through Yoga
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Many yoga charities integrate yoga into schools, teaching children:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Discipline and self-control</li>
              <li>Mindfulness and focus</li>
              <li>Non-violence (ahimsa) and ethical living (yamas & niyamas)</li>
            </ul>
            <p className="text-gray-700">
              This creates mentally resilient, value-based future generations.
            </p>
          </div>

          {/* Reason 5 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
            <div className="flex items-center mb-4">
              <HandRaisedIcon className="h-8 w-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">
                Seva (Selfless Service) and Karma Yoga in Action
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Giving to yoga charities is itself an act of karma yoga — offering your energy or wealth for the welfare of others without expecting returns. It's:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>A form of spiritual growth</li>
              <li>A way to create positive karmic impact</li>
              <li>A living expression of "Lokah Samastah Sukhino Bhavantu" — may all beings be happy and free</li>
            </ul>
          </div>

          {/* Reason 6 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
            <div className="flex items-center mb-4">
              <GlobeAsiaAustraliaIcon className="h-8 w-8 text-teal-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">
                Sustainable Peace and Global Well-being
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              By making yoga accessible, we plant seeds of inner peace, which naturally ripple into social harmony. Yoga charities often serve:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>In prisons (rehabilitation)</li>
              <li>Conflict zones (post-trauma recovery)</li>
              <li>Natural disaster areas (emotional resilience)</li>
            </ul>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Summary</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Donating to yoga charities means giving others the tools for self-transformation. It is not just a donation — 
              it's an investment in a healthier, more peaceful, and more conscious world.
            </p>
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Make a Donation</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bank Transfer Option */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-full">
              <h4 className="text-lg font-medium text-gray-800 mb-4">
                <div className="flex flex-wrap items-center">
                  <svg className="flex-shrink-0 w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="whitespace-normal">Pay directly to the bank</span>
                </div>
              </h4>
              <div className="space-y-3 text-gray-700">
                <p className="font-medium">Holistic YOG Foundation</p>                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <span className="text-gray-500">Account No.:</span>
                    <span className="font-mono text-sm break-all">120100000190911</span>
                    
                    <span className="text-gray-500">IFSC:</span>
                    <span className="font-mono break-all">TJSB0000058</span>
                    
                    <span className="text-gray-500">MICR Code:</span>
                    <span className="font-mono break-all">400109030</span>
                    
                    <span className="text-gray-500">Bank Name:</span>
                    <span className="font-mono break-all">TJSB SAHAKARI BANK LTD</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* UPI Payment Option */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Pay via UPI using QR Code
              </h4>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4 flex justify-center w-full">
                  <div className="relative w-full max-w-[280px]">
                    <Image 
                      src="/images/QR Code.jpg" 
                      alt="UPI QR Code" 
                      width={280}
                      height={280}
                      className="rounded w-full h-auto"
                      priority
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center">Scan the QR code using any UPI app to make payment</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Every donation, no matter the size, makes a meaningful difference in someone's life. 
              Thank you for supporting our mission to spread yoga and well-being to all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
