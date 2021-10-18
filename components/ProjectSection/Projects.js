import { project_data } from '../../data/project_data';
import ProjectCard from './ProjectCard';

const Projects = () => (
    <section id="projects" className="bg-black px-28">
        <div className="flex justify-around aboutTitle">
            <h1 className="pt-4">projects</h1>
            <hr className="w-8/12 mt-16"/>
            <h2 className="pt-4">my github</h2>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-0">
            {project_data.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    </section> 
);

export default Projects