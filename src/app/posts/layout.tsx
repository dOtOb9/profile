export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose mx-auto my-8 px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}