import products from '../data/products'
import Section from '../components/Section'

export default function ProductList() {
  const grouped = products.reduce((acc, p) => {
    (acc[p.section] = acc[p.section] || []).push(p)
    return acc
  }, {})

  return (
    <div className="p-6 space-y-10">
      {Object.entries(grouped).map(([section, items]) => (
        <Section key={section} title={section} items={items} />
      ))}
    </div>
  )
}
