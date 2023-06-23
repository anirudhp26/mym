import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useState } from "react";
import MainApp from "./views/MainApp";

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{auth, setAuth}}>
        <Routes>
          <Route index element={<MainApp/>} path="/"></Route>
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
    );
}

export default App;
