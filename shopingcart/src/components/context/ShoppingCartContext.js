import { createContext, useContext, useState } from "react"
import { ShoppingCart } from "../ShoppingCart"
// import storeItems from "../data/items.json"
import { useLocalStorage } from "../hooks/useLocalStorage"


const ShoppingCartContext = createContext({})

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [clear, setClear] = useState(false)
  const [byStock, setByStock] = useState(false)
  const [searchQuery, setSearchQuery] = useState(false)
  const [byFastDelivery, setByFastDelivery] = useState(false)
  const [byRatings, setByRatings] = useState(false)
  const [gender,setGender]=useState()
  const [cartItems, setCartItems] = useLocalStorage(
    "shopping-cart",
    []
  )

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function removeFromCart(id) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }



  function checkOut () {
    alert("thanks for shopping with us please come again")
    setCartItems([])
    setIsOpen(false)
  }

  const handleGender=(e)=>{
    setGender(e.target.value)
  }
  

  return (
    <ShoppingCartContext.Provider
      value={{
        handleGender,
        checkOut,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        gender, setGender,
        byStock, setByStock,
        searchQuery, setSearchQuery,
        byFastDelivery, setByFastDelivery,
        byRatings, setByRatings,
        clear, setClear
      }}
      
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>)}