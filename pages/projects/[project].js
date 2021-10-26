import { useRouter } from "next/router";

export default function ProjectPage() {
   const router = useRouter();
   return (
      <section id="projectWrapper" className="bg-black h-screen">
         <div className="flex mx-20 h-screen">
            <div className="w-6/12 flex items-center">
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