import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./Projects";
import "./portfolio.css";
const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);

  const projectsToDisplay = showMore ? projects : projects.slice(0, 3);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <div className="project__container container">
        {projectsToDisplay.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <button onClick={toggleShowMore} className="show__more__btn button">
        {showMore ? (
          <>
            <span>Show Less</span>
            <i class="uil uil-sorting"></i>
          </>
        ) : (
          <>
            <span>Show More</span>
            <i class="uil uil-direction"></i>
          </>
        )}
      </button>
    </section>
  );
};

export default Portfolio;
