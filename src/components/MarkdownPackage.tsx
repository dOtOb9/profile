export default function MarkdownPackage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div className="prose w-full max-w-5xl bg-white/70 p-8 sm:m-4">
      {children}
    </div>
  );
}