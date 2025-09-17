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
        <button onClick={scrollTop} className="mt-8 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition">
          go to top
        </button>
      </div>
    </div>
  );
}