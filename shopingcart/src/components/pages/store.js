import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../StoreItem"
import storeItems from "../data/items.json"
import Filters from '../Filters';

export function Store() {
  return (
    <div className="store">
      <h1>Store</h1>
      <Filters />
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
