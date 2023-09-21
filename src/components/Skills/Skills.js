import { useEffect } from "react";
import { Tilt } from "react-tilt";
import "./skills.css";
import TechSkills from "./TechSkills";
import SoftSkills from "./SoftSkills";
import BgAnimation from "./BgAnimation";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1,
    speed: 100,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section_title" data-aos="zoom-out-down">
        Skills
      </h2>
      <div className="skills__container container">
        <div data-aos="fade-up">
          <Tilt options={defaultOptions} className="skills__content">
            <h3 className="section_subtitle skill__title">Technical skills</h3>
            <hr className="hr__skill" />
            <div className="skills__data">
              <TechSkills />
              <BgAnimation />
            </div>
          </Tilt>
        </div>
        <div data-aos="fade-up">
          <Tilt options={defaultOptions} className="skills__content">
            <h3 className="section_subtitle skill__title">Soft skills</h3>
            <hr className="hr__skill" />
            <div className="skills__data">
              <SoftSkills />
              <BgAnimation />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Skills;
