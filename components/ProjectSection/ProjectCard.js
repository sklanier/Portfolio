import Image from 'next/image';

const ProjectCard = ({project}) => (
    
    <section>
        <div className="">
            <Image src={project.image} width="650px" height="650px"/>
            <div>
                <h2>{project.date}</h2>
                <h1>{project.title}</h1>
                <p>{project.desc}</p>
            </div>
        </div>
    </section>
);

export default ProjectCard;