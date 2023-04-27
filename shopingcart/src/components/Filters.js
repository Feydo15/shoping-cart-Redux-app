import React from "react";
import { Button, Form, FormControl, Dropdown } from "react-bootstrap";
import { useShoppingCart } from "./context/ShoppingCartContext";
import Rating from "./Rating";

const Filters = () => {
  const {
    byStock,
    gender,
    handleGender,
    setByStock,
    byFastDelivery,
    setByFastDelivery,
    byRatings,
    setByRatings,
    setSearchQuery,
    setClear,
  } = useShoppingCart();

  return (
    <div className="filters">
      <h1 className="title">Filter Products</h1>
      <span>
        <FormControl
          style={{ width: 500 }}
          placeholder="Search a product"
          className="m-auto"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </span>
      <span>
      <Dropdown>
      <Dropdown.Toggle size="sm" id="dropdown-basic">
        CATEGORIES
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Men</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Women</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Boys</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Girls</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Kids</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Baby and beauty</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="Checkbox"
          id={`inline-3`}
          onChange={() => {
            setByStock(true);
          }}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only" 
          name="group1"
          type="Checkbox"
          id={`inline-4`}
          onChange={() => {
            setByFastDelivery(true);
          }}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={byRatings}
          onClick={(i) => {
            setByRatings(i + 1);
          }}
          style={{ cursor: "pointer" }}
        />
        <br />
      </span>
      <Button
        variant="light"
        onClick={(e) => {
          setClear(true);
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
