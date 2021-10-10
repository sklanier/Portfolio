import { skills_data } from '../../../data/skills_data'
import SkillCard from "./SkillCard";

const Skills = () => (
    <section id="skills" className="flex h-10">
        {skills_data.forEach((skill) => (  
            <SkillCard skill={skill}/>
        ))}
    </section>
);

export default Skills;