import { createSlice } from '@reduxjs/toolkit'

const saved = JSON.parse(localStorage.getItem('cart') || '{}')
const initialState = {
  items: saved.items || {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const p = action.payload
      if (state.items[p.id]) {
        state.items[p.id].qty += 1
      } else {
        state.items[p.id] = { ...p, qty: 1 }
      }
    },
    increment(state, action) {
      state.items[action.payload].qty += 1
    },
    decrement(state, action) {
      const id = action.payload
      if (!state.items[id]) return
      state.items[id].qty -= 1
      if (state.items[id].qty <= 0) delete state.items[id]
    },
    removeItem(state, action) {
      delete state.items[action.payload]
    },
    clearCart(state) {
      state.items = {}
    },
  },
})

export const { addToCart, increment, decrement, removeItem, clearCart } =
  cartSlice.actions

export default cartSlice.reducer
