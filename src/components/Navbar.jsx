import { NavLink } from "react-router-dom";

export default function Navbar() {

  const linkClass = ({ isActive }) =>
    `px-6 py-3 border-l border-gray-400 text-sm font-semibold ${
      isActive
        ? "bg-black text-white"
        : "bg-[#e6dccd] text-black hover:bg-[#d9cfbe]"
    }`;

  return (
    <nav className="bg-white border-b border-gray-300">

      <div className="max-w-7xl mx-auto flex justify-between items-center py-6">

        {/* Logo */}
        <div className="text-2xl font-bold leading-tight">
          <div className="border-b-2 border-black w-fit">POOJA</div>
          <div className="border-b-2 border-black w-fit">SUKHDEVE</div>
        </div>

        {/* Menu */}
        <div className="flex border border-gray-400">

          <NavLink to="/" className={linkClass}>
            ABOUT ME
          </NavLink>

          <NavLink to="/resume" className={linkClass}>
            RESUME
          </NavLink>

          <NavLink to="/projects" className={linkClass}>
            PROJECTS
          </NavLink>

          <NavLink to="/experience" className={linkClass}>
            EXPERIENCE 
          </NavLink>

          <NavLink to="/certificates" className={linkClass}>
            CERTIFICATES
          </NavLink>

          <NavLink to="/publications" className={linkClass}>
            PUBLICATIONS
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            CONTACT
          </NavLink>

        </div>

      </div>

    </nav>
  );
}