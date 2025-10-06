import getSortedPostsData from '@/lib/posts';
import Link from 'next/link';

export default function BlogPage({ params }: { params: any }) {
  const allPostsData = getSortedPostsData({ Category: params.slugs });

  const postsLinks = allPostsData.map((post: any) => {
    const { id, date, title } = post;
    return (
      <div key={id} className="w-full">
        <Link href={`/posts/${id}`} className="hover:bg-gray-100 rounded-2xl w-full block p-8">
          <span className="text-xl font-semibold text-blue-600">
            {title || id}
          </span>
          <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
        </Link>
      </div>
    );
  });

  return (
    <div className="w-full lg:w-1/2 ml-auto h-screen flex flex-col items-center fixed right-0 top-0 overflow-y-auto bg-white">
      <h1 className="text-3xl text-black font-bold m-6">Blog</h1>
      <div className="w-full flex flex-1 flex-col px-6">
        {postsLinks}
      </div>
    </div>
  );
}
