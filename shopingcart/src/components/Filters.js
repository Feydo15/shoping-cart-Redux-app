import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
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
        <Form.Check
          inline
          label="Men"
          name="group1"
          type="radio"
          value="men"
          id={`inline-1`}
          onChange={() => {
            handleGender()
          }}
      checked={gender === "men" ? true : false}
        
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Women"
          name="group1"
          type="radio"
          value="women"
          id={`inline-2`}
          onChange={() => {
            handleGender()
            }}
     checked={gender === "women" ? true : false}
          
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
