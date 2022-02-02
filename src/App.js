import './App.css';
import Home from './pages/home';
import {Route, Routes} from "react-router-dom";
import CodePage from "./pages/CodePage";

function App() {
  return (
    <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/auth"} element={<p>Auth</p>}/>
        <Route path={"/codePage"} element={<CodePage/>}/>
    </Routes>
  );
}

export default App;
