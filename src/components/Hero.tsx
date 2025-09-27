import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Github, Mail, Sparkles, Code, Laptop } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const skills = ['Java', 'Spring Boot', 'React.js', 'AWS', 'Docker', 'Python'];

  const handleScrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-background"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        animation: 'heroBgFloat 20s ease-in-out infinite'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden animate-fade-in">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-20">
          <div className="relative">
            <Laptop className="w-full h-full text-primary animate-float" style={{ animationDelay: '0s' }} />
            <div className="absolute top-4 right-4">
              <Code className="w-16 h-16 text-accent animate-float" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute bottom-8 left-8">
              <Sparkles className="w-12 h-12 text-secondary-glow animate-glow-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10 space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full animate-fade-in-up">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Ready to Innovate</span>
              </div>

              {/* Main Headlines */}
              <div className="relative z-20 space-y-4 stagger-parent slide-left scroll-reveal">
                <h1 data-stagger className="text-display-xl font-extra-bold gradient-text leading-tight">
                  {/* <span className="inline-block">Hi, I'm </span> */}
                  <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-primary animate-typewriter" style={{ width: 'fit-content', animation: 'typewriter 2s steps(11, end) 1s forwards, blink-caret 1s step-end infinite' }}>
                    Rohit Verma
                  </span>
                </h1>
                <p data-stagger className="text-lg text-muted-foreground max-w-md">
                  Software Engineer | Cloud & DevOps | Java Developer
                </p>
                <p data-stagger className="text-lg text-muted-foreground max-w-md">
                  Amritsar, India
                </p>
              </div>

              {/* Description */}
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed slide-left scroll-reveal">
                Java full-stack engineer with microservices experience and proven track record of improving system efficiency by up to 30%.
              </p>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-3 stagger-parent slide-left scroll-reveal">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    data-stagger
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium glass-card hover:glow-primary animate-float cursor-pointer"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 slide-right scroll-reveal">
                <Button
                  size="lg"
                  onClick={handleScrollToPortfolio}
                  className="px-8 py-3 font-semibold bg-gradient-primary hover:scale-105 transition-all duration-300 glow-primary"
                >
                  Projects
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleScrollToContact}
                  className="px-8 py-3 font-semibold glass-card hover:glow-secondary transition-all duration-300"
                >
                  Contact
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-start space-x-4 slide-right scroll-reveal">
                <a 
                  href="https://github.com/rvcoder23" 
                  className="p-4 rounded-full glass-card hover:glow-accent transition-all duration-300 focus-glow group"
                  aria-label="GitHub Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rohit-verma-software-dev" 
                  className="p-3 rounded-full glass-card hover:glow-secondary transition-all duration-300 focus-glow group"
                  aria-label="LinkedIn Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative lg:block hidden slide-right scroll-reveal">
              <div className="relative">
                {/* Main Visual Container */}
                <div className="relative w-full h-96 glass-card rounded-2xl p-8 animate-tilt-up">
                  <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4 w-full">
                      {/* Code Blocks */}
                      <div className="col-span-2 space-y-3">
                        <div className="h-4 bg-primary/30 rounded animate-pulse"></div>
                        <div className="h-4 bg-accent/30 rounded animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="h-4 bg-secondary-glow/30 rounded animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                      {/* Floating Elements */}
                      <div className="space-y-4">
                        <div className="w-8 h-8 bg-primary/40 rounded-full animate-float"></div>
                        <div className="w-6 h-6 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                        <div className="w-10 h-10 bg-secondary-glow/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;