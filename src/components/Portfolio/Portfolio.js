import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./Projects";
import "./portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const [showMore, setShowMore] = useState(false);

  const projectsToDisplay = showMore ? projects : projects.slice(0, 3);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section_title" data-aos="fade-right">
        Portfolio
      </h2>
      <div className="project__container container" data-aos="fade-up">
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
