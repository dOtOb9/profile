"use client"
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import MarkdownPackage from "@/components/MarkdownPackage";
import Me from "@/markdown/me.mdx";
import AboutMe from "@/components/AboutMe";

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
        <div className={`flex flex-1 transition-all duration-[1600ms] ease-in-out relative ${showButton ? 'gap-12 justify-start' : 'flex-col items-center justify-center'}`}>  
          <div className={`flex flex-col items-center justify-center transition-all duration-[1600ms] ease-in-out w-full lg:max-w-xl lg:min-w-[24rem] ${showButton ? 'lg:translate-x-[-20vw]' : ''}`}>
            <div className="p-8">
              <Image src="/profile.png" alt="Profile Picture" className="rounded-full" width={150} height={150} />
            </div>
            <h1 className="text-4xl font-bold mb-4">Welcome to My Blog !🎉</h1>
            <p className="text-lg text-center max-w-xl">
              Explore articles on various topics including technology, programming, and more.
            </p>
          </div>
          <div
            className={`w-full lg:w-1/2 lg:max-w-xl lg:min-w-[24rem] flex items-center justify-center transition-all duration-[1600ms] ease-in-out absolute left-1/2 top-1/2 lg:top-0 lg:bottom-0 lg:left-auto lg:right-0 ${showButton ? 'opacity-100 lg:translate-x-[10vw] lg:top-1/2 lg:bottom-1/2 z-10' : 'opacity-0 lg:translate-x-[50%] lg:top-1/2 lg:bottom-1/2 z-0'}`}
            style={
              showButton
                ? { pointerEvents: 'auto' }
                : { transform: 'translate(-50%, -50%)', pointerEvents: 'none' }
            }
          >
            <button
              className="w-full mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Newest Posts
            </button>
          </div>
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