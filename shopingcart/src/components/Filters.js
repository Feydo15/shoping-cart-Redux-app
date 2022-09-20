import React, { useState } from "react";
// import storeItems from "./data/items.json"
import { Button, Form, FormControl } from "react-bootstrap";
import { useShoppingCart } from "./context/ShoppingCartContext";
import storeItems from "./data/items.json";

import Rating from "./Rating";

const Filters = ({ sortDec }) => {
  const {
    sorted,
    byStock,
    setAscending,
    setDescending,
    setByStock,
    byFastDelivery,
    setByFastDelivery,
    byRatings,
    setByRatings,
    setSearchQuery,
    setClear,
  } = useShoppingCart();

  const [isChecked, setIsChecked] = useState(false);
  const changeSorted = (value) => {
    var sortedProducts = storeItems.sort((a, b) => a.price - b.price) ||
    storeItems.sort((a, b) => b.price - a.price);
    sortDec(sortedProducts);

    console.log(value);
    setIsChecked(!isChecked);
  };
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
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() => {
          setAscending(true);
          }}
          checked={isChecked}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() => {
            setDescending(true);
            }}
          checked={isChecked ? true : false}
        />
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
