import "./contact.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get In Touch</h2>
      <span className="section_subtitle">Contact Me</span>
      <div className="contact__container container">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
