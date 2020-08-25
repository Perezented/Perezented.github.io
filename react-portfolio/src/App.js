import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import { Projects } from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Projects />
            <About />
            <Contact />
        </div>
    );
}

export default App;
