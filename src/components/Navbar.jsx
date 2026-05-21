import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-6 py-4 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "bg-black text-white"
        : "bg-[#e6dccd] text-black hover:bg-[#d9cfbe]"
    }`;

  return (

    <nav className="bg-white border-b border-gray-300 sticky top-0 z-50 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="flex justify-between items-center py-4">

          {/* LOGO */}
          <div className="text-xl md:text-2xl font-extrabold leading-tight">

            <div className="border-b-2 border-black w-fit">
              POOJA
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              SUKHDEVE
            </div>

          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex border border-gray-400 rounded-lg overflow-hidden shadow-sm">

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

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {
              menuOpen
                ? <X size={32} />
                : <Menu size={32} />
            }
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {
        menuOpen && (

          <div className="md:hidden bg-white border-t border-gray-300 shadow-lg">

            <div className="flex flex-col">

              <NavLink
                to="/"
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                ABOUT ME
              </NavLink>

              <NavLink
                to="/resume"
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                RESUME
              </NavLink>

              <NavLink
                to="/projects"
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                PROJECTS
              </NavLink>

              <NavLink
                to="/experience"
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                EXPERIENCE
              </NavLink>

              <NavLink
                to="/certificates"
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                CERTIFICATES
              </NavLink>

              <NavLink
                to="/publications"
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                PUBLICATIONS
              </NavLink>

              <NavLink
                to="/contact"
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                CONTACT
              </NavLink>

            </div>

          </div>

        )
      }

    </nav>

  );

}