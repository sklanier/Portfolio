import Image from 'next/image';

const ProjectCard = ({project}) => (
    
    <section>
        <div className="grid lg:grid-cols-3">
            <Image src={project.image} width="200px" height="200px"/>
            <div>
                <h2>{project.date}</h2>
                <h1>{project.title}</h1>
                <p>{project.desc}</p>
            </div>
        </div>
    </section>
);

export default ProjectCard;