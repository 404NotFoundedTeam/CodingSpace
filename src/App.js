import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages//SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/sigIn" element={<SignIn />}></Route>
    </Routes>
  );
}

export default App;
