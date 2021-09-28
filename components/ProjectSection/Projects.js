import { project_data } from '../../data/project_data';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return(  
        <section id="projects" className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-0">
            {project_data.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </section> 
    )
};

export default Projects