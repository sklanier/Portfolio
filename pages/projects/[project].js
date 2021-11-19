import { useRouter } from "next/router";
import dynamic from 'next/dynamic'
import { useState, useEffect } from "react";
import SkillCard from "../../components/AboutSection/Skills/SkillCard";
import { v4 } from 'uuid';
import { CodeBlock } from '@atlaskit/code';

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

   return (
      <section id="projectWrapper" className="bg-black h-screen">
         <Nav />
         <div className="flex mx-40 h-screen">
            <div className="w-6/12 flex items-center px-10">
               <img src={router.query.image} />
            </div>
            <div className="w-6/12 flex flex-col justify-center px-20">
               <div>
                  <h1 className="text-2xl text-white font-bold mb-10">{router.query.title}</h1>
               </div>
               <p className="text-white projectDesc">{router.query.description}</p>
               <div className="flex flex-wrap mt-10">
                  {console.log(router.query.technologies)}
                  {router.query.technologies.map((skill) => (
                     <SkillCard key={v4()} skill={skill}/>
                  ))}
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