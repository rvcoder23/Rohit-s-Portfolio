import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase, Comment } from '@/lib/supabase';
import { Send, Mail, MessageCircle, User, Clock, Pin, Globe, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Fetch all comments
  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
      toast({
        title: "Error",
        description: "Failed to load comments. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();

    // Subscribe to realtime changes
    const subscription = supabase
      .channel('comments_channel')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'comments' }, 
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setComments(prev => [payload.new as Comment, ...prev]);
          } else if (payload.eventType === 'UPDATE') {
            setComments(prev => prev.map(comment => 
              comment.id === payload.new.id ? payload.new as Comment : comment
            ));
          } else if (payload.eventType === 'DELETE') {
            setComments(prev => prev.filter(comment => comment.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    // Simulate sending (remove this if you want to add actual functionality later)
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
  };

  const CommentItem: React.FC<{ comment: Comment; index: number }> = ({ comment, index }) => (
    <div 
      data-stagger
      className={`glass-card p-4 transition-all duration-normal ${
        comment.is_pinned ? 'border-primary/30 glow-primary' : ''
      }`}
    >
      {comment.is_pinned && (
        <Badge variant="outline" className="mb-3 text-xs flex items-center w-fit">
          <Pin className="h-3 w-3 mr-1" />
          Pinned
        </Badge>
      )}
      
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
          {comment.avatar_url ? (
            <img 
              src={comment.avatar_url} 
              alt={comment.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <User className="h-5 w-5 text-white" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold text-foreground text-sm">{comment.name}</h4>
              {comment.website && (
                <a 
                  href={comment.website.startsWith('http') ? comment.website : `https://${comment.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-glow transition-colors"
                  aria-label={`Visit ${comment.name}'s website`}
                >
                  <Globe className="h-3 w-3" />
                </a>
              )}
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {formatDate(comment.created_at)}
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {comment.message}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display-md font-extra-bold gradient-text mb-4 relative slide-left scroll-reveal">
              Contact Me
              <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-1" viewBox="0 0 100 1">
                <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="url(#contact-underline-gradient)" strokeWidth="1" className="animate-underline-draw" />
                <defs>
                  <linearGradient id="contact-underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                </defs>
              </svg>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto slide-right scroll-reveal">
              Reach out for collaborations on full-stack or cloud projects. I'll get back to you soon.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8 slide-left scroll-reveal">
              <div className="space-y-6">
                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-2 gap-4 mb-6 stagger-parent slide-left scroll-reveal">
                  <Card data-stagger className="glass-card border-card-border hover:glow-primary transition-all duration-300 slide-left scroll-reveal">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Email</h4>
                          <a 
                            href="mailto:rohitverma@gmail.com" 
                            className="text-primary hover:underline text-sm"
                          >
                            rohitverma@gmail.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card data-stagger className="glass-card border-card-border hover:glow-secondary transition-all duration-300 slide-right scroll-reveal">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                          <Pin className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Location</h4>
                          <p className="text-sm text-muted-foreground">Amritsar, India</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card data-stagger className="glass-card border-card-border hover:glow-accent transition-all duration-300 slide-left scroll-reveal">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                          <Github className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">GitHub</h4>
                          <a
                            href="https://github.com/rvcoder23"
                            className="text-primary hover:underline text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            github.com/rvcoder23
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card data-stagger className="glass-card border-card-border hover:glow-secondary transition-all duration-300 slide-right scroll-reveal">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <Linkedin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">LinkedIn</h4>
                          <a 
                            href="https://www.linkedin.com/in/rohit-verma-software-dev" 
                            className="text-primary hover:underline text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            linkedin.com/in/rohit-verma-software-dev
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="glass-card p-8 border border-card-border stagger-parent slide-right scroll-reveal">
                  <h3 data-stagger className="text-heading-lg font-bold text-foreground mb-2 flex items-center">
                    Contact
                  </h3>
                  <p data-stagger className="text-muted-foreground mb-6">
                    Anything you want to discuss? Send me a message and let's talk.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div data-stagger className="space-y-2">
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="glass-card border-card-border focus:border-primary/50 focus:glow-primary transition-all duration-300"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div data-stagger className="space-y-2">
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="glass-card border-card-border focus:border-primary/50 focus:glow-primary transition-all duration-300"
                        placeholder="Your email"
                        required
                      />
                    </div>

                    <div data-stagger className="space-y-2">
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="glass-card border-card-border focus:border-primary/50 focus:glow-primary transition-all duration-300 min-h-[120px] resize-none"
                        placeholder="Your message"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 glow-primary slide-right scroll-reveal"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send a Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Comments/Social Section */}
            <div className="space-y-8 slide-right scroll-reveal">
              <div className="glass-card p-8 border border-card-border stagger-parent slide-left scroll-reveal">
                <h3 data-stagger className="text-heading-lg font-bold text-foreground mb-6 flex items-center">
                  <MessageCircle className="h-6 w-6 mr-3 text-primary" />
                  Comments ({comments.length})
                </h3>

                {loading ? (
                  <div data-stagger className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <div data-stagger className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar stagger-parent">
                    {comments.length === 0 ? (
                      <div className="glass-card p-8 text-center">
                        <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">
                          No comments yet. Leave feedback in the Portfolio section!
                        </p>
                      </div>
                    ) : (
                      comments.map((comment, index) => (
                        <CommentItem key={comment.id} comment={comment} index={index} />
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
