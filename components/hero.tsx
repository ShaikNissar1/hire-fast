'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 relative overflow-hidden pt-24 lg:pt-28 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <p className="text-primary font-semibold text-xs uppercase tracking-widest">
              India&apos;s First Job Readiness Platform for Freshers
            </p>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground block">
                Stop Applying Blindly.
              </span>
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent block">
                Start Applying With Confidence.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Understand your job readiness before you apply. Get clarity on where you stand,
              identify gaps, and take action in just 10 minutes.
            </p>

            {/* CTA */}
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white group rounded-xl px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Check My Job Readiness
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>

            {/* Trust Indicators */}
            <div className="pt-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3">
                {[
                  'Skill Assessment',
                  'Gap Analysis',
                  'Action Plan',
                  'Confidence Score',
                ].map((label) => (
                  <div key={label} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-xs lg:text-sm font-medium text-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="relative h-80 lg:h-[520px] flex items-center justify-center">
            {/* Soft background glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-3xl" />

            {/* Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <Image
                src="/hfp-hero.png"
                alt="Professional working on job readiness"
                width={500}
                height={500}
                className="w-full h-full object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
