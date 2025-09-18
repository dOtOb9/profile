"use client"
import { useRef, useEffect, useState } from "react";
import MarkdownPackage from "@/components/MarkdownPackage";
import Me from "@/markdown/me.mdx";
import AboutMe from "@/components/AboutMe";
import BlogSection from "@/components/BlogSection";
import HomeIcon from "@/components/HomeIcon";

export default function Home() {

  const markdownRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    markdownRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen pt-14 bg-blue-200 w-full">
      <div className="flex flex-col min-h-screen w-full items-center justify-center">
        {/* PC: 横並び, モバイル: 縦並び */}
        <div
          className={`
            flex flex-1 transition-all duration-[1600ms] ease-in-out relative
            lg:flex-row lg:gap-12 lg:justify-start
            flex-col items-center justify-center
          `}
        >
          {/* 上部: プロフィール/タイトル/説明 (PC:左, モバイル:上) */}
          <div
            className={`
              flex flex-col items-center justify-center transition-all duration-[1600ms] ease-in-out w-full
              lg:max-w-xl lg:min-w-[24rem]
              ${showButton ? 'lg:translate-x-[-20vw]' : ''}
            `}
          >
            <div className="p-8">
              <HomeIcon />
            </div>
            <h1 className="text-4xl font-bold mb-4">Welcome to My Blog !🎉</h1>
            <p className="text-lg text-center max-w-xl">
              Explore articles on various topics including technology, programming, and more.
            </p>
          </div>
          {/* 下部: ボタン (PC:右, モバイル:下) */}
          <BlogSection isShow={showButton} />
        </div>
        <AboutMe onClick={handleScroll} />
      </div>
      <div ref={markdownRef} className="w-full flex justify-center mb-8">
        <MarkdownPackage>
          <Me />
        </MarkdownPackage>
      </div>
    </div>
  );
}