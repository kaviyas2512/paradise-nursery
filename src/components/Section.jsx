import ProductCard from '///workspaces/paradise-nursery/src/components/ProductCard'

export default function Section({ title, items }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-800 mb-3">{title}</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
