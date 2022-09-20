import { createContext, useState, useContext, useEffect  } from "react";
import { useNavigate} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

  const AppContext = createContext({})

export function  useAppContext() {
  return useContext(AppContext)
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

  const [users, setUsers] = useState(getData());
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("null");
  const [ activeUser, setActiveUser] = useState("false");

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      id: uuidv4(),
      userName: userName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log("details", user);
    if (users.find((users) => users.email === email)) {
      alert("email already exists");
    } else if (password !== confirmPassword) {
      alert("password don't match");
    } else {
      setUsers([...users, user]);
      setActiveUser(true);
      navigate("/store ");
    }
    console.log("details", users);
  };

  const handleSubmitSuccess = (e) => {
    e.preventDefault();
    // let item1 ={
    // email: email,
    // password: password,
    // };
    if (users.find((users) => users.email === email)) {
      setActiveUser(true);
      navigate("/Store");
    } else {
      alert("Account Doesn't exists");
    }
  };

  function setSameID(id,users) {
    if (activeUser) return(
      users.id === id
    )
  }

  //send data to localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <AppContext.Provider
        value={{
          activeUser,
          setActiveUser,
          users,
          setSameID,
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
          navigate
        }}
      >
        { children }
      </AppContext.Provider>
    </div>
  );
};
