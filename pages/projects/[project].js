import { useRouter } from "next/router";
import dynamic from 'next/dynamic'
import { useState, useEffect } from "react";

const Nav = dynamic(() => import('../../components/Nav'), { ssr: false });

if (typeof window !== 'undefined') {
const [project] = useState(localStorage.getItem('project'));
}

function ProjectPage() {
   const router = useRouter();
   
   if (typeof window !== 'undefined') {
   useEffect(() => {
      
         localStorage.setItem('project', router.query.project);
   }, [router.query.project]);
   }

   return (
      <section id="projectWrapper" className="bg-black h-screen">
         <Nav />
         <div className="flex mx-40 h-screen">
            <div className="w-6/12 flex items-center px-10">
               <img src={project.image} />
            </div>
            <div className="w-6/12 flex flex-col justify-center px-20">
               <div>
                  <h1 className="text-2xl text-white font-bold mb-10">{project.title}</h1>
               </div>
               <p className="text-white projectDesc">{project.description}</p>
            </div>
         </div>
      </section>
   );
}

export default ProjectPage;