'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Confidence() {
  const benefits = [
    {
      number: '1',
      title: 'Daily Micro Steps',
      description: 'Progress through small, achievable improvements. Build confidence with each step.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      number: '2',
      title: 'Confidence Through Prep',
      description: 'Preparation builds confidence. Know you\'re ready before walking into the room.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      number: '3',
      title: 'Rejection Is Progress',
      description: 'Every rejection is data. Learn from feedback, not from fear. Rejection means you\'re trying.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      number: '4',
      title: 'Build Momentum',
      description: 'Each small win creates momentum. Success builds on itself.',
      color: 'from-purple-500 to-primary',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Building Confidence Step by Step
          </h2>
          <p className="text-lg text-muted-foreground whitespace-nowrap mx-auto">
            Confidence doesn't come from applications. It comes from preparation and progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${benefit.color} transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative p-6 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.number}
                  </div>
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/30 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-4 bg-white dark:bg-slate-800 rounded-xl p-6 border border-border">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">The Real Truth</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your first job isn't hard because you're not good enough. It's hard because you haven't had clarity about what to focus on. Once you know what to do, the path becomes clear. Confidence follows preparation. Let HireFast Pro guide you through that preparation.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white group mt-4">
              Find Out What to Improve
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
