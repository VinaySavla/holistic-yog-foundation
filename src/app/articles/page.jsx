'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ArticlesPage() {
    // Articles data using the available PDFs
    const articles = [
    {
        id: 1,
        title: 'Integrating AI and Yogic Sciences: A Data-Driven Approach to Well-Being',
        author: 'Dr. Balwant Singh (India)',
        pdfUrl: '/pdfs/Articles/1.pdf',
        excerpt: 'An exploration of how artificial intelligence can be combined with yogic sciences to promote data-driven well-being.'
    },
    {
        id: 2,
        title: 'AI and Big Data in Yogic Sciences: Transforming Technology for Holistic Well-being',
        author: 'Dr. Nilesh Bansode (India)',
        pdfUrl: '/pdfs/Articles/2.pdf',
        excerpt: 'Examines the role of AI and big data in enhancing yogic practices and their impact on holistic health.'
    },
    {
        id: 3,
        title: 'Integrating Yoga into Peace Education: A Pathway to Reconciliation and Social Cohesion in Sri Lanka',
        author: 'Dr. Sivanesan Sabaananth (Sri Lanka)',
        pdfUrl: '/pdfs/Articles/3.pdf',
        excerpt: 'Discusses yoga as a transformative tool for reconciliation and peace education in post-conflict Sri Lanka.'
    },
    {
        id: 4,
        title: 'The Role of Yoga in Managing Sciatica',
        author: 'Dr. Rashmita Sabat (India)',
        pdfUrl: '/pdfs/Articles/4.pdf',
        excerpt: 'Explores how yoga can help manage sciatica pain through specific poses and therapeutic breathing.'
    },
    {
        id: 5,
        title: 'Managing Cervical Spondylitis with Naturopathy and Yogic Practices',
        author: 'Dr. Balwant Singh (India)',
        pdfUrl: '/pdfs/Articles/5.pdf',
        excerpt: 'Blends yogic postures and naturopathic remedies for effective management of cervical spondylitis.'
    },
    {
        id: 6,
        title: 'The Impact of Sattvic Diet on Students: An Indian Perspective',
        author: 'Dr. Yadnyeshwar Bagrao (India)',
        pdfUrl: '/pdfs/Articles/6.pdf',
        excerpt: 'Highlights how sattvic dietary principles affect students’ health, behavior, and academic performance.'
    },
    {
        id: 7,
        title: 'The Modern Face of Meditation in Vietnam',
        author: 'Ms. Ho Thi Thanh Minh (Vietnam)',
        pdfUrl: '/pdfs/Articles/7.pdf',
        excerpt: 'Looks into contemporary meditation practices and their cultural evolution in Vietnam.'
    },
    {
        id: 8,
        title: 'Yogic Approaches to Reduce Examination Stress in School Children',
        author: 'Dr. Suchita Dhamale (India)',
        pdfUrl: '/pdfs/Articles/8.pdf',
        excerpt: 'Presents yoga-based interventions to help students manage academic stress and anxiety.'
    },
    {
        id: 9,
        title: 'Yoga and Meditation in Mauritius: Tradition, Transformation, and Trends',
        author: 'Ms. Rajdevi Dhurn Reejane (Mauritius)',
        pdfUrl: '/pdfs/Articles/9.pdf',
        excerpt: 'Explores the evolving landscape of yoga and meditation practices in Mauritius.'
    },
    {
        id: 10,
        title: 'How to Stay Healthy in the Monsoon Season the Ayurvedic Way',
        author: 'Dr. Balwant Singh (India)',
        pdfUrl: '/pdfs/Articles/10.pdf',
        excerpt: 'Ayurvedic guidelines for maintaining health and immunity during the monsoon season.'
    },
    {
        id: 11,
        title: 'Yoga for Resilience and Vitality during the Monsoon',
        author: 'Dr. Nilesh Bansode (India)',
        pdfUrl: '/pdfs/Articles/11.pdf',
        excerpt: 'Discusses yoga practices that build immunity, strength, and mental clarity during monsoon.'
    },
    {
        id: 12,
        title: 'Yoga and Nonviolence: Gandhian Values in Contemporary Peace Education for Indian Youth',
        author: 'Dr. Deepak Singh Patial (India)',
        pdfUrl: '/pdfs/Articles/12.pdf',
        excerpt: 'Analyzes the relevance of Gandhian philosophy and yoga in today’s peace education landscape.'
    },
    {
        id: 13,
        title: 'Yoga in School and University Curricula: Nurturing Holistic Education for a Balanced Future',
        author: 'Dr. Sanjaykumar Pal (India)',
        pdfUrl: '/pdfs/Articles/13.pdf',
        excerpt: 'Analyzes the relevance of Gandhian philosophy and yoga in today’s peace education landscape.'
    },
    {
        id: 14,
        title: 'Women and Yoga: Empowerment through Spiritual Practices',
        author: 'Dr. Sushama Maurya (India)',
        pdfUrl: '/pdfs/Articles/14.pdf',
        excerpt: 'Explores the role of yoga in empowering women through spiritual practices and self-awareness.'
    },
    {
        id: 15,
        title: 'Thiền Buddhism as a Cultural Identity',
        author: 'Ms. Ho Thi Thanh Minh (Vietnam)',
        pdfUrl: '/pdfs/Articles/15.pdf',
        excerpt: 'Examines the role of Thiền Buddhism in shaping cultural identity and spiritual practices in contemporary society.'
    },
    {
        id: 16,
        title: 'Inclusion of Yoga and Mindfulness Practices in the Mauritian School Curriculum',
        author: 'Ms. Rajdevi Dhurn Reejane (Mauritius)',
        pdfUrl: '/pdfs/Articles/16.pdf',
        excerpt: 'Explores the integration of yoga and mindfulness practices into the educational framework of Mauritius.'
    },
    {
        id: 17,
        title: 'Overview of Contemporary Trends and the Meditation Landscape in Vietnam',
        author: 'Mr. Nguyen Xuan Hien (Vietnam)',
        pdfUrl: '/pdfs/Articles/17.pdf',
        excerpt: 'Examines the current trends and practices in meditation within the Vietnamese context.'
    },
    {
        id: 18,
        title: 'Ecological Consciousness in Yogic Philosophy',
        author: 'Dr. Balwant Singh (India)',
        pdfUrl: '/pdfs/Articles/18.pdf',
        excerpt: 'Explores the ecological dimensions of yogic philosophy and its relevance in contemporary environmental discourse.'
    },
    {
        id: 19,
        title: 'Comparative Study of Yogic Practices and Modern Psychotherapy in Juvenile Rehabilitation',
        author: 'Dr. Nilesh Bansode (India)',
        pdfUrl: '/pdfs/Articles/19.pdf',
        excerpt: 'A comparative analysis of yogic practices and contemporary psychotherapy in juvenile rehabilitation, assessing their effects on behavior, emotional regulation, and social reintegration.'
    },
];


    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Articles</h1>
                    <p className="text-gray-600 text-center max-w-2xl mx-auto">
                        Explore our latest articles on yoga, wellness, and healthy living.
                    </p>
                </div>
            </header>   

            {/* Main Content */}
            <main className="bg-[#FFF3E2] container mx-auto px-4 py-12">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-100 border-b border-gray-200">
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-800 w-20">
                                        Sr. No.
                                    </th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-800">
                                        Topic and Author's Name
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map((article, index) => (
                                    <tr 
                                        key={article.id}
                                        className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        <td className="px-6 py-6 text-center w-20">
                                            <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                                                {index + 1}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6">
                                            <Link
                                                href={`/articles/${article.id}`}
                                                className="block group"
                                            >
                                                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                                                    {article.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                                                    {article.author}
                                                </p>
                                                <div className="flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    Read Full Article
                                                    <svg
                                                        className="w-4 h-4 ml-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}