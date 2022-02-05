import "./App.css";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import CodePage from "./pages/CodePage";

import SignUp from "./pages//SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/signIn" element={<SignIn />}></Route>
      <Route path={"/"} element={<Home />} />
      <Route path={"/auth"} element={<p>Auth</p>} />
      <Route path={"/codePage"} element={<CodePage />} />
    </Routes>
  );
}

export default App;
