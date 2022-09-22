import { Button, Card } from "react-bootstrap"
import "../App.css";
import Rating from "./components/Rating";
import { useShoppingCart } from "./components/context/ShoppingCartContext"
import { formatCurrency } from "./components/Utilities/formatCurrency"


export function StoreItem({ id, name, price, imgUrl, ratings }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <Card className="h-100">
      <>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="350px"
        style={{ objectFit: "cover" }}
      />
      </>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <Card.Subtitle style={{ paddingBottom: 10 ,"position":"relative",
"display": "block"}}>
            <span className="ms-2 text-muted span">{formatCurrency(price)}</span>
            <Rating rating={ratings} />
          </Card.Subtitle>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}