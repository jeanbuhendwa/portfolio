import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
