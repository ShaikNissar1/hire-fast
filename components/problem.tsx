'use client'

export default function Problem() {
  const problems = [
    {
      title: 'Repeated Rejections',
      description: 'Without clear feedback, it\'s hard to know what went wrong or how to improve.',
      gradient: 'from-rose-500/20 to-rose-500/5',
      accentColor: 'bg-rose-500',
    },
    {
      title: 'Skill Uncertainty',
      description: 'Not knowing if your skills are enough creates doubt before every application.',
      gradient: 'from-amber-500/20 to-amber-500/5',
      accentColor: 'bg-amber-500',
    },
    {
      title: 'Lost Confidence',
      description: 'Continuous rejection erodes motivation and affects your interview performance.',
      gradient: 'from-blue-500/20 to-blue-500/5',
      accentColor: 'bg-blue-500',
    },
  ]

  return (
    <section id="why-job-readiness" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Why Does Your First Job Feel So Hard?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            It's not about effort or talent. It's about direction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 border border-border bg-gradient-to-br ${problem.gradient} overflow-hidden group hover:border-primary/50 transition-all duration-300`}
            >
              {/* Number circle */}
              <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-full ${problem.accentColor} opacity-10 group-hover:scale-110 transition-transform duration-300`} />

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${problem.accentColor}/20 flex items-center justify-center`}>
                    <span className={`text-lg font-bold bg-gradient-to-r ${problem.gradient} bg-clip-text text-transparent`}>
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{problem.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/30 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">The Real Issue?</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Effort is not the problem. You're trying hard. The issue is clarity. Without understanding what employers want and where you stand, applying more won't help. You need direction.
          </p>
        </div>
      </div>
    </section>
  )
}
