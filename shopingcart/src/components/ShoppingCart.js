import { Offcanvas, Stack, Image, Button } from "react-bootstrap"
import { useShoppingCart } from "./context/ShoppingCartContext"
import { formatCurrency } from "./Utilities/formatCurrency"
import { CartItem } from "./CartItems"
import logo from "./Home-img/ftcy.jpg";
import storeItems from "./data/items.json"



export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems, checkOut } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end" style={{ width: "40%", height: "100%"}}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title > <Image 
     src={logo}
     style={{ width: "135px", height: "40px", objectFit: "cover"}}
   />F T C.co  <br/><br/>Cart 
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
        <Button  className="w-100" onClick={() => checkOut()}>Check Out</Button>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
