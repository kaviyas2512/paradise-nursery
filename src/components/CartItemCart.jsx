import { useDispatch } from 'react-redux'
import { increment, decrement, removeItem } from '../features/cart/cartSlice'

export default function CartItemCard({ item }) {
  const dispatch = useDispatch()
  const total = item.price * item.qty

  return (
    <div className="flex items-center justify-between bg-white p-3 shadow rounded mb-3">
      <div className="flex items-center gap-4">
        <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded" />
        <div>
          <h3 className="font-bold">{item.name}</h3>
          <p>₹{item.price} each</p>
          <p className="text-gray-600">Subtotal: ₹{total}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="bg-gray-300 px-2 rounded" onClick={() => dispatch(decrement(item.id))}>−</button>
        <span>{item.qty}</span>
        <button className="bg-gray-300 px-2 rounded" onClick={() => dispatch(increment(item.id))}>+</button>
        <button className="ml-3 bg-red-600 text-white px-3 py-1 rounded" onClick={() => dispatch(removeItem(item.id))}>
          Delete
        </button>
      </div>
    </div>
  )
}
