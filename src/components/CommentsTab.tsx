import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase, CommentInsert } from '@/lib/supabase';
import { Send, MessageCircle } from 'lucide-react';

const CommentsTab = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: ''
  });

  // Submit new comment
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setSubmitting(true);

    const newComment: CommentInsert = {
      name: formData.name.trim(),
      email: formData.email.trim() || undefined,
      message: formData.message.trim(),
      website: formData.website.trim() || undefined,
    };

    try {
      const { data, error } = await supabase
        .from('comments')
        .insert([newComment])
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Comment posted!",
        description: "Thank you for your feedback.",
      });

      setFormData({ name: '', email: '', message: '', website: '' });
    } catch (error) {
      console.error('Error posting comment:', error);
      toast({
        title: "Error",
        description: "Failed to post comment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="space-y-8">
      {/* Comment Form */}
      <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
          <MessageCircle className="h-5 w-5 mr-3 text-primary" />
          Leave a Comment
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="comment-name" className="text-sm font-medium text-foreground">
                Name *
              </label>
              <Input
                id="comment-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="glass-card focus-glow"
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="comment-email" className="text-sm font-medium text-foreground">
                Email (optional)
              </label>
              <Input
                id="comment-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="glass-card focus-glow"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="comment-website" className="text-sm font-medium text-foreground">
              Website (optional)
            </label>
            <Input
              id="comment-website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="glass-card focus-glow"
              placeholder="https://yourwebsite.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="comment-message" className="text-sm font-medium text-foreground">
              Message *
            </label>
            <Textarea
              id="comment-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="glass-card focus-glow min-h-[100px]"
              placeholder="Share your thoughts..."
              required
            />
          </div>

          <Button 
            type="submit" 
            className="glow-primary"
            disabled={submitting || !formData.name.trim() || !formData.message.trim()}
          >
            {submitting ? (
              'Posting...'
            ) : (
              <>
                Post Comment
                <Send className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CommentsTab;
