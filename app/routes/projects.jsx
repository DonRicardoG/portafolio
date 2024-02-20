import { useLoaderData } from "@remix-run/react";
import { getAllProjects } from "../models/projects.server";
import style from "../style/projects.css";
import images from "../images/index";
import Loader from "../components/loader";

export function meta() {
  return [
    { title: "RicardoGmz - Projects" },
    { description: "RicardoGmz - Projects Page" },
  ];
}

export async function loader() {
  const projects = await getAllProjects();

  return projects;
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
}

const Projects = () => {
  const projects = useLoaderData().data;

  return (
    <main className="second-container">
      {projects.map((project) => (
        <a
          href={project.attributes.url}
          target="_blank"
          key={project.id}
          className="project-card"
        >
          {!project.attributes.image.data.attributes.url ? (
            <Loader />
          ) : (
            <img
              src={project.attributes.image.data.attributes.url}
              alt={`Project image ${project.attributes.ProjectName}`}
              className="project-image"
            />
          )}

          <h1>{project.attributes.ProjectName}</h1>
          <p>{`${project.attributes.ProjectName.toLowerCase()
            .split(" ")
            .join("")}.com`}</p>
          <div className="logos-container">
            <p className="logo-title">
              Tech <br />
              stack
            </p>
            {project.attributes.Technology.map((tech) => (
              <img
                className="tech-logo"
                key={tech.id}
                src={images[tech.toLowerCase()]}
                alt={`${tech} logo`}
              />
            ))}
          </div>
        </a>
      ))}
    </main>
  );
};

export default Projects;
