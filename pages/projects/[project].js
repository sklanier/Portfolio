import { useRouter } from "next/router";
import dynamic from 'next/dynamic'

const Nav = dynamic(() => import('../../components/Nav'), { ssr: true });

const ProjectPage = () => {
   const router = useRouter();
   return (
      <section id="projectWrapper" className="bg-black h-screen">
         <Nav/>
         <div className="flex mx-40 h-screen">
            <div className="w-6/12 flex items-center px-20">
               <img src={router.query.image}/>
            </div>

            <div className="w-6/12">
               <h1 className="text-2xl font-bold">{router.query.title}</h1>
               <p>{router.query.description}</p>
            </div>
         </div>
      </section>
   );
}

export default ProjectPage;