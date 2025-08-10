'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// This would normally come from an API or data fetch
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
    }
];

export default function ArticlePage({ params }) {
  const router = useRouter();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Unwrap the params Promise using React.use()
  const unwrappedParams = use(params);

  useEffect(() => {
    // In a real app, you would fetch the article data here based on unwrappedParams.id
    const foundArticle = articles.find(article => article.id === parseInt(unwrappedParams.id));
    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      // Redirect to 404 or articles list if article not found
      router.push('/articles');
    }
    setLoading(false);
  }, [unwrappedParams.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!article) {
    return null; // Redirect will happen in useEffect
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back button and title */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link
              href="/articles"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Articles
            </Link>
            <h1 className="text-2xl font-bold text-gray-800 ml-4">{article.title}</h1>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {article.date} • {article.readTime}
            </p>
          </div>

          <div className="w-full h-[calc(100vh-200px)]">
            <iframe
              src={`${article.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              className="w-full h-full"
              title={article.title}
            >
              <p>Your browser does not support iframes. You can <a href={article.pdfUrl} className="text-blue-600 hover:underline">download the PDF</a> instead.</p>
            </iframe>
          </div>

          <div className="p-4 border-t border-gray-200 text-right">
            <a
              href={article.pdfUrl}
              download
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
