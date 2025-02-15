import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle';


const About = () => {
  return (
    <section className=' bg-white py-20' id='about'>
        <div className='my-element grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg} className='w-full h-64'  />
            <article>
                <SectionTitle text='code and coffe' />
                <p className='text-slate-600 mt-8  leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit, distinctio illum ducimus a autem dignissimos inventore accusantium cum ipsum error dolore sed omnis provident quam architecto nemo odit numquam?</p>
            </article>
            
        </div>

    </section>
  )
}

export default About