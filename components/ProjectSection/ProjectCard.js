


/*
Rules for DECLARING a React component:
    - Name is capitalized
    - Takes an object ("props") as its one argument
    - Must return SOMETHING (null, empty string, elements, ...)
    - React has built-in components that return HTML elements (h1, div, span...)
    - Attribute names with dashes are camelCased (except data- & aria-)
    - We can INTERPOLATE js expressions using curly brackets
    - We interpolate attribute values and content


Rules for USING a React component:
    - Components are used (invoked) to obtain elements
    - Instead of invoking with '( )' we use '< />'
    - Arguments are passed as attributes
*/ 
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