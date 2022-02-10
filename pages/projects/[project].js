import dynamic from 'next/dynamic'
import { useState, useEffect } from "react";
import SkillCard from "../../components/AboutSection/Skills/SkillCard";
import { v4 } from 'uuid';
import { CodeBlock } from '@atlaskit/code';
import { project_data } from "../../data/project_data";
import { useRouter } from 'next/dist/client/router';

const Nav = dynamic(() => import('../../components/Nav'), { ssr: false });
const PostFooter = dynamic(() => import('../../components/FooterSection/PostFooter'), { ssr: false });



const codeText = `// React Component
class HelloMessage extends React.Component {
   render() {
      return (
         <div>
         Hello {this.props.name}
         </div>
      );
   }
   }

   ReactDOM.render(
   <HelloMessage name="Taylor" />,
   mountNode
);

 


`;
const Code = () => {
   return <CodeBlock language="jsx" text={codeText}/>;
};

const ProjectPage = () => {
   const router = useRouter();
   console.log(router.asPath);
   const [project]  = useState(project_data.find(project => project.title === router.query.title));
   
   return (
      
      <section id="projectWrapper" className="bg-black h-screen">
         <Nav/>
         <div className="flex mx-40 h-screen">
            <div className="w-6/12 flex items-center px-10">
               <img src={project[props].image} />
            </div>
            <div className="w-6/12 flex flex-col justify-center px-20">
               <div>
                  <h1 className="text-2xl text-white font-bold mb-10">{project[props].title}</h1>
               </div>
               <p className="text-white projectDesc">{project[props].desc}</p>
               <div className="flex flex-wrap mt-10">
                  
               </div>
            </div>
         </div>
         <div className="bg-black">
            <div className="w-12/12 p-44 -mt-60 bg-black">
               <Code/>
            </div>
         </div>
         <PostFooter/>
      </section>
   );
}

export default ProjectPage;