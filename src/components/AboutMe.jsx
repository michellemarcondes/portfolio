export default function AboutMe() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div className="card p-4 md:p-6">
        <img src="/sobre mim img.jpg" alt="About" className="rounded-lg" />
      </div>
      <div className="space-y-4">
        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-50/20 text-sm">About me</span>
        <h2 className="section-title">Curious about me? Here you have it:</h2>
        <p className="text-gray-600 dark:text-dark-200">I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).</p>
        <p className="text-gray-600 dark:text-dark-200">I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer.</p>
        <ul className="grid grid-cols-2 gap-2 text-sm list-disc pl-5">
          <li>B.E. in Computer Engineering</li>
          <li>Avid learner</li>
          <li>Full time freelancer</li>
          <li>Aspiring indie hacker</li>
        </ul>
      </div>
    </div>
  )
}
