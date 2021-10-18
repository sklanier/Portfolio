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
    <div className="p-5">
        {console.log(project.image)}
        <img className="bg-contain justify-center" src={project.image}/>
    </div>
);

export default ProjectCard;