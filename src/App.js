import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Auth from "./views/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/home"></Route>
        <Route index element={<Auth/>} path="/"></Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
