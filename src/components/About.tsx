import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, ExternalLink, Sparkles, User, Brain, Target } from 'lucide-react';

const About = () => {
  const handleViewProjects = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Transforming ideas into digital experiences</span>
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            </div>
            <h2 className="text-display-md font-extra-bold gradient-text mb-4 relative">
              About Me
              <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-1" viewBox="0 0 100 1">
                <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="url(#underline-gradient)" strokeWidth="1" className="animate-underline-draw" />
                <defs>
                  <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                </defs>
              </svg>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 stagger-parent slide-left scroll-reveal">
                <div className="space-y-6" data-stagger>
                  <h3 data-stagger className="text-heading-xl font-bold text-foreground">
                    Hello, I'm <span className="gradient-text">Rohit Verma</span>
                  </h3>

                  <div className="space-y-4 text-muted-foreground leading-relaxed" data-stagger>
                    <p data-stagger>
                      B.Tech graduate in Computer Science and Engineering from Punjab Technical University (2020-2024, GPA 8.5). Passionate about full-stack development with expertise in Java microservices, cloud technologies, and frontend innovation.
                    </p>
                    <p data-stagger>
                      Education: B.Tech in Computer Science and Engineering, Punjab Technical University, 2020-2024 (GPA 8.5).
                    </p>

                    <div data-stagger className="glass-card p-6 rounded-lg border border-card-border">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                          <Brain className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-foreground font-medium mb-2">
                            "Building scalable systems that drive efficiency and innovation."
                          </p>
                          <p className="text-sm text-muted-foreground italic">
                            Combining full-stack expertise with cloud technologies to deliver robust solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

               {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 slide-right scroll-reveal">
                <a
                  href="https://drive.google.com/file/d/1p-hYV469KmffehuRpBr3zYZeJmza62LM/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 font-semibold bg-gradient-primary hover:scale-105 transition-all duration-300 glow-primary rounded-md"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleViewProjects}
                  className="px-8 py-3 font-semibold glass-card hover:glow-secondary transition-all duration-300"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
              </div>
            </div>

            {/* Right Visual/Stats */}
            <div className="space-y-6 slide-right scroll-reveal">
              {/* Profile Image Placeholder */}
              <div className="relative mx-auto lg:mx-0 w-80 h-80 glass-card rounded-2xl p-2 group hover:glow-primary transition-all duration-500">
                <div className="w-full h-full bg-gradient-primary/10 rounded-xl flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/placeholder.svg" 
                    alt="Rohit Verma Profile" 
                    className="w-40 h-40 rounded-full object-cover border-4 border-transparent bg-gradient-to-r from-primary/20 to-accent/20 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center animate-float">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary-glow/30 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;