'use client'

export default function Trust() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary dark:bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Trust and Transparency
            </h2>
            <p className="text-lg text-muted-foreground">
              We're clear about what we do and don't do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-border space-y-4">
              <h3 className="text-xl font-bold text-foreground">What We Don't Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span className="text-muted-foreground">Guarantee jobs or placements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span className="text-muted-foreground">Offer instant placements or shortcuts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span className="text-muted-foreground">Judge or label candidates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span className="text-muted-foreground">Make false promises</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-primary/30 space-y-4">
              <h3 className="text-xl font-bold text-foreground">What We Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Provide honest assessment and feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Give personalized guidance on improvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Show you where readiness comes from</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Support you in building confidence</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20 space-y-4">
            <h3 className="text-xl font-bold text-foreground">The Bottom Line</h3>
            <p className="text-muted-foreground leading-relaxed">
              Readiness improves with effort. We show you what to focus on. You do the work. The result? Confidence, clarity, and a real shot at landing your dream job.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
