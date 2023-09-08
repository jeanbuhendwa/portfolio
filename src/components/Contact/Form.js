const Form = () => {
  return (
    <form className="contact__form">
      <div className="contact__form-div">
        <label className="contact__form-tag">Name</label>
        <input
          type="text"
          name="name"
          className="contact__form-input"
          placeholder="Enter Your Name"
        />
      </div>
      <div className="contact__form-div">
        <label className="contact__form-tag">Mail</label>
        <input
          type="email"
          name="email"
          className="contact__form-input"
          placeholder="Enter Your Email"
        />
      </div>
      <div className="contact__form-div contact__form-area">
        <label className="contact__form-tag">Project</label>
        <textarea
          name="project"
          cols="30"
          rows="10"
          className="contact__form-input"
          placeholder="Write Your Project"
        ></textarea>
      </div>

      <button type="submit" className="button button--flex submit">
        Get In Touch<i class="uil uil-message"></i>
      </button>
    </form>
  );
};

export default Form;
