import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <StatsSection />
        <About />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Portfolio. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
