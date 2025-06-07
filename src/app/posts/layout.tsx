export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1">
      {children}
    </div>
  )
}