import { useSelector, useDispatch } from 'react-redux'
import CartItemCard from '///workspaces/paradise-nursery/src/components/CartItemCard'
import { clearCart } from '../features/cart/cartSlice'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const list = Object.values(items)
  const total = list.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Your Cart</h2>
      {list.length === 0 ? (
        <p>Your cart is empty. <Link to="/products" className="text-green-700 underline">Continue shopping</Link>.</p>
      ) : (
        <>
          {list.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}

          <div className="mt-6 text-right">
            <h3 className="text-xl font-semibold">Total: ₹{total}</h3>
            <div className="mt-4 flex justify-end gap-4">
              <Link to="/products" className="bg-gray-300 px-4 py-2 rounded">Continue Shopping</Link>
              <button
                className="bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800"
                onClick={() => {
                  alert('Checkout successful! Thank you 🌿')
                  dispatch(clearCart())
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
