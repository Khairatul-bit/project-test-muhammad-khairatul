import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        <Banner 
          title="About" 
          subtitle="Learn more about us" 
          imageUrl="/images/ideas-banner.jpg" 
        />
        
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">About Us</h2>
          <p className="mb-4">This is a placeholder for the About page content.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}