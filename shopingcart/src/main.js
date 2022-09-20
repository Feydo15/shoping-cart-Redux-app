import { Routes, Route } from "react-router-dom"
import "./App.css";
import { Container } from "react-bootstrap"
import { Home } from "./components/pages/Home"
import { Store } from "./components/pages/store"
import { About } from "./components/pages/About"
import { Navbar } from "./components/Navbar"
import { Register } from "./components/pages/Register";
import { Login } from "./components/pages/login";
import { ShoppingCartProvider } from "./components/context/ShoppingCartContext"

function Main() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
      <footer id="main-footer" style={{ "background-color": "gray" }}>
            <h4>FEYDO TOP CLOTHING.co</h4>
    <p>Copyright &copy; 2022, F T C.co All Rights Reserved</p>
    <div>
      <a href="#">terms of use</a> | <a href="#">Privacy Policy</a>
    </div>
  </footer>
    </ShoppingCartProvider>
  )
}

export default Main