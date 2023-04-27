import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "../ShoppingCart";
// import { useLocalStorage } from "../hooks/useLocalStorage"
// import { v4 as uuidv4 } from "uuid";

const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const getData = () => {
    const data = localStorage.getItem("users");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  let navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [clear, setClear] = useState(false);
  const [byStock, setByStock] = useState(false);
  const [searchQuery, setSearchQuery] = useState(false);
  const [byFastDelivery, setByFastDelivery] = useState(false);
  const [byRatings, setByRatings] = useState(false);
  const [gender, setGender] = useState();

  const [users, setUsers] = useState(getData());
  const [userId, setUserId]= useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [userActive, setUserActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      userId: userId,
      userName: userName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      cartItems: cartItems,
    };
    console.log("details", user);
    if (users.find((users) => users.email === email)) {
      alert("email already exists");
    } else if (password !== confirmPassword) {
      alert("password don't match");
    } else {
      setUsers([...users, user]);
      setUserActive(true);
      navigate("/Store");
    }
    console.log("details", users);
  };

  const handleSubmitSuccess = (e) => {
    e.preventDefault();
    var storeValues = JSON.parse(localStorage.getItem("users"));
    var foundUser = storeValues.find(
      (user) => user.email === email && user.password === password
    );
    console.log("users", foundUser);
    setCartItems(foundUser.cartItems ? foundUser.cartItems : []);
    if (foundUser) {
      setUserActive(true);
      navigate("/Store");
      fillCart();
    } else {
      alert("Account Doesn't exists");
    }
  };
  // cart-context
  const cartQuantity =
    cartItems.length > 0 &&
    cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  const addCartItem = (items) => {
    let index = users.findIndex((users) => users.email === email);
    console.log(index, users[index]);
    let user = users[index];
    if (userActive === false) {
      user.cartItems = items;
    } else {
      user.cartItems = [...items];
    }
    users[index] = user;
    localStorage.setItem("users", JSON.stringify(users));
  };

  const fillCart = (items) => {
    let index = users.findIndex((users) => users.email === email);
    console.log(index, users[index]);
    let user = users[index];
    user.cartItems = items;
    const fill = items.find((element) => element);
    if (items) {
      setCartItems({
        ...items,
        cartItems: fill.cartItems,
      });
    }
  };

  function increaseCartQuantity(id) {
    if (!userActive) {
      console.log("User", userActive);
      alert("'Please Login or Sign-up to Shop with us.!!'");
      navigate("/Login");
    } else {
      setCartItems((currItems) => {
        let current = cartItems;
        if (currItems.find((item) => item.id === id) == null) {
          current = [...currItems, { id, quantity: 1 }];
        } else {
          current = currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
        }
        addCartItem(current);
        console.log({ current });
        return current;
      });
    }
  }
  function decreaseCartQuantity(id) {
    setCartItems((currItems) => {
      let current = cartItems;
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        current = currItems.filter((item) => item.id !== id);
      } else {
        current = currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
      addCartItem(current);
      console.log({ current });
      return current;
    });
  }
  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  function checkOut() {
    alert("thanks for shopping with us please come again");
    setCartItems([]);
    setIsOpen(false);
  }
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  //send data to localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  console.log("userCart",cartItems);
  return (
    <div>
      <AppContext.Provider
        value={{
          users,
          userId,
          setUserId,
          setUsers,
          userName,
          setUserName,
          email,
          setEmail,
          password,
          setPassword,
          confirmPassword,
          setConfirmPassword,
          handleSubmit,
          handleSubmitSuccess,
          navigate,
          handleGender,
          checkOut,
          getItemQuantity,
          increaseCartQuantity,
          decreaseCartQuantity,
          removeFromCart,
          openCart,
          closeCart,
          cartItems,
          cartQuantity,
          gender,
          setGender,
          byStock,
          setByStock,
          searchQuery,
          setSearchQuery,
          byFastDelivery,
          setByFastDelivery,
          byRatings,
          setByRatings,
          clear,
          setClear,
        }}
      >
        {children}
        <ShoppingCart isOpen={isOpen} />
      </AppContext.Provider>
    </div>
  );
}
