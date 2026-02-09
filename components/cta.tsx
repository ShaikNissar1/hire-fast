'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/80 to-primary/60">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Start with Direction.
            <br />
            Not Pressure.
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Check your job readiness before applying. Know exactly where you stand and what to do next.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-semibold group">
            Check Readiness Before Applying
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
            Learn More
          </Button>
        </div>

        <p className="text-white/70 text-sm">
          It takes just 10 minutes. No pressure. Just clarity.
        </p>
      </div>
    </section>
  )
}
