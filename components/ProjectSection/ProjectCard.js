import Image from 'next/image';

const ProjectCard = ({project}) => (
    <Image src={project.image} width="650px" height="650px"/>
);

export default ProjectCard;