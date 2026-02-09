'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Approach() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-primary/2 to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Direction Before Applications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We reverse the typical apply-first approach. Understand yourself before the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Our Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                HireFast Pro helps you understand your job readiness before you apply. No judgment. No labeling. Only guidance.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  label: 'Assessment',
                  description: 'Understand your current readiness level with a comprehensive assessment.',
                },
                {
                  label: 'Insights',
                  description: 'Get clear insights into your strengths and areas for improvement.',
                },
                {
                  label: 'Guidance',
                  description: 'Receive personalized guidance on what to focus on next.',
                },
                {
                  label: 'Progress',
                  description: 'Track your improvement and build confidence step by step.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/20">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{item.label}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white group">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-white/20">→</div>
                <h3 className="text-2xl font-bold text-white">From Uncertainty to Clarity</h3>
                <p className="text-white/70">One step at a time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
