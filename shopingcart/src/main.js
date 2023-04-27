import { Routes, Route, Link } from "react-router-dom"
import "./App.css";
import { Container } from "react-bootstrap"
import { Home } from "./components/pages/Home"
import { Store } from "./components/pages/store"
import { About } from "./components/pages/About"
import { Navbar } from "./components/Navbar"
import { Register } from "./components/pages/Register";
import { Login } from "./components/pages/login"
import { Privacy } from "./components/pages/privacy";
import { Terms } from "./components/pages/terms";
import { ShoppingCartProvider } from "./components/context/ShoppingCartContext"


function Main() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container style={{"max-width": "100%","": "100%" }} className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Container>
      <footer id="main-footer" style={{ "backgroundColor": "gray" }}>
            <h4>FEYDO TOP CLOTHING.co</h4>
    <p>Copyright &copy; 2022, F T C.co All Rights Reserved</p>
    <div>
      <Link to="/terms">terms of use</Link> | <Link to="/privacy">Privacy Policy</Link>
    </div>
  </footer>
    </ShoppingCartProvider>
  )
}

export default Main