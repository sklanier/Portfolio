import { project_data } from '../data/project_data';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return(
        <div className="">
            {project_data.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    )
};

export default Projects