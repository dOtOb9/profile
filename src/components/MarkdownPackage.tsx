export default function MarkdownPackage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="prose mx-auto max-w-3xl w-full">
      {children}
    </div>
  );
}