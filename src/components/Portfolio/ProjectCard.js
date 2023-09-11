import "./card.css";

const ProjectCard = ({ project }) => {
  const { imgSrc, title, description, techIcons, role, githubLink, viewLink } =
    project;

  return (
    <div className="card">
      <div className="img__container">
        <img src={imgSrc} alt={title} />
        <h3 className="section__subtitle project__title">{title}</h3>
      </div>
      <div className="content__container">
        <p>{description}</p>
        <div className="tech__icons">
          {techIcons.map((icon, index) => (
            <i key={index} className={icon}></i>
          ))}
        </div>
        <div className="footer__card">
          <div className="project__role">
            <i className="bx bx-code-alt"></i>
            <span className="project__role-text">{role}</span>
          </div>
          <div className="project__btn">
            <a
              href={githubLink}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-github-alt"></i>
            </a>
            <a href={viewLink} className="btn" target="_blank" rel="noreferrer">
              <i className="uil uil-eye"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
