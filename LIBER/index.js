import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context.";
import "./index.css";
import Home from "./pages/Home/Home";
import Multimedia from "./pages/Multimedia/Multimedia";
import About from "./pages/About/About";
import Scholarship from "./pages/Scholarship/Scholarship";
import Voice from "./pages/Voice/Voice";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book" element={<BookList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/voice" element={<Voice />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);