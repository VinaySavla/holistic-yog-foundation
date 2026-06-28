"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  CreditCardIcon,
  MagnifyingGlassPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const defaultPlans = [
  {
    id: 'annual',
    title: 'Annual Membership',
    image: '/images/membership/AnnualMemberBenefits.jpeg',
    alt: 'Benefits and fee structure for Annual Membership',
    indianPrice: '₹1,100',
    internationalPrice: 'USD 50',
    duration: 'per year',
    badge: 'Renewed yearly',
  },
  {
    id: 'life',
    title: 'Life Membership',
    image: '/images/membership/LifeMemberBenefits.jpeg',
    alt: 'Benefits and fee structure for Life Membership',
    indianPrice: '₹5,000',
    internationalPrice: 'USD 150',
    duration: 'one-time payment',
    badge: 'Lifelong affiliation',
  },
];

const MembershipSection = ({
  title = 'Choose Your Membership',
  description = 'Become part of a community devoted to yoga, holistic health, personal growth, and the universal values of yoga.',
  plans = defaultPlans,
}) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    if (!selectedPlan) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedPlan(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPlan]);

  return (
    <section className="rounded-2xl bg-[#fdf7f2] px-4 py-8 sm:px-8 sm:py-10">
      {selectedPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedPlan.title} benefits`}
          onClick={() => setSelectedPlan(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedPlan(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white p-2.5 text-gray-800 shadow-lg transition hover:bg-orange-50 sm:right-6 sm:top-6"
            aria-label="Close membership details"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <img
            src={selectedPlan.image}
            alt={selectedPlan.alt}
            className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      <div className="mx-auto mb-8 max-w-3xl text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <CreditCardIcon className="h-7 w-7 text-orange-500" />
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h2>
        </div>
        <p className="text-sm leading-6 text-gray-600 sm:text-base">{description}</p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <button
              type="button"
              onClick={() => setSelectedPlan(plan)}
              className="group relative block w-full overflow-hidden bg-[#f8f4ed] text-left"
              aria-label={`View full ${plan.title} benefits`}
            >
              <img
                src={plan.image}
                alt={plan.alt}
                className="aspect-[2/3] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-4 pb-4 pt-14 text-sm font-semibold text-white">
                <MagnifyingGlassPlusIcon className="h-5 w-5" />
                View all benefits
              </span>
            </button>

            <div className="p-5 sm:p-6">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-[#0a438b]">{plan.title}</h3>
                  <p className="mt-1 text-sm font-medium text-orange-600">{plan.badge}</p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0a438b]">
                  {plan.duration}
                </span>
              </div>

              <div className="mb-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-orange-50 p-3">
                  <p className="text-xs font-medium text-gray-500">Indian applicants</p>
                  <p className="mt-1 text-lg font-bold text-gray-900">{plan.indianPrice}</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-3">
                  <p className="text-xs font-medium text-gray-500">International</p>
                  <p className="mt-1 text-lg font-bold text-gray-900">{plan.internationalPrice}</p>
                </div>
              </div>

              <Link
                href="/membershipform"
                className="block w-full rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Apply for {plan.title}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MembershipSection;
