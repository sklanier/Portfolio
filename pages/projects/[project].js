import { useRouter } from "next/router";
import dynamic from 'next/dynamic'

const Nav = dynamic(() => import('../../components/Nav'), { ssr: false });

const ProjectPage = () => {
   const router = useRouter();
   return (
      <section id="projectWrapper" className="bg-black h-screen">
         <Nav/>
         <div className="flex mx-40 h-screen">
            <div className="w-6/12 flex items-center px-10">
               <img src={router.query.image}/>
            </div>
            <div className="w-6/12 flex flex-col justify-center px-20">
               <div>
                  <h1 className="text-2xl text-white font-bold mb-10">{router.query.title}</h1>
               </div>
               <p className="text-white projectDesc">{router.query.description}</p>
            </div>
         </div>
      </section>
   );
}

export default ProjectPage;