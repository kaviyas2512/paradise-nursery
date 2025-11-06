import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const items = useSelector((state) => state.cart.items)
  const totalQty = Object.values(items).reduce((s, i) => s + i.qty, 0)

  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Paradise Nursery</Link>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart {totalQty > 0 && <span className="bg-white text-green-700 rounded-full px-2 ml-1">{totalQty}</span>}
        </Link>
      </div>
    </nav>
  )
}
