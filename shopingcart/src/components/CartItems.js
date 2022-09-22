import { Button, Stack, Image } from "react-bootstrap";
import { useShoppingCart } from "./context/ShoppingCartContext";
import storeItems from "./data/items.json";
import { formatCurrency } from "./Utilities/formatCurrency";

export function CartItem({ id, quantity }) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <Image
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>{item.name} </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>

      <Button onClick={() => decreaseCartQuantity(id)} style={{ height: "30px"}}>-</Button>
      {quantity > 1 && (
        <span className="text-muted" style={{ fontSize: ".65rem" }}>
          x{quantity}
        </span>
      )}
      <Button onClick={() => increaseCartQuantity(id)} style={{ height: "30px"}}>+</Button>
      <div> {formatCurrency(item.price * quantity)}</div>

      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
