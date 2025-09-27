import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, 
  Award, 
  Layers, 
  ExternalLink, 
  Github,
  Sparkles,
  ArrowUpRight,
  Zap,
  MessageCircle
} from 'lucide-react';

import emailassitantImage from '../assets/emailassitant.png';
import urlanlyticsImage from '../assets/urlanlytics.png';
import smartcontactImage from '../assets/smartcontact.png';
import airesumeImage from '../assets/airesume.png';

import CommentsTab from './CommentsTab';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const portfolioStats = [
    {
      icon: Code,
      value: '10+',
      label: 'Total Projects',
      description: 'Full stack solutions',
      color: 'primary'
    },
    {
      icon: Award,
      value: '5+',
      label: 'Certificates',
      description: 'Java, Cloud & DevOps certifications',
      color: 'accent'
    },
    {
      icon: Zap,
      value: '1+',
      label: 'Years Experience',
      description: 'Recent tech graduate',
      color: 'secondary'
    },
    {
      icon: Sparkles,
      value: '100%',
      label: 'Client Satisfaction',
      description: 'Commitment to excellence',
      color: 'secondary'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'AI Email Assistant',
      description: 'Developed AI-powered email assistant improving response efficiency by 75%. Integrated Gemini API for context-aware automated responses with 95% accuracy. Built Chrome extension for Gmail integration, reducing composition time by 65%. ',
      image: emailassitantImage,
      technologies: ['React', 'TypeScript', 'Axios', 'Tailwind CSS'],
      demoUrl: 'https://thriving-maamoul-c33611.netlify.app/',
      codeUrl: 'https://github.com/rvcoder23/Ai-Email-Assistant',
      status: 'Live',
      featured: true
    },
    {
      id: 2,
      title: 'URL Shortener with Analytics',
      description: 'Designed full-stack URL shortening service with custom analytics dashboard and high availability. Implemented secure authentication system with role-based access control. Built responsive frontend with modern UI/UX design principles.Optimized database queries and data struct',
      image: urlanlyticsImage,
      technologies: ['Python', 'Flask', 'SQL', 'MySQL'],
      demoUrl: 'https://sparkling-valkyrie-8bae15.netlify.app/',
      codeUrl: 'https://github.com/rvcoder23/Url-Shortner-Full-stack',
      status: 'Live',
      featured: true
    },
    {
      id: 3,
      title: 'Contact Management System',
      description: 'Built secure contact management solution with role-based authentication. Implemented OAuth2 protocols, strengthening application security by 85%. Designed efficient storage and retrieval system for fast data access. Deployed cloud-based image storage, improving load times by 40',
      image: smartcontactImage,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      demoUrl: '#',
      codeUrl: 'https://github.com/rvcoder23/SmartContactManager',
      status: 'Completed',
      featured: true
    },
    {
      id: 4,
      title: 'Resume Generation Platform',
      description: 'Architected comprehensive platform serving users with automated content generation– Integrated machine learning models for resume creation with 85% accuracy. Implemented PDF export functionality with cross-device compatibility. Enhanced content processing algorithms for efficient template generatio',
      image: airesumeImage,
      technologies: ['Python', 'AI Models (Ollama, DeepSeek)', 'PDF Export', 'RESTful APIs'],
      demoUrl: '#',
      codeUrl: 'https://github.com/rvcoder23/AI-Resume-Builder',
      status: 'Completed',
      featured: true
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'Frontend Developer',
      issuer: 'IBM',
      date: '2024',
      level: 'Advanced',
      credentialUrl: 'https://drive.google.com/file/d/1W2FQvsCJ5rsZFCcFzcQYASuIjP1y_hHQ/view?usp=sharing',
      credentialId: 'FRONTEND-IBM-2024-001'
    },
    {
      id: 2,
      title: 'Cloud Computing Fundamentals',
      issuer: 'NPTEL',
      date: '2024',
      level: 'Professional',
      credentialUrl: 'https://drive.google.com/file/d/1IQ26_9bYcGj0f2db5VHIOSAmPHqzBEai/view?usp=sharing',
      credentialId: 'CLOUD-NPTEL-2024-002'
    },
    {
      id: 3,
      title: 'Java Microservices Development',
      issuer: 'Udemy',
      date: '2024',
      level: 'Intermediate',
      credentialUrl: 'https://drive.google.com/file/d/1LSt50u1g5bkr0JRxwgrUBqcsSasyjEGr/view?usp=drive_link',
      credentialId: 'JAVA-MICROSERVICES-2024-003'
    }
  ];

  const techStack = [
    { 
      category: 'Programming Languages', 
      icon: '💻', 
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C/C++', 'SQL', 'Bash Scripting'] 
    },
    { 
      category: 'Backend Technologies', 
      icon: '🖥️', 
      skills: ['Spring Boot', 'Node.js', 'Express.js', 'RESTful APIs', 'Microservices', 'JWT Authentication'] 
    },
    { 
      category: 'Frontend Technologies', 
      icon: '🌐', 
      skills: ['React.js', 'HTML5', 'CSS3', 'Responsive Design', 'Material UI', 'Chrome Extensions'] 
    },
    { 
      category: 'Database Systems', 
      icon: '🗄️', 
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Database Optimization', 'Query Performance'] 
    },
    { 
      category: 'Cloud & DevOps', 
      icon: '☁️', 
      skills: ['AWS (EC2, S3)', 'Docker', 'Kubernetes', 'CI/CD', 'Linux Administration', 'Infrastructure'] 
    },
    { 
      category: 'AI & Machine Learning', 
      icon: '🤖', 
      skills: ['Generative AI', 'LLM Integration', 'AI Agents', 'Automation', 'API Development'] 
    },
    { 
      category: 'Development Tools', 
      icon: '🔧', 
      skills: ['Git', 'GitHub', 'Maven', 'Postman', 'VS Code', 'Version Control', 'Agile Methodologies'] 
    },
    { 
      category: 'Security & Authentication', 
      icon: '🔒', 
      skills: ['Spring Security', 'OAuth2', 'Role-based Access Control', 'Application Security'] 
    }
  ];

  const renderProjects = () => (
    <div className="grid lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Card
          key={project.id}
          className="glass-card border-card-border hover:glow-primary transition-all duration-500 group overflow-hidden hover:scale-105 hover:shadow-2xl"
        >
          <div className="aspect-video relative overflow-hidden group-hover:animate-zoom-in">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            {project.featured && (
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground z-10">
                Featured
              </Badge>
            )}
          </div>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <Badge variant="outline" className="text-xs">
                {project.status}
              </Badge>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs glass-card">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3">
              <Button asChild size="sm" className="flex-1 glow-primary hover:scale-105 transition-all">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="glass-card hover:glow-secondary">
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderCertificates = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((cert, index) => (
        <Card 
          key={cert.id}
          className="glass-card border-card-border hover:glow-secondary transition-all duration-500 group"
        >
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
              {cert.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="outline" className="text-xs">
                {cert.level}
              </Badge>
              <span className="text-xs text-muted-foreground">{cert.date}</span>
            </div>
            <Button asChild className="w-full text-xs" variant="outline" size="sm">
              <a href={cert.credentialUrl || '#'} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-2" />
                View Certificate
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderTechStack = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {techStack.map((tech, index) => (
        <Card 
          key={tech.category}
          className="glass-card border-card-border hover:glow-accent transition-all duration-500 group"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{tech.icon}</span>
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {tech.category}
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {tech.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'projects':
        return renderProjects();
      case 'certificates':
        return renderCertificates();
      case 'tech-stack':
        return renderTechStack();
      case 'comments':
        return <CommentsTab />;
      default:
        return renderProjects();
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-4 animate-slide-up">
              Portfolio Showcase
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animate-delay-200">
              Explore my journey through projects, certifications, and technical expertise. Each 
              section represents a milestone in my continuous learning path.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-16 stagger-parent slide-left scroll-reveal">
            {portfolioStats.map((stat, index) => {
              const Icon = stat.icon;
              const direction = index % 2 === 0 ? 'slide-left' : 'slide-right';
              return (
                <Card 
                  key={index}
                  data-stagger
                  className={`${direction} scroll-reveal glass-card border-card-border hover:glow-primary transition-all duration-500 group`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/20">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Custom Tab Implementation */}
          <div className="w-full">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12 slide-right scroll-reveal">
              <div className="inline-flex glass-card p-1 rounded-lg border border-card-border">
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${
                    activeTab === 'projects'
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Code className="w-4 h-4 mr-2" />
                  Projects
                </button>
                <button
                  onClick={() => setActiveTab('certificates')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${
                    activeTab === 'certificates'
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Award className="w-4 h-4 mr-2" />
                  Certificates
                </button>
                <button
                  onClick={() => setActiveTab('tech-stack')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${
                    activeTab === 'tech-stack'
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Layers className="w-4 h-4 mr-2" />
                  Tech Stack
                </button>
                <button
                  onClick={() => setActiveTab('comments')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${
                    activeTab === 'comments'
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Comments
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div key={activeTab} className="space-y-8">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
