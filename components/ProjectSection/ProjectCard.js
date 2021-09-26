import Image from 'next/image';

const ProjectCard = ({project}) => (
    
    <div style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: 'contain',
        height: '635px',
        width: '635px'
    }}>

    </div>
);

export default ProjectCard;