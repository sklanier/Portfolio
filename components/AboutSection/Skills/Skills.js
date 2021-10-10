import { skills_data } from '../../../data/skills_data'
import SkillCard from "./SkillCard";
import { v4 } from 'uuid';

const Skills = () => (
    <section id="skills" className="flex h-10">
        {skills_data.map((skill) => (
            <SkillCard key={v4()} skill={skill}/>
        ))}
    </section>
);

export default Skills;