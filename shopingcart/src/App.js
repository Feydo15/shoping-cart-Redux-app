import Main from "./main"
import React from "react";
import { AppContextProvider } from "./components/context/AppContext"
import "./App.css";

function App() {

  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
       <AppContextProvider>
       <p>{!data ? "Loading..." : data}</p>
      <Main/>
      </AppContextProvider>
    </div>
  )
}

export default App