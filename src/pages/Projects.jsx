import projects from "../data/projects";

export default function Projects() {
  return (
    <div>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 py-14 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Projects
        </h1>

        <p className="text-gray-300 mt-2">
          Some of my recent work
        </p>
      </div>

      {/* PROJECT SECTION */}
      <div className="bg-gray-50 py-20">
        <section className="max-w-6xl mx-auto px-6">

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100"
              >

                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-2xl h-40 w-full object-cover"
                />

                {/* CONTENT */}
                <div className="p-6">

                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* TECH TAGS */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-3">

                    <a
                      href={project.demo}
                      target="_blank"
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition"
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
                    >
                      GitHub
                    </a>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </section>
      </div>

    </div>
  );
}