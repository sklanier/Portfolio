import Overlay from '../Overlay';

const ProjectCard = ({project}) => (
    
    <div style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: 'contain',
        height: '635px',
        width: '635px'
    }}>
        <Overlay/>

    </div>
);

export default ProjectCard;