import projects from "./projects.json"
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
 

  return (
    <>
      <section id="projects" style={{marginLeft: "5vw", marginRight: "5vw"}}>
        <div className="project-list-container">
          <h1 className="heading2">My Projects</h1>
          <div className="project-list">
            {projects.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
