import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="my-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I&lsquo;m John</h1>

          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Font-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="w-8 h-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="w-8 h-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="w-8 h-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
