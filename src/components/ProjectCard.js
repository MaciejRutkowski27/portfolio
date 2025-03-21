import Buttonblank from "./buttonblank";
export default function ProjectCard({project}) {
    return (
      <div className="project-card">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <div className="project-content">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            {project.linkToGithub && (
              <Buttonblank text="GitHub" to={project.linkToGithub}/>
            )}
            {project.linkToFigma && (
              <Buttonblank text="Figma" to={project.linkToFigma}/>
            )}
          </div>
        </div>
      </div>
    );
}