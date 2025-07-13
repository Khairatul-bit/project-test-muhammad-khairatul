import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 flex flex-col items-center justify-center p-4">
        <h2 className="text-4xl font-bold mb-4">404</h2>
        <h3 className="text-2xl font-semibold mb-6">Page Not Found</h3>
        <p className="text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link 
          href="/"
          className="px-4 py-2 bg-suitmedia-orange text-white rounded hover:bg-opacity-90 transition-colors"
        >
          Go back home
        </Link>
      </main>
      
      <Footer />
    </div>
  );
}