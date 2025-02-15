import { links } from "./../data";
const SideNavbar = () => {
  return (
    <div className="flex gap-x-3 items-center">
      {links.map((link) => {
        const { id, href, text } = link;
        return (
          <div key={id}>
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
  );
};

export default SideNavbar;
