import { project_data } from '../../data/project_data';
import ProjectCard from './ProjectCard';

export const getStaticProps = async () => {
    return {
        props: {
            projects: project_data,
        },
    };
};


const Projects = ({ projects }) => (
    <section id="projects" className="bg-black px-28 -mt-10 pt-10">
        <div className="flex justify-between aboutTitle py-8 px-4">
            <h1 className="pt-4">projects</h1>
            <hr className="w-8/12 mt-16"/>
            <div className="flex w-1/6">
                <img className="w-2/12" src="assets/img/Github-icon.svg"/>
                <h2 className="pt-8 text-2xl">See my Github</h2>
            </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-0">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    </section>
);

export default Projects