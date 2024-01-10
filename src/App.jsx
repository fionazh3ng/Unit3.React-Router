import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Green from "./components/green";
import Yellow from "./components/Yellow";
import Black from "./components/Black";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="container">
      <NavBar />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blue" element={<Blue />}></Route>
          <Route path="/red" element={<Red />}></Route>
          <Route path="/green" element={<Green />}></Route>
          <Route path="/yellow" element={<Yellow />}></Route>
          <Route path="/black" element={<Black />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
