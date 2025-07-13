import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        <Banner 
          title="Careers" 
          subtitle="Join our team" 
          imageUrl="/images/ideas-banner.jpg" 
        />
        
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Career Opportunities</h2>
          <p className="mb-4">This is a placeholder for the Careers page content.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}