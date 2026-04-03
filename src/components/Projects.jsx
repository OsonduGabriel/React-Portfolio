import ProjectCard from "./ProjectCard"
import { projects } from "../data/portfolioData"

function Projects(){
    return(
        <section id="project">
            <h2><span className="underline_text">Projects</span></h2>
            <div className="details">
                <div className="project_box">
                    {projects.map(project => <ProjectCard key={project.id} project={project} />)}
                </div>
            </div>
        </section>
    )
}
export default Projects