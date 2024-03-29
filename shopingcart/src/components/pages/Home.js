import React, {useState}from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../StoreItem";
import storeItems from "../data/items.json";
import { useAppContext } from "../context/AppContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Filters from "../Filters";

export function Home() {

  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, form]);
    setForm({ name: "", email: "", msg: "" })
    localStorage.setItem("userContacts", JSON.stringify(list));
  };
  console.log("list", list);

  const {
    gender,
    byStock,
    byFastDelivery,
    byRatings,
    searchQuery,
    clear,
  } = useShoppingCart();


  const transformProducts = () => {
    let sortedProducts = storeItems;

     if (gender) {
      window.onload = function() {
        const checkboxes = document.querySelectorAll('.check')
        
        document.body.addEventListener('click', (e) => {
          for (const c of checkboxes) {
            c.checked = false
          }
          const clickedCheckbox = [...checkboxes].find(c => c === e.target)
          clickedCheckbox.checked = true
        })}

      sortedProducts = sortedProducts.filter((product) =>
      gender === product.value 
      );
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
      return 
      
    }
    // setProducts(sortedProducts);
    return sortedProducts;
  };

  

  const { navigate } = useAppContext();

  return (
    <div className="home">
      <div className="App">
        {/* <h1>Home</h1> */}
        <section id="home" >
          <div className="main">
            <h1 className="heading">
              F T C.co <br />
              <h3 style={{ "backgroundColor": "blue" }}>
              Giving You The Best In <strong>Every Brand.!!</strong>
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
        <section className="browser" id="browser">
          <h1 className="heading" style={{ "backgroundColor": "blue" }}>
            Browser
          </h1>
          <Filters />
          <Row md={2} xs={1} lg={3} className="g-3">
            {transformProducts().map((item) => (
              <Col key={item.id}>
                <StoreItem {...item} />
              </Col>
            ))}
          </Row>
        </section>
        <section id="contact">
          <h1 className="heading" style={{ "backgroundColor": "blue" }}>CONTACT US HERE</h1>
          <form action="" className="form" onSubmit={handleSubmit}>
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
              onChange={handleChange}
            />
            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
              onChange={handleChange}
            ></textarea>
            <input type="submit" value="send" id="send" onClick={() => setList([...list])}/>
          </form>
        </section>
      </div>
    </div>
  );
}
