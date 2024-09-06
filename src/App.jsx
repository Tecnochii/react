import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Home from "./pages/Home";
import Casas from "./pages/Casas";
import Personajes from "./pages/Personajes";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/personajes" element={<Personajes />}></Route>
            <Route path="/casas" element={<Casas />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
