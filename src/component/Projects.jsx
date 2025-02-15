
import ProjectCard from './ProjectCard';
import { projects } from './../data';
import SectionTitle from './SectionTitle';



const Projects = () => {
  return (
    <section className='my-element py-20' id='projects'>
        <SectionTitle text='web creations' />
        <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
            {
                projects.map((project)=>{
                    return(
                        <div key={project.id}>
                           <ProjectCard {...project} />
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Projects