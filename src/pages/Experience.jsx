import { experiences } from "../data/experience";

export default function Experience() {

  // Split Experiences Into Two Columns
  const leftExperiences = experiences.slice(0, 4);
  const rightExperiences = experiences.slice(4, 7);

  return (

    <div className="bg-gradient-to-b from-gray-100 to-slate-200 min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 py-14 text-center">

        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white leading-tight">
          WORK EXPERIENCE
        </h1>

        <p className="text-gray-300 mt-2">
          Professional experience and industry contributions
        </p>

      </div>

      {/* EXPERIENCE SECTION */}
      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-2 gap-20">

          {/* LEFT COLUMN */}
          <div className="relative">

            {/* Vertical Timeline Line */}
            <div className="absolute left-10 top-0 h-full w-[2px] bg-blue-300"></div>

            <div className="space-y-10">

              {leftExperiences.map((exp, index) => (

                <div
                  key={index}
                  className="relative flex gap-8"
                >

                  {/* Number + Dot */}
                  <div className="relative flex flex-col items-center min-w-[50px]">

                    {/* Number */}
                    <span className="text-4xl font-bold text-blue-700">
                      {index + 1}
                    </span>

                    {/* Timeline Dot */}
                    <div className="absolute top-14 w-6 h-6 bg-blue-700 border-4 border-white rounded-full shadow-lg"></div>

                  </div>

                  {/* EXPERIENCE CARD */}
                  <div className="flex-1 bg-white rounded-2xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300">

                    {/* HEADER */}
                    <div>

                      {/* Role */}
                      <h2 className="text-2xl font-bold text-black mb-3">
                        {exp.role}
                      </h2>

                      {/* Company + Line + Duration */}
                      <div className="flex items-center gap-3 flex-wrap">

                        {/* Company */}
                        <p className="text-blue-700 italic text-base whitespace-nowrap">
                          {exp.company}
                        </p>

                        {/* Line */}
                        <div className="flex-1 h-[1px] bg-gray-300 min-w-[40px]"></div>

                        {/* Duration */}
                        <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm whitespace-nowrap">
                          {exp.duration}
                        </div>

                      </div>

                    </div>

                    {/* BULLET POINTS */}
                    <ul className="list-disc pl-6 mt-5 space-y-2 text-gray-700 text-base leading-6">

                      {exp.points.map((point, i) => (
                        <li key={i}>
                          {point}
                        </li>
                      ))}

                    </ul>

                    {/* SKILLS */}
                    <div className="flex flex-wrap gap-3 mt-5">

                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="relative">

            {/* Vertical Timeline Line */}
            <div className="absolute left-10 top-0 h-full w-[2px] bg-blue-300"></div>

            <div className="space-y-10">

              {rightExperiences.map((exp, index) => (

                <div
                  key={index}
                  className="relative flex gap-8"
                >

                  {/* Number + Dot */}
                  <div className="relative flex flex-col items-center min-w-[50px]">

                    {/* Number */}
                    <span className="text-4xl font-bold text-blue-700">
                      {index + 5}
                    </span>

                    {/* Timeline Dot */}
                    <div className="absolute top-14 w-6 h-6 bg-blue-700 border-4 border-white rounded-full shadow-lg"></div>

                  </div>

                  {/* EXPERIENCE CARD */}
                  <div className="flex-1 bg-white rounded-2xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300">

                    {/* HEADER */}
                    <div>

                      {/* Role */}
                      <h2 className="text-2xl font-bold text-black mb-3">
                        {exp.role}
                      </h2>

                      {/* Company + Line + Duration */}
                      <div className="flex items-center gap-3 flex-wrap">

                        {/* Company */}
                        <p className="text-blue-700 italic text-base whitespace-nowrap">
                          {exp.company}
                        </p>

                        {/* Line */}
                        <div className="flex-1 h-[1px] bg-gray-300 min-w-[40px]"></div>

                        {/* Duration */}
                        <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm whitespace-nowrap">
                          {exp.duration}
                        </div>

                      </div>

                    </div>

                    {/* BULLET POINTS */}
                    <ul className="list-disc pl-6 mt-5 space-y-2 text-gray-700 text-base leading-6">

                      {exp.points.map((point, i) => (
                        <li key={i}>
                          {point}
                        </li>
                      ))}

                    </ul>

                    {/* SKILLS */}
                    <div className="flex flex-wrap gap-3 mt-5">

                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}