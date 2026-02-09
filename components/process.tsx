'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      title: 'Take the Assessment',
      description:
        "Answer honest questions about your aptitude, fundamentals, and work readiness. This isn't an exam. It's a checkpoint.",
    },
    {
      title: 'See Your Job Readiness Score',
      description:
        'Get a clear, easy-to-understand readiness status. Know exactly where you stand and what it means for your career.',
    },
    {
      title: 'Improve Through Micro Learning',
      description:
        'Get personalized recommendations to build skills and meet the requirements for your dream role.',
    },
    {
      title: 'Apply When Ready',
      description:
        "Once you're ready, apply with confidence. You'll know you're prepared, and employers will see it.",
    },
  ]

  return (
    <section
      id="how-it-works"
      className="scroll-mt-16 pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-secondary dark:bg-card"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 space-y-3">
          <h3 className="text-4xl sm:text-5xl font-bold text-foreground">
            How HireFast Pro Works
          </h3>
          <p className="text-lg text-muted-foreground">
            A clear, straightforward process to build your readiness and apply with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Timeline */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 rounded-full" />
                    <div className="relative w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-10 bg-gradient-to-b from-primary to-primary/20 mt-1" />
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-snug">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right visual */}
          <div className="relative h-[380px] rounded-2xl overflow-hidden hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                    <CheckCircle className="text-primary" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground">
                  Take the first step towards clarity
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group">
            Start Assessment
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </Button>
        </div>
      </div>
    </section>
  )
}
