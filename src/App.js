import React from "react";
import "./index.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AwardList from "./AwardList";
import AlbumPage from "./AlbumPage";
import Cart from "./Cart";
import Error from "./Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/:title" element={<AlbumPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/awards" element={<AwardList />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
