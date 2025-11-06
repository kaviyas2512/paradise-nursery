import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white text-center">
      <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="font-bold text-lg mt-2">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="mt-2 font-semibold text-green-700">₹{product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  )
}
