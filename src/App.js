import React from "react";
import { Blog, Features,footer,Possibility,WhatGPT3,Header, Footer} from "./containers";
import { Article, Brand, Cta, Feature, Navbar } from "./components";
import "./app.css";

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
