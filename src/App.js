import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { AuthContext } from "./AuthContext";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{auth, setAuth}}>
        <Routes>
          <Route index element={<Home/>} path="/"></Route>
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
    );
}

export default App;
