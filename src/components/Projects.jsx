import { projects } from "../data";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="title">Projects</h2>
      <div className="title-underline"></div>
      <div className="projects-center">
        {projects.map((item, index) => {
          return (
            <a href={item.url} target="_blank" key={index} className="project">
              <img src={item.image} alt={item.title} className="img" />
              <h5>{item.title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
