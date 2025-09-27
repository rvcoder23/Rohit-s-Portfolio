import React, { useRef, useEffect, useState } from 'react';
import { Code, Award, Globe, Zap, Sparkles, TrendingUp } from 'lucide-react';

interface StatItemProps {
  icon: React.ComponentType<any>;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
  description?: string;
}

const StatItem: React.FC<StatItemProps> = ({ 
  icon: Icon, 
  value, 
  label, 
  suffix = '', 
  delay = 0,
  description = ''
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start counting animation after delay
          setTimeout(() => {
            let start = 0;
            const increment = value / 60; // Faster animation
            const timer = setInterval(() => {
              start += increment;
              if (start >= value) {
                setCount(value);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 25);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value, isVisible, delay]);

  return (
    <div
      ref={ref}
      className="relative group"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500 blur-xl"></div>
      
      <div className="relative glass-card p-8 rounded-2xl border border-card-border hover:glow-primary transition-all duration-500 group-hover:scale-105 hover:shadow-2xl animate-scale-in">
        {/* Icon with Glow Effect */}
        <div className="relative mb-6">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all duration-500 mx-auto">
            <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="absolute inset-0 w-16 h-16 bg-primary/10 rounded-full blur-lg group-hover:bg-primary/20 transition-all duration-500 mx-auto"></div>
        </div>

        {/* Counter */}
        <div className="text-center mb-4">
          <div className="text-5xl font-extra-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
            {count}{suffix}
          </div>
          <div className="text-lg font-semibold text-foreground mb-1">{label}</div>
          {description && (
            <div className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </div>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="w-full bg-muted/30 h-1 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-primary transition-all duration-1000 rounded-full"
            style={{ 
              width: isVisible ? '100%' : '0%',
              transitionDelay: `${delay}ms`
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent/30 rounded-full flex items-center justify-center animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Sparkles className="w-3 h-3 text-accent" />
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: Code,
      value: 8,
      label: 'Total Projects',
      suffix: '',
      delay: 0,
      description: 'Full-stack solutions with microservices'
    },
    {
      icon: Award,
      value: 5,
      label: 'Certificates',
      suffix: '',
      delay: 150,
      description: 'Cloud and DevOps certifications'
    },
    {
      icon: TrendingUp,
      value: 1,
      label: 'Years of Experience',  
      suffix: '',
      delay: 300,
      description: 'Recent B.Tech graduate building expertise'
    },
    {
      icon: Zap,
      value: 100,
      label: 'Client Satisfaction',
      suffix: '%',
      delay: 450,
      description: 'Commitment to excellence'
    },
  ];

  return null;
};

export default StatsSection;