import { GoArrowUp } from "react-icons/go";
const Footer = () => {
  return (
    <footer className="bg-emerald-100" >
      <div className="my-element flex items-center justify-center py-8">
        <article>
         
            <div className="flex items-center justify-center">
            <a  className="text-xl text-emerald-600" href="#">
              <GoArrowUp  />
            </a>
            <p>back to top</p>

            </div>
         
          <p className="text-lg text-center">
            © 2025 <a href="https://www.webdev.com">WebDev</a>. All Rights
            Reserved.
          </p>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
