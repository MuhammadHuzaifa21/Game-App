import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GameDetail from "./Pages/GameDetail";
import AllGames from "./Pages/AllGames";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/allGames" element={<AllGames />} />
              <Route path="/gameDetail/:id" element={<GameDetail />} />
              
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
