import { project_data } from "../../data/project_data"

const post = project_data[0]

export default function MyDynamicPage({ post }) {
   console.log(project_data[0])
   console.log({post})
   return <div>My example is {project_data[0].title}</div>
 }
 
 MyDynamicPage.getInitialProps = ({ query: { post } }) => {
   return { post }
 }