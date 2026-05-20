import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaChevronRight
} from "react-icons/fa";

export default function Contact() {

  return (

    <div className="bg-[#f3f4f6] min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-800 py-14 flex flex-col justify-center items-center text-white">

        <h1 className="text-5xl font-bold mb-3">
          Contact
        </h1>

        <p className="text-base md:text-lg text-gray-200">
          Let’s connect and build impactful technology together
        </p>

      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-14">

        {/* LEFT SIDE */}
        <div>

          {/* HEADING */}
          <h2 className="text-4xl font-bold mb-5 text-black">
            Get In Touch
          </h2>

          {/* DESCRIPTION */}
          <p className="text-lg text-gray-700 leading-9 mb-10">

            I’m always open to discussing AI projects,
            software engineering opportunities,
            research collaborations, and innovative ideas.

          </p>

          {/* CONTACT CARDS */}
          <div className="space-y-5">

            {/* EMAIL CARD */}
            <a
              href="mailto:poojasukhdeve06@gmail.com"
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
            >

              <div className="flex items-center gap-5">

                {/* ICON */}
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">

                  <FaEnvelope className="text-3xl text-blue-700" />

                </div>

                {/* TEXT */}
                <div>

                  <h3 className="text-2xl font-bold text-black">
                    Email
                  </h3>

                  <p className="text-lg text-black mt-1">
                    poojasukhdeve06@gmail.com
                  </p>

                  <p className="text-base text-gray-500 mt-1">
                    Send me an email anytime
                  </p>

                </div>

              </div>

              {/* ARROW */}
              <FaChevronRight className="text-2xl text-gray-500" />

            </a>

            {/* LINKEDIN CARD */}
            <a
              href="https://www.linkedin.com/in/pooja-sukhdeve-79b897194/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
            >

              <div className="flex items-center gap-5">

                {/* ICON */}
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">

                  <FaLinkedin className="text-3xl text-blue-700" />

                </div>

                {/* TEXT */}
                <div>

                  <h3 className="text-2xl font-bold text-black">
                    LinkedIn
                  </h3>

                  <p className="text-lg text-black mt-1">
                    Connect with me professionally
                  </p>

                  <p className="text-base text-gray-500 mt-1">
                    Let’s connect and build a network
                  </p>

                </div>

              </div>

              {/* ARROW */}
              <FaChevronRight className="text-2xl text-gray-500" />

            </a>

            {/* GITHUB CARD */}
            <a
              href="https://github.com/poojasukhdeve-project?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
            >

              <div className="flex items-center gap-5">

                {/* ICON */}
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">

                  <FaGithub className="text-3xl text-black" />

                </div>

                {/* TEXT */}
                <div>

                  <h3 className="text-2xl font-bold text-black">
                    GitHub
                  </h3>

                  <p className="text-lg text-black mt-1">
                    Explore my projects and repositories
                  </p>

                  <p className="text-base text-gray-500 mt-1">
                    Check out my work on GitHub
                  </p>

                </div>

              </div>

              {/* ARROW */}
              <FaChevronRight className="text-2xl text-gray-500" />

            </a>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-10 rounded-3xl shadow-md">

          {/* FORM HEADING */}
          <h2 className="text-4xl font-bold mb-8 text-black">
            Send Message
          </h2>

          {/* FORM */}
          <form className="space-y-6">

            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-4 rounded-xl text-base outline-none focus:border-purple-700"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-4 rounded-xl text-base outline-none focus:border-purple-700"
            />

            {/* MESSAGE */}
            <textarea
              rows="7"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-4 rounded-xl text-base outline-none focus:border-purple-700"
            ></textarea>

            {/* BUTTON */}
            <button
              className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-4 rounded-xl w-full hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-3 text-xl font-semibold"
            >

              <FaPaperPlane />

              Send Message

            </button>

          </form>

        </div>

      </div>

    </div>

  );
}