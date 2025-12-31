"use client";


import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogSection({ isShow = true, isLg }: { isShow?: boolean; isLg?: boolean }) {
  const [autoIsLg, setAutoIsLg] = useState<boolean | undefined>(undefined);
  useEffect(() => {
    if (isLg === undefined) {
      const check = () => setAutoIsLg(window.innerWidth >= 1024);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }
  }, [isLg]);
  const effectiveIsLg = isLg !== undefined ? isLg : autoIsLg;
  const blogSectionList = [
    { label: "Newest Posts", slug: "all" },
    { label: "Others", slug: "others" },
  ];


  const handleSidebarClose = () => {
    const checkbox = document.getElementById("sidebar-toggle") as HTMLInputElement | null;
    if (checkbox) checkbox.checked = false;
  };

  const blogSectionButtons = blogSectionList.map((item, index) => (
    <Link
      href={`/posts/tag/${item.slug}`}
      key={item.slug}
      className={`w-3/4 max-w-md mt-2 px-6 py-2 text-white text-center rounded-full shadow-md hover:shadow-xl active:shadow-none ${index % 2 ? 'bg-blue-400' : 'bg-blue-500'} transition`}
      onClick={handleSidebarClose}
    >
      {item.label}
    </Link>
  ));

  return (
    <div
      className={`
        flex flex-col
        items-center justify-center
        w-full ${effectiveIsLg ? 'lg:w-1/2 lg:max-w-xl lg:min-w-[24rem]' : ''}
        transition-all duration-[1600ms] ease-in-out
        ${effectiveIsLg ? 'lg:absolute lg:left-1/2 lg:top-1/2 lg:top-0 lg:bottom-0 lg:left-auto lg:right-0' : ''}
        ${isShow
          ? `opacity-100 ${effectiveIsLg ? 'lg:translate-x-[10vw] lg:top-1/2 lg:bottom-1/2 z-10' : ''}`
          : `opacity-0 ${effectiveIsLg ? 'lg:translate-x-[50%] lg:top-1/2 lg:bottom-1/2 z-0' : ''}`}
        /* モバイル: 下からフェードイン */
        ${isShow ? 'sm:translate-y-0 sm:opacity-100' : 'sm:translate-y-8 sm:opacity-0'}
      `}
      style={
        isShow
          ? { pointerEvents: 'auto' }
          : { pointerEvents: 'none' }
      }
    >
      {blogSectionButtons}
    </div>
  );
}