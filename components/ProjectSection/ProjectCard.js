import Link from 'next/link'

const ProjectCard = ({project}) => (
    <div className="flex-col p-5 h-projectCard">
        <Link href={`${project.title}`} as={`/projects/${project.title}`}>
            <img className="object-cover h-4/6 w-full my-auto" src={project.image}/>
        </Link>
        <h2 className="projectTitle mt-10">{project.title}</h2>
        <p className="projectDesc mt-10">{project.desc}</p>
    </div>
);

export default ProjectCard;