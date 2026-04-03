
function ProjectCard({project}){
    return(
        <article className="project">
            <img src={project.image} alt={project.alt} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
                {project.tech.map(techItem => <li key={techItem}>{techItem}</li>)}
            </ul>
            <a href={project.demoLink} className="project_link" target="_blank" rel="noreferrer">View Demo</a>
            <a href={project.gitLink} className="project_link" target="_blank" rel="noreferrer">GitHub</a>
            
        </article>
    )
}
export default ProjectCard