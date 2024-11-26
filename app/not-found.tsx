import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mb-8">
          <h2 className=" text-9xl font-extrabold  dark:text-gray-100">404</h2>
          <p className="mt-2 text-3xl font-bold  dark:text-gray-100">
            Page not found
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            <ArrowRight size={24} className="mr-2" />
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
