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
import router, { useRouter } from 'next/router'

const ProjectCard = ({project}) => (
    <div className="flex-col p-5 h-projectCard">
        <Link href={project.id}>
            <img className="object-cover h-4/6 w-full my-auto" src={project.image}/>
        </Link>
        <h2 className="projectTitle mt-10">{project.title}</h2>
        <p className="projectDesc mt-10">{project.desc}</p>
    </div>
);

export default ProjectCard;

const Link = ({ children, href }) => {
    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault()
                router.push(href)
            }}
        >
            {children}
            <style jsx>{`
                a {
                    margin-right: 10px
                }
            `}</style>
        </a>
    )
}