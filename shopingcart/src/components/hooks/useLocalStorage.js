import {  useState } from "react"
import { useAppContext } from "../context/AppContext"

// export function useLocalStorage(key, initialValue) {
  // const [value, setValue] = useState(() => {
    // const jsonValue = localStorage.getItem(key)
    // if (jsonValue != null) return JSON.parse(jsonValue)
// 
  // })
// 
  // useEffect((key) => {
    // localStorage.setItem(key, JSON.stringify(value))
  // }, [value])
// 
// }
// 
// 

// Hook
export function useLocalStorage(key, initialValue) {
  const {
    activeUser,
  } = useAppContext()
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    else if (activeUser === true){
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } else {
      return initialValue;
    }
  });


  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
