import { Tilt } from "react-tilt";
import "./skills.css";
import TechSkills from "./TechSkills";
import SoftSkills from "./SoftSkills";
import BgAnimation from "./BgAnimation";

const Skills = () => {
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
      <h2 className="section__title">Skills</h2>
      <div className="skills__container container">
        <Tilt options={defaultOptions} className="skills__content">
          <h3 className="section_subtitle skill__title">Technical skills</h3>
          <hr className="hr__skill" />
          <div className="skills__data">
            <TechSkills />
            <BgAnimation />
          </div>
        </Tilt>
        <Tilt options={defaultOptions} className="skills__content">
          <h3 className="section_subtitle skill__title">Soft skills</h3>
          <hr className="hr__skill" />
          <div className="skills__data">
            <SoftSkills />
            <BgAnimation />
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Skills;
