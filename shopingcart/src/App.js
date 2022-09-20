import Main from "./main"
import { AppContextProvider } from "./components/context/AppContext"
import "./App.css";

function App() {
  return (
    <div>
       <AppContextProvider>
      <Main/>
      </AppContextProvider>
    </div>
  )
}

export default App