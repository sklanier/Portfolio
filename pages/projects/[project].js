import { useRouter } from "next/router";

const Project = () => {
    const router = useRouter();
    const { title } = router.query;
    return (
        <div>
        <h1>{title}</h1>
        </div>
    );
}

export default Project;