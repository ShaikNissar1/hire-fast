'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function ReadinessScore() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Your Job Readiness Score
              </h2>
              <p className="text-lg text-muted-foreground">
                A clear, easy-to-understand metric that reflects your applied skills and interview preparedness.
              </p>
            </div>

            <div className="space-y-6 bg-white dark:bg-slate-800 rounded-xl p-8 border border-border">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">What It Measures</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    <span>Technical and soft skills alignment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    <span>Interview preparedness level</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    <span>Real-world application readiness</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-primary font-semibold">We give direction. You build readiness.</p>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group">
              Get My Job Readiness Score
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 lg:h-[450px] rounded-2xl overflow-hidden group">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/40 to-primary/10" />

            {/* Score visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-8 text-center relative z-10">
                {/* Score circle */}
                <div className="relative w-48 h-48 mx-auto">
                  <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="none"
                      stroke="white"
                      strokeWidth="12"
                      strokeDasharray="283"
                      strokeDashoffset="70"
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-white">72</span>
                    <span className="text-white/80 text-sm">out of 100</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-white font-semibold">Ready for the Interview</p>
                  <p className="text-white/70 text-sm">You're on track. Keep practicing.</p>
                </div>
              </div>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
