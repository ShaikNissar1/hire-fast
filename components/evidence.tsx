'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Evidence() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image - Illustration */}
          <div className="relative h-80 lg:h-[500px] flex items-center justify-center order-2 lg:order-1">
            {/* Subtle background glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent blur-3xl" />
            
            {/* Illustration with shadow */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <Image
                src="/proof-effectiveness.png"
                alt="Candidate achieving success with 40% growth"
                width={450}
                height={450}
                className="w-full h-full object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Section Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Proof of Effectiveness
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg">
                In real-world use, 40% of candidates who completed the assessment and followed our guidance secured jobs within 6 months. This isn't a guarantee. It's evidence of what clarity and focused preparation can achieve.
              </p>
            </div>

            {/* Cards Container */}
            <div className="space-y-4">
              {/* Why This Matters Card */}
              <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">Why This Matters</h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  These outcomes changed because candidates understood exactly what employers look for. They improved with clarity and executed with confidence.
                </p>
              </div>

              {/* Not a Shortcut Card */}
              <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">Not a Shortcut</h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  Success required effort, practice, and persistence. Our platform shows you the path. You walk it.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group rounded-xl px-8 py-6 text-base font-semibold w-full lg:w-fit shadow-lg hover:shadow-xl transition-all">
              See How Readiness Is Measured
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
