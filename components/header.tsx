'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/theme-toggle'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Image
              src="/hirefast-logo.png"
              alt="HireFast Logo"
              width={180}
              height={75}
              className="h-16 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#why-job-readiness" className="text-foreground hover:text-primary transition-colors">
              Why Job Readiness
            </a>
            <a href="#faqs" className="text-foreground hover:text-primary transition-colors">
              FAQs
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Check Job Readiness
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary rounded">
              Home
            </a>
            <a href="#how-it-works" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary rounded">
              How It Works
            </a>
            <a href="#why-job-readiness" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary rounded">
              Why Job Readiness
            </a>
            <a href="#faqs" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary rounded">
              FAQs
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
              Check Job Readiness
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
