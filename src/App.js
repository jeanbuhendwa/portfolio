import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/Scroll/ScrollUp";
import PropagateLoader from "react-spinners/PropagateLoader";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading__container">
          <PropagateLoader color="#555555" size={25} speedMultiplier={0.8} />
          <h1 className="section_title">John Buhendwa</h1>
          <p className="section_subtitle">Loading...</p>
        </div>
      ) : (
        <div data-theme={theme}>
          <Header />
          <main className="main">
            <Home />
            <About />
            <Portfolio />
            <Skills />
            <Contact />
          </main>
          <Footer />
          <ScrollUp />
          <div className="dark_icon_container">
            <i
              onClick={switchTheme}
              className={`fa-solid fa-moon ${
                theme === "light" ? "active" : "inactive"
              }`}
            ></i>
            <i
              onClick={switchTheme}
              className={`fa-solid fa-sun ${
                theme === "dark" ? "active" : "inactive"
              }`}
            ></i>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
