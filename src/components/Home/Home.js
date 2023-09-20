import { useEffect } from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./Scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div
            className="home__img"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          ></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
