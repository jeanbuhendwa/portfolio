import "./about.css";
import AboutImg from "../../Assets/Img/IMG_8207-min.jpeg";
import Resume from "../../Assets/docs/Resume.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <div className="about__container container">
        <div className="img__box">
          <div className="about__img__container">
            <img src={AboutImg} alt="" className="about__img" />
          </div>
          <h2 className="title__about" data-cta="My Description">
            John Buhendwa
          </h2>
        </div>
        <div className="about__data">
          <div className="description__container">
            <p className="about__description">
              genarator of Lorem Ipsum has been the industry's standard dummy.
              here are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. the majority have suffered alteration in some form and
              by injected. and the majority have suffered alteration. This is a
              case when they say.or randomised words which don't look even
              slightly believable. the majority have suffered alteration in some
              form and by injected. and the majority have suffered alteration.
              This is a case when they say.
            </p>

            <a download="" className="button button--flex" href={Resume}>
              Download CV <i class="uil uil-file-download"></i>
            </a>
          </div>
          <div className="info__container">
            <Info />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
