export default function Contact() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-800 h-[180px] flex flex-col justify-center items-center text-white">

        <h1 className="text-6xl font-bold mb-4">
          Contact
        </h1>

        <p className="text-xl text-gray-200">
          Let’s connect and build impactful technology together
        </p>

      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-10 py-20 grid md:grid-cols-2 gap-16">

        {/* Left Side */}
        <div>

          <h2 className="text-4xl font-bold mb-6">
            Get In Touch
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-10">
            I’m always open to discussing AI projects,
            software engineering opportunities,
            research collaborations, and innovative ideas.
          </p>

          <div className="space-y-6">

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">
                Email
              </h3>

              <p className="text-gray-600">
                your-email@gmail.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">
                LinkedIn
              </h3>

              <p className="text-gray-600">
                linkedin.com/in/yourprofile
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">
                GitHub
              </h3>

              <p className="text-gray-600">
                github.com/yourgithub
              </p>
            </div>

          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white p-10 rounded-2xl shadow-md">

          <h2 className="text-3xl font-bold mb-8">
            Send Message
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-4 rounded-lg outline-none focus:border-purple-700"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-4 rounded-lg outline-none focus:border-purple-700"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-4 rounded-lg outline-none focus:border-purple-700"
            ></textarea>

            <button
              className="bg-gradient-to-r from-blue-900 to-purple-800 text-white px-8 py-4 rounded-lg w-full hover:opacity-90 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}