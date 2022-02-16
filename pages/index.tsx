import Layout from "../components/Layout";
import { project_data } from "../data/project_data";

const Index = () => <Layout></Layout>;

export default Index;

export async function getStaticProps() {
    const data = project_data;
    return {
        props: {
            project_data
        }
    }
}