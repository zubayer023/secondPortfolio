import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <section className="my-element py-20" id="skills">
        <SectionTitle text='Tech stack' />
        <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {
                skills.map((skill)=>{
                    return (
                        <div key={skill.id}>
                            <SkillsCard {...skill} />
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Skills