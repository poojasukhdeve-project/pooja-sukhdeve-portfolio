export default function Home() {

  return (

    <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 min-h-screen py-20">

      {/* HERO SECTION */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 grid md:grid-cols-2 gap-10 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/images/profile.png"
            alt="Pooja Sukhdeve"
            className="w-64 rounded-xl object-cover"
          />
        </div>

        {/* Intro Section */}
        <div>

          <h1 className="text-4xl font-bold mb-4">
            Pooja Sukhdeve
          </h1>

          <p className="text-gray-700 text-lg mb-6">
            A Data Analyst and Software Developer pursuing an 
            MS in Computer Science at Boston University.  
            I build data-driven applications and scalable 
            machine learning solutions.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            <a
              href="/Pooja_Sukhdeve_Resume.pdf"
              target="_blank"
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Resume
            </a>

            <a
              href="https://www.linkedin.com/in/pooja-sukhdeve-79b897194/"
              target="_blank"
              className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-100"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
{/* KEY HIGHLIGHTS */}

<section className="max-w-6xl mx-auto mt-24 text-white">

<div className="mb-16">

<h2 className="text-5xl font-bold mb-16">
KEY <span className="text-black">HIGHLIGHTS</span>
</h2>

</div>

<div className="grid md:grid-cols-4 gap-12 text-center">

<div>
<h3 className="text-5xl font-bold">5+</h3>
<p className="text-gray-300 mt-2 text-sm">
Years Industry Experience
</p>
</div>

<div>
<h3 className="text-5xl font-bold">8+</h3>
<p className="text-gray-300 mt-2 text-sm">
AI & Software Projects
</p>
</div>

<div>
<h3 className="text-5xl font-bold">10+</h3>
<p className="text-gray-300 mt-2 text-sm">
Data Dashboards Built
</p>
</div>

<div>
<h3 className="text-5xl font-bold">3+</h3>
<p className="text-gray-300 mt-2 text-sm">
Publications & Awards
</p>
</div>

</div>

</section>


      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 mt-20">

<h2 className="text-5xl font-bold mb-6">
ABOUT <span className="text-gray-400">ME</span>
</h2>

<div className="space-y-4 text-gray-700">

<p>
📊 I’m an AI/ML Engineer and Full-Stack Software Developer with 5+ years of industry experience, 
currently pursuing a Master’s in Computer Science at Boston University (Expected May 2026). 
My work focuses on building intelligent systems, scalable software, and data-driven applications 
that transform complex data into practical insights.
</p>

<p>
🤖 I specialize in machine learning, data analytics, and cloud-native application development. 
My experience includes developing production-grade APIs, building ML pipelines, designing interactive 
dashboards, and deploying scalable systems using technologies such as Python, React, Node.js, SQL, and AWS.
</p>

<p>
🚀 Recently, I worked as a Software Developer Intern at ASVI Systems, where I built cloud-native applications 
on AWS and implemented CI/CD pipelines that improved deployment efficiency by 50%. I enjoy writing clean, maintainable 
code and designing systems that perform reliably at scale.
</p>

<p>
💡 I’m passionate about solving real-world problems using AI, data, and modern software engineering practices. 
I'm currently seeking AI/ML, software engineering, or data-focused roles where I can contribute to impactful 
products and continue growing as an engineer.
</p>

</div>

</section>

{/* TOOLS & SOFTWARE */}

<section className="max-w-6xl mx-auto mt-20 text-white">

<h2 className="text-5xl font-bold mb-16">
TOOLS & <span className="text-black">SOFTWARE</span>
</h2>

<div className="grid md:grid-cols-4 gap-12">

{/* Python */}
<div className="flex items-center gap-6">
  <div className="bg-white p-4 rounded-xl shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-python-96.png`}
      className="w-10 h-10"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Python</h3>
    <p className="text-gray-300 text-sm">Data Analysis Tool</p>
  </div>
</div>


{/* Power BI */}
<div className="flex items-center gap-6">
  <div className="bg-white p-4 rounded-xl shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-power-bi-2021-96.png`}
      className="w-10 h-10"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Power BI</h3>
    <p className="text-gray-300 text-sm">Data Visualization Tool</p>
  </div>
</div>


{/* SQL */}
<div className="flex items-center gap-6">
  <div className="bg-white p-4 rounded-xl shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-sql-96.png`}
      className="w-10 h-10"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">SQL</h3>
    <p className="text-gray-300 text-sm">Database Language</p>
  </div>
</div>


{/* Tableau */}
<div className="flex items-center gap-6">
  <div className="bg-white p-4 rounded-xl shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-tableau-software-96.png`}
      className="w-10 h-10"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Tableau</h3>
    <p className="text-gray-300 text-sm">Data Visualization Tool</p>
  </div>
</div>


{/* R */}
<div className="flex items-center gap-6">
  <div className="bg-white p-4 rounded-xl shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-r-project-96.png`}
      className="w-10 h-10"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">R</h3>
    <p className="text-gray-300 text-sm">Programming Language</p>
  </div>
</div>


{/* AWS */}
<div className="flex items-center gap-6">
  <div className="bg-white p-4 rounded-xl shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-aws-96.png`}
      className="w-10 h-10"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">AWS</h3>
    <p className="text-gray-300 text-sm">Cloud Platform</p>
  </div>
</div>

{/* React */}
<div className="flex items-center gap-6">
  <div className="bg-white p-4 rounded-xl shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-react-96.png`}
      className="w-10 h-10"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">React</h3>
    <p className="text-gray-300 text-sm">Frontend Library</p>
  </div>
</div>


{/* Node.js */}
<div className="flex items-center gap-6">
  <div className="bg-white p-4 rounded-xl shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-node-js-96.png`}
      className="w-10 h-10"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Node.js</h3>
    <p className="text-gray-300 text-sm">Backend Runtime</p>
  </div>
</div>


{/* PostgreSQL */}
<div className="flex items-center gap-6">
  <div className="bg-white p-4 rounded-xl shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-postgresql-96.png`}
      className="w-10 h-10"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">PostgreSQL</h3>
    <p className="text-gray-300 text-sm">Relational Database</p>
  </div>
</div>


{/* MongoDB */}
<div className="flex items-center gap-6">
  <div className="bg-white p-4 rounded-xl shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-mongodb-96.png`}
      className="w-10 h-10"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">MongoDB</h3>
    <p className="text-gray-300 text-sm">NoSQL Database</p>
  </div>
</div>


{/* Supabase */}
<div className="flex items-center gap-6">
  <div className="bg-white p-4 rounded-xl shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-supabase-96.png`}
      className="w-10 h-10"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Supabase</h3>
    <p className="text-gray-300 text-sm">Backend Platform</p>
  </div>
</div>


{/* Netlify */}
<div className="flex items-center gap-6">
  <div className="bg-white p-4 rounded-xl shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-netlify-96.png`}
      className="w-10 h-10"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Netlify</h3>
    <p className="text-gray-300 text-sm">Web Deployment</p>
  </div>
</div>


{/* Vercel */}
<div className="flex items-center gap-6">
  <div className="bg-white p-4 rounded-xl shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-vercel-100.png`}
      className="w-10 h-10"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Vercel</h3>
    <p className="text-gray-300 text-sm">Frontend Deployment</p>
  </div>
</div>


{/* Figma */}
<div className="flex items-center gap-6">
  <div className="bg-white p-4 rounded-xl shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-figma-100.png`}
      className="w-10 h-10"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Figma</h3>
    <p className="text-gray-300 text-sm">UI Design Tool</p>
  </div>
</div>


{/* Trello */}
<div className="flex items-center gap-6">
  <div className="bg-white p-4 rounded-xl shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-trello-96.png`}
      className="w-10 h-10"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Trello</h3>
    <p className="text-gray-300 text-sm">Project Management</p>
  </div>
</div>

</div>

</section>

{/* TECHNICAL SKILLS */}

<section className="max-w-6xl mx-auto mt-28 text-white">

<div className="mb-16">

<h2 className="text-5xl font-bold mb-16">
TECHNICAL <span className="text-black">SKILLS</span>
</h2>

</div>


<div className="grid md:grid-cols-3 gap-8">


{/* Programming */}
<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:scale-105 transition">

<h3 className="text-xl font-bold mb-6">
💻 Programming & Web
</h3>

<div className="flex flex-wrap gap-2">

<span className="skill">Python</span>
<span className="skill">JavaScript</span>
<span className="skill">TypeScript</span>
<span className="skill">SQL</span>
<span className="skill">React</span>
<span className="skill">Node.js</span>
<span className="skill">HTML</span>
<span className="skill">CSS</span>
<span className="skill">C/C++</span>

</div>

</div>


{/* Data Science */}
<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:scale-105 transition">

<h3 className="text-xl font-bold mb-6">
📊 Data Science & AI
</h3>

<div className="flex flex-wrap gap-2">

<span className="skill">Pandas</span>
<span className="skill">NumPy</span>
<span className="skill">Matplotlib</span>
<span className="skill">Seaborn</span>
<span className="skill">Scikit-learn</span>
<span className="skill">NLP</span>
<span className="skill">A/B Testing</span>
<span className="skill">Predictive Modeling</span>

</div>

</div>


{/* Cloud */}
<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:scale-105 transition">

<h3 className="text-xl font-bold mb-6">
☁️ Cloud & Tools
</h3>

<div className="flex flex-wrap gap-2">

<span className="skill">AWS</span>
<span className="skill">Supabase</span>
<span className="skill">Firebase</span>
<span className="skill">PostgreSQL</span>
<span className="skill">MongoDB</span>
<span className="skill">GitHub</span>
<span className="skill">Power BI</span>
<span className="skill">Tableau</span>

</div>

</div>

</div>

</section>

{/* FEATURED PROJECTS */}

<section className="max-w-6xl mx-auto mt-28 text-white">

<h2 className="text-5xl font-bold mb-16">
FEATURED <span className="text-black">PROJECTS</span>
</h2>

<div className="grid md:grid-cols-3 gap-10">

{/* Project 1 */}
<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl hover:scale-105 transition">

<h3 className="text-2xl font-bold mb-2">
CareVault
</h3>

<p className="text-gray-300 mb-4">
Secure caregiving management platform built with
React, Next.js, Supabase, and PostgreSQL.
</p>

<p className="text-sm text-gray-400 mb-4">
React • Supabase • PostgreSQL
</p>

<div className="flex gap-4">
<a
href="YOUR_GITHUB_LINK"
className="px-4 py-2 bg-white text-black rounded"
>
GitHub
</a>

<a
href="YOUR_LIVE_LINK"
className="px-4 py-2 border border-white rounded"
>
Live Demo
</a>
</div>

</div>


{/* Project 2 */}
<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl hover:scale-105 transition">

<h3 className="text-2xl font-bold mb-2">
Stock Momentum Analyzer
</h3>

<p className="text-gray-300 mb-4">
AI-powered stock analytics system generating
buy/sell signals using financial indicators.
</p>

<p className="text-sm text-gray-400 mb-4">
Node.js • MongoDB • React
</p>

<a
href="YOUR_GITHUB_LINK"
className="px-4 py-2 bg-white text-black rounded"
>
GitHub
</a>

</div>


{/* Project 3 */}
<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl hover:scale-105 transition">

<h3 className="text-2xl font-bold mb-2">
Chatalogue Chatbot
</h3>

<p className="text-gray-300 mb-4">
NLP-powered university assistant chatbot built
using Python and SQLite.
</p>

<p className="text-sm text-gray-400 mb-4">
Python • NLP • SQLite
</p>

<a
href="YOUR_GITHUB_LINK"
className="px-4 py-2 bg-white text-black rounded"
>
GitHub
</a>

</div>
 <div className="mt-12">
    <a
    href="/pooja-portfolio/YOUR_GITHUB_LINK#/projects"
    className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200"
    >
    View all Projects →
    </a>
    </div>


</div>

</section>

{/* WORK EXPERIENCE */}

<section className="max-w-6xl mx-auto mt-28 text-white">
<h2 className="text-5xl font-bold mb-16">
WORK <span className="text-black">EXPERIENCE</span>
</h2>

<div className="relative border-l border-white/30 ml-6 space-y-12">

{/* Experience 1 */}
<div className="ml-8">
<div className="absolute -left-3 w-6 h-6 bg-white rounded-full"></div>

<h3 className="text-xl font-semibold">
2026 — Student Consultant
</h3>

<p className="text-gray-300">
Build Fellowship – Open Avenues
</p>

<p className="text-gray-400 text-sm mt-2">
Building a fintech application (Wallet Wizard) and developing
an AI-powered text generation platform using LLMs.
</p>
</div>


{/* Experience 2 */}
<div className="ml-8">
<div className="absolute -left-3 w-6 h-6 bg-white rounded-full"></div>

<h3 className="text-xl font-semibold">
2025 — Software Developer Intern
</h3>

<p className="text-gray-300">
ASVI Systems
</p>

<p className="text-gray-400 text-sm mt-2">
Developed scalable AWS applications and CI/CD pipelines
to automate deployments and improve performance.
</p>
</div>


{/* Experience 3 */}
<div className="ml-8">
<div className="absolute -left-3 w-6 h-6 bg-white rounded-full"></div>

<h3 className="text-xl font-semibold">
2024 — Research Assistant
</h3>

<p className="text-gray-300">
Boston University
</p>

<p className="text-gray-400 text-sm mt-2">
Developing Python visualization modules for visually
impaired users using pattern-based graphics.
</p>
</div>


{/* Experience 4 */}
<div className="ml-8">
<div className="absolute -left-3 w-6 h-6 bg-white rounded-full"></div>

<h3 className="text-xl font-semibold">
2022 — Data Analyst
</h3>

<p className="text-gray-300">
Tech Zenesis
</p>

<p className="text-gray-400 text-sm mt-2">
Built Python data pipelines and Power BI dashboards,
conducted A/B testing and user analytics.
</p>
</div>

</div>


<div className="mt-12">
<a
href="/pooja-portfolio/#/experience"
className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200"
>
View Full Experience →
</a>
</div>

</section>

{/* PUBLICATIONS & EDUCATION */}

<section className="max-w-6xl mx-auto mt-28 text-white">

<h2 className="text-5xl font-bold mb-16">
ACHIEVEMENTS <span className="text-black">& EDUCATION</span>
</h2>


<div className="grid md:grid-cols-2 gap-12">


{/* Publications & Achievements */}
<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl">

<h3 className="text-2xl font-bold mb-6">
Publications & Achievements
</h3>

<ul className="space-y-4 text-gray-300">

<li>
🏆 <b>Boston University Hackathon Winner (2024)</b><br/>
Led development of a data science model delivering measurable business insights.
</li>

<li>
📚 <b>IGI Global Publication – Chapter 6</b><br/>
Implementing Augmented Reality in Immersive Virtual Learning Environments.
</li>

<li>
📚 <b>IGI Global Publication – Chapter 11</b><br/>
Research on transformational change in digital built environments.
</li>

</ul>

</div>


{/* Education */}
<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl">

<h3 className="text-2xl font-bold mb-6">
Education
</h3>

<ul className="space-y-6 text-gray-300">

<li>
🎓 <b>Boston University</b><br/>
M.S. Computer Science<br/>
GPA: 3.59 / 4.00<br/>
Expected May 2026
</li>

<li>
🎓 <b>Swami Ramanand Teerth Marathwada University</b><br/>
Bachelor of Computer Science Engineering<br/>
Graduated: June 2016
</li>

</ul>

</div>


</div>

</section>

{/* CONNECT SECTION */}

<section className="max-w-5xl mx-auto mt-28 mb-20">

<div className="bg-white rounded-2xl shadow-xl p-12 text-center">

<h2 className="text-5xl font-bold mb-4">
LET'S CONNECT
</h2>

<p className="text-gray-600 mb-10">
Explore my GitHub for projects and LinkedIn for my professional journey.
Feel free to reach out if you'd like to collaborate.
</p>


<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

{/* GitHub */}
<div className="flex flex-col items-center">
<img
src={`${import.meta.env.BASE_URL}icons/icons8-github-96.png`}
className="w-16 mb-4"
/>

<a
href="https://github.com/YOUR_GITHUB"
target="_blank"
className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
>
GitHub
</a>
</div>


{/* LinkedIn */}
<div className="flex flex-col items-center">
<img
src={`${import.meta.env.BASE_URL}icons/icons8-linkedin-96.png`}
className="w-16 mb-4"
/>

<a
href="https://linkedin.com/in/YOUR_LINKEDIN"
target="_blank"
className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
>
LinkedIn
</a>
</div>


{/* Email */}
<div className="flex flex-col items-center">
<img
src={`${import.meta.env.BASE_URL}icons/icons8-gmail-96.png`}
className="w-16 mb-4"
/>

<a
href="mailto:poojasukhdeve06@gmail.com"
className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
>
Email
</a>
</div>


{/* Resume */}
<div className="flex flex-col items-center">
<img
src={`${import.meta.env.BASE_URL}icons/icons8-resume-96.png`}
className="w-16 mb-4"
/>

<a
href="/Pooja_Sukhdeve_Resume.pdf"
target="_blank"
className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-100"
>
Resume
</a>
</div>

</div>

</div>

</section>

<footer className="bg-white py-8 mt-20">

<div className="max-w-6xl mx-auto text-center">

<p className="text-gray-600 mb-4">
© 2026 Pooja Sukhdeve. All Rights Reserved.
</p>

<div className="flex justify-center gap-6 text-gray-700">

<a
href="https://github.com/YOUR_GITHUB"
target="_blank"
className="hover:text-black"
>
GitHub
</a>

<a
href="https://linkedin.com/in/YOUR_LINKEDIN"
target="_blank"
className="hover:text-black"
>
LinkedIn
</a>

<a
href="mailto:poojasukhdeve06@gmail.com"
className="hover:text-black"
>
Email
</a>

</div>

</div>

</footer>

    </div>

  )

}