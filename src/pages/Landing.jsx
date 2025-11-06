import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Welcome to Paradise Nursery</h1>
      <p className="text-gray-600 mb-6">Your one-stop shop for beautiful indoor plants</p>
      <Link to="/products" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">
        Explore Plants
      </Link>
    </div>
  )
}
