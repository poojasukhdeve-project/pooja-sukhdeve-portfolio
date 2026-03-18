export default function Resume() {

  return (

    <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 min-h-screen py-20">

      <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-12">

        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">
          Resume
        </h1>

        <p className="text-gray-600 mb-6">
          AI/ML Engineer and Full-Stack Developer with experience in
          machine learning, cloud systems, and data analytics.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-12">

          <a
            href="/Pooja_Sukhdeve_Resume.pdf"
            target="_blank"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Download Resume
          </a>

          <a
            href="https://linkedin.com/in/pooja-sukhdeve-79b897194/"
            target="_blank"
            className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100"
          >
            LinkedIn
          </a>

        </div>


        {/* Key Highlights */}
        <h2 className="text-3xl font-bold mb-8">
          Key Highlights
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {/* Education */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">
             🎓 Education
            </h3>
            <p className="text-gray-600 text-sm">
              MS Computer Science  
              <br />
              Boston University
            </p>
          </div>

          {/* Experience */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">
              💼 Experience
            </h3>
            <p className="text-gray-600 text-sm">
              5+ Years in Software Development & Data Analytics
            </p>
          </div>

          {/* Achievement */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">
              🏆Achievement
            </h3>
            <p className="text-gray-600 text-sm">
              Winner – Boston University Hackathon 2024
            </p>
          </div>

          {/* Publications */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">
              📚 Publications
            </h3>
            <p className="text-gray-600 text-sm">
              2 Research Publications – IGI Global
            </p>
          </div>

        </div>

      </section>

    </div>

  )
}