import { experiences } from "../data/experience";

export default function Experience() {

return (

<div>

{/* HEADER */}
<div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 py-24 text-center">

<h1 className="text-5xl font-bold text-white">
Work Experience
</h1>

<p className="text-gray-200 mt-3">
Professional experience and industry contributions
</p>

</div>


{/* EXPERIENCE SECTION */}
<div className="bg-slate-100 py-20">

<section className="max-w-6xl mx-auto px-8">

{experiences.map((exp, index) => (

<div key={index} className="mb-16">

{/* Role + Company + Date */}
<div className="flex justify-between items-start">

<div>
<h2 className="text-xl font-semibold">
{exp.role}
</h2>

<p className="text-gray-700 italic">
{exp.company}
</p>
</div>

<p className="text-gray-600 text-sm">
{exp.duration}
</p>

</div>


{/* Bullet Points */}
<ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">

{exp.points.map((point, i) => (
<li key={i}>{point}</li>
))}

</ul>

<hr className="mt-10 border-gray-400"/>

</div>

))}

</section>

</div>

</div>

);
}