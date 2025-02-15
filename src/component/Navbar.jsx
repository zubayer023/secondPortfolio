import { useState } from "react";
import { links } from "./../data";
import { FiAlignLeft } from "react-icons/fi";
import SideNavbar from "./SideNavbar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-emerald-100 pb-8 relative">
      <div className=" my-element py-4 sm:py-4 flex justify-between items-center">
        <div className=" flex flex-col sm:flex-row sm:items-center sm:gap-x-16 ">
          <h2 className="text-3xl font-bold flex items-center">
            Web<span className="text-emerald-600">Dev</span>
          </h2>

          <div className="flex gap-x-3 absolute py-10 sm:pl-50">
            {toggle ? <SideNavbar /> : null}
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <div key={id} className="hidden sm:block">
                  <a
                    href={href}
                    className="capitalize text-lg -tracking-wide hover:text-emerald-600 duration-300"
                  >
                    {text}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div
          onClick={() => setToggle(!toggle)}
          className="items-center sm:hidden"
        >
          <FiAlignLeft className="text-2xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
