import ProjectCard from "./ProjectCard";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <div className="project__container container">
        <ProjectCard />
      </div>
    </section>
  );
};

export default Portfolio;
