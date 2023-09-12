import "./about.css";
import AboutImg from "../../Assets/Img/IMG_8207-min.jpeg";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">Who is Jean Jacques Buhendwa</span>
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
              👋 I am a Full-Stack Developer with a knack for turning ideas into
              user-friendly websites and applications. I use JavaScript, React,
              Redux, HTML, and CSS to build websites that are both visually
              stunning and exceptionally functional and I can handle the
              back-end thanks to my Ruby and Ruby on Rails skills. <br />
              Before venturing into professional development, I spearheaded a
              groundbreaking project during my computer science studies. This
              involved developing an embedded device to track users' heart rates
              and temperatures, sending data securely to the cloud for remote
              access. The project's recognition as one of the top endeavours at
              my institution remains a source of immense pride and motivation.{" "}
              <br />
              📨 I am eager to connect with like-minded professionals,
              collaborate on innovative projects, and contribute to the
              ever-evolving tech landscape.
            </p>

            <a
              className="button button--flex"
              href="https://docs.google.com/document/d/1Ue7pLxp-QVq4MlWt1Gh1CLljsScBof5zDvgTvkznrUE/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              See my CV <i class="uil uil-file-download"></i>
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
