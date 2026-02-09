'use client'

import { useEffect } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Evidence from '@/components/evidence'
import Problem from '@/components/problem'
import Approach from '@/components/approach'
import ReadinessScore from '@/components/readiness-score'
import Process from '@/components/process'
import Confidence from '@/components/confidence'
import Trust from '@/components/trust'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Page() {
  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Evidence />
      <Problem />
      <Approach />
      <ReadinessScore />
      <Process />
      <Confidence />
      <Trust />
      <CTA />
      <Footer />
    </div>
  )
}
