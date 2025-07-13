'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import PostCard from '@/components/PostCard';
import Pagination from '@/components/Pagination';
import ListControls from '@/components/ListControls';
import Footer from '@/components/Footer';
import { fetchPosts } from '@/services/api';
import { Post, ApiResponse } from '@/types';

export default function IdeasPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get URL parameters or use defaults
  const pageParam = searchParams.get('page');
  const perPageParam = searchParams.get('perPage');
  const sortParam = searchParams.get('sort');
  
  const [currentPage, setCurrentPage] = useState(pageParam ? parseInt(pageParam) : 1);
  const [itemsPerPage, setItemsPerPage] = useState(perPageParam ? parseInt(perPageParam) : 10);
  const [sortOrder, setSortOrder] = useState(sortParam || '-published_at');
  
  // Ensure URL parameters are used when component mounts
  useEffect(() => {
    if (pageParam) setCurrentPage(parseInt(pageParam));
    if (perPageParam) setItemsPerPage(parseInt(perPageParam));
    if (sortParam) setSortOrder(sortParam);
  }, []);
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Update URL when parameters change
  useEffect(() => {
    const params = new URLSearchParams();
    params.set('page', currentPage.toString());
    params.set('perPage', itemsPerPage.toString());
    params.set('sort', sortOrder);
    
    router.push(`/ideas?${params.toString()}`);
    
    // Fetch data with new parameters
    fetchData();
  }, [currentPage, itemsPerPage, sortOrder]);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response: ApiResponse = await fetchPosts(currentPage, itemsPerPage, sortOrder);
      setPosts(response.data);
      setTotalItems(response.meta.total);
      setTotalPages(response.meta.last_page);
    } catch (err) {
      setError('Failed to load posts. Please try again later.');
      console.error('Error fetching posts:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const handleSortOrderChange = (value: string) => {
    setSortOrder(value);
    setCurrentPage(1); // Reset to first page when changing sort order
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16"> {/* Add padding-top to account for fixed header */}
        <Banner 
          title="Ideas" 
          subtitle="Where all our great things begin" 
          imageUrl="/images/ideas-banner.svg" 
        />
        
        <div className="container mx-auto px-4 py-8">
          <ListControls 
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            sortOrder={sortOrder}
            onItemsPerPageChange={handleItemsPerPageChange}
            onSortOrderChange={handleSortOrderChange}
          />
          
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(itemsPerPage)].map((_, index) => (
                <div key={index} className="bg-gray-200 rounded-lg h-64 animate-pulse"></div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <p className="text-red-500">{error}</p>
              <button 
                onClick={fetchData}
                className="mt-4 px-4 py-2 bg-suitmedia-orange text-white rounded hover:bg-opacity-90"
              >
                Try Again
              </button>
            </div>
          ) : (
            <>
              {posts.length === 0 ? (
                <div className="text-center py-10">
                  <p>No posts found.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {posts.map((post) => (
                    <PostCard 
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      thumbnail={post.small_image?.url || '/placeholder.jpg'}
                      date={post.published_at}
                    />
                  ))}
                </div>
              )}
              
              {totalPages > 1 && (
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}