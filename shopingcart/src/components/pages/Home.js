import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../StoreItem";
import storeItems from "../data/items.json";
import { useAppContext } from "../context/AppContext";
import { useShoppingCart } from "../context/ShoppingCartContext";

import Filters from "../Filters";

export function Home() {
  // const [products, setProducts] = useState([]);
  const {
    ascending,
    descending,
    byStock,
    byFastDelivery,
    byRatings,
    searchQuery,
    clear,
  } = useShoppingCart();

  // useEffect(() => {
    // setProducts(storeItems);
  // });

  // useEffect(() => {
    // transformProducts();
  // });

  const transformProducts = () => {
    let sortedProducts = storeItems;
    // if (sort) {
      // sortedProducts = sortedProducts.sort((a, b) =>
        // sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      // );
    // }

     if(ascending){
      sortedProducts = storeItems.sort((a, b) => a.price - b.price);
     }
     if(descending){
      sortedProducts = storeItems.sort((a, b) => b.price - a.price);
     }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((product) => product.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((product) => product.fastDelivery);
    }
    if (byRatings) {
      sortedProducts = sortedProducts.filter(
        (product) => product.ratings >= byRatings
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      );
    }

    if (clear) {
      return {
        byStock: false,
        byFastDelivery: false,
        byRatings: 0,
        searchQuery: "",
      };
    }
    // setProducts(sortedProducts);
    return sortedProducts;
  };

  

  const { navigate } = useAppContext();

  return (
    <div className="home">
      <div className="App">
        {/* <h1>Home</h1> */}
        <section id="home">
          <div className="main">
            <h1 className="heading">
              F T C.co <br />
              <h3 style={{ "backgroundColor": "blue" }}>
                Giving You The Best In Everything.!!
              </h3>
              Fashion & Clothing Store
            </h1>
            <button
              className="btn"
              onClick={() => {
                navigate("/Login");
              }}
            >
              LOG IN
            </button>
          </div>
        </section>
        <section id="newline">
          <h1 className="heading" style={{ "backgroundColor": "blue" }}>
            New Line
          </h1>
          <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems
              .filter((product) => product.newProduct)
              .map((item) => (
                <Col key={item.id}>
                  <StoreItem {...item} />
                </Col>
              ))}
          </Row>
        </section>
        <section className="browser">
          <h1 className="heading" style={{ "backgroundColor": "blue" }}>
            Browser
          </h1>
          <Filters  />
          <Row md={2} xs={1} lg={3} className="g-3">
            {transformProducts().map((item) => (
              <Col key={item.id}>
                <StoreItem {...item} />
              </Col>
            ))}
          </Row>
        </section>
        <section id="contact">
          <h1 className="heading">CONTACT</h1>
          <form action="" className="form">
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter Your Email"
            />
            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
            ></textarea>
            <input type="submit" value="send" id="send" />
          </form>
        </section>
      </div>
    </div>
  );
}
