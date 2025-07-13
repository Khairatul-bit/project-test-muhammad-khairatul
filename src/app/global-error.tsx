'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <p className="text-gray-600 mb-6">We apologize for the inconvenience. Please try again.</p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-suitmedia-orange text-white rounded hover:bg-opacity-90 transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}