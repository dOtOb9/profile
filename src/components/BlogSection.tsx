"use client";


import { useEffect, useState } from "react";

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
    "Newest Posts",
    "AtCoder",
    "TryHackMe",
    "Tech Ideas",
    "Others",
  ];

  const blogSectionButtons = blogSectionList.map((label, index) => (
    <button
      key={label}
  className={`w-3/4 max-w-md mt-2 px-6 py-2 text-white rounded ${index % 2 ? 'bg-blue-400 hover:bg-blue-500' : 'bg-blue-500 hover:bg-blue-600'} transition`}
      onClick={() => alert(`${label} feature coming soon!`)}
    >
      {label}
    </button>
  ));

  return (
    <div
      className={`
        fex flex-col
        w-full ${effectiveIsLg ? 'lg:w-1/2 lg:max-w-xl lg:min-w-[24rem]' : ''}
        flex items-center justify-center
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