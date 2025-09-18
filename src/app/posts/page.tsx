"use client";
import HomeIcon from '@/components/HomeIcon';
import BlogSection from '@/components/BlogSection';
import { useSearchParams } from 'next/navigation';

export default function BlogPage() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter');


  return (
    <div className="flex flex-1 w-full">
      <div className="w-1/2 h-screen flex flex-col justify-center items-center fixed left-0 top-0 bg-blue-200">
        <HomeIcon />
        <BlogSection isLg={false} />
      </div>
      <div className="w-1/2 ml-auto h-screen flex flex-col items-center fixed right-0 top-0 overflow-y-auto bg-white">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="flex flex-col gap-6">
        </div>
      </div>
    </div>
  );
}
