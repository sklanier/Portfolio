import { useRouter } from "next/router";

export default function ProjectPage() {
   const router = useRouter();
   return (
      <div className="flex-1">
         <div className="w-6/12">
            <img src={router.query.image}/>
         </div>
         
         <div className="w-6/12">
            <h1 className="text-2xl font-bold">{router.query.title}</h1>
            <p>{router.query.description}</p>
         </div>
      </div>
   );
}