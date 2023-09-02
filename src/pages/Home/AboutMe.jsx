export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/image.png" alt="About Me" />
        </div>
        <div className="Top--section--content--box about--section--box">
          <div className="Top--section--content">
            {/* <p className="section--title">About</p> */}
            <h1 className="skills-section--heading">About Me</h1>
            <p className="Top--section-description">
            "As an undergraduate pursuing a BSc (Hons) in Computing and Information Systems, I am actively seeking a new internship opportunity within the IT industry. I bring a dynamic and innovative mindset, coupled with self-motivation, adept problem-solving abilities, and strong multitasking skills to the table. With a solid foundation in leadership and collaborative teamwork, I am well-prepared to contribute effectively to your organization.
            </p><br/>
            <p className="Top--section-description">
            Furthermore, my enthusiasm for learning and my capacity to quickly adapt to diverse technology stacks make me a valuable asset. I approach challenges with resilience and enthusiasm, always striving to achieve set goals."
            </p>
          </div>
        </div>
      </section>
    );
  }