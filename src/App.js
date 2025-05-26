import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import About from "./components/About";
import Product from "./components/Product";
import Casestudy from "./components/Casestudy";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Product />
        <About />

        <Casestudy />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
