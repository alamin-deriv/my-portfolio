import "./About.css";

export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="header-title-box">
        ⚛ Front-End | Web3 Developer based in Abuja, Nigeria!
      </div>
      <div className="about-left">
        <span className="purple-text">✋ Al-amin Abdulkareem </span>
        <p className="gray-text">
          I am a Software Developer with 5 years of working experience as a
          front-end developer, I'm currently transitioning into{" "}
          <b>
            <span className="purple-text">WEB3 </span>
          </b>
          development. Who prefer to work in a fast-paced environment. Extensive
          development experience at all stages, with strong coding skills and
          the ability to turn client requirements into exciting online
          applications. passionate about computer problem solving, and
          well-versed in data structure and algorithm skills, as well as a
          variety of programming languages and modern frameworks.
        </p>
      </div>
      <ul>
        <li>
          <a
            href="https://twitter.com/al_ameen_ak"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-twitter fa-fw"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/alamin-deriv"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github fa-fw"></i>
          </a>
        </li>
        <li>
          <a
            href="mailto:alaminabdulkareem@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-envelope fa-fw"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/al-amin-abdulkareem/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin fa-fw"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};
