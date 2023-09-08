import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
