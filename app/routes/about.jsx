import style from "../style/about.css";
import background from "../../public/img/front-end.webp";

export function meta() {
  return [
    { title: "RicardoGmz - About" },
    { description: "RicardoGmz - About Page" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
}

const About = () => {
  return (
    <main className="about-container second-container">
      <h1>Hey There!</h1>
      <p>
        I'm Ricardo, a Full Stack Developer with a focus on Front End
        development. <br />
        <br />
        Throughout my experience, I have honed my skills in React JS, Node JS,
        Express, and PostgreSQL, showcasing proficiency in agile methodologies,
        GIT, and various CSS and HTML frameworks. <br />
        <br /> My commitment to staying abreast of technological advancements
        reflects my adaptability and eagerness to contribute effectively to any
        development team or project.
      </p>
      <img src={background} alt="background image" />
    </main>
  );
};

export default About;
