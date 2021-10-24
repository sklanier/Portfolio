import { useRouter } from "next/router";

const Project = () => {
    const router = useRouter();
    const { project, title } = router.query; // Destructuring our router object

    return (
        <>
        <h2>
            {title} is placed in {project}
        </h2>
        </>
    );
};

export default Project;
