export default function MarkdownPackage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="prose">
      {children}
    </div>
  );
}