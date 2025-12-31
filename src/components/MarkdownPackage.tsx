'use client';
import { useRef } from "react";

export default function MarkdownPackage({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollTop = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div ref={ref} className="prose w-full max-w-5xl bg-white/70 p-8 sm:m-4">
      {children}
      <div className="flex justify-center">
        <button onClick={scrollTop} className="my-8 px-4 py-2 bg-gray-400 text-white rounded-full hover:shadow-xl active:shadow-none transition shadow-md">
          go to top
        </button>
      </div>
    </div>
  );
}