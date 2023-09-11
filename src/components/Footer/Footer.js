import FooterSocial from "./FooterSocial";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer_section section">
      <h3 className="footer__subtitle">Jean Jacques Buhendwa </h3>

      <div className="footer_menu container">
        <ul className="footer__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#portfolio" className="nav__link">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
      <FooterSocial />
    </section>
  );
};

export default Footer;
