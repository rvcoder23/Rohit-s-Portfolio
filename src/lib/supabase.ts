import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sjsgruheioqpqbtqjpbl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqc2dydWhlaW9xcHFidHFqcGJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0Njg0ODAsImV4cCI6MjA3NDA0NDQ4MH0.k0Am-ZJYl6KkRcqz-cV9Qsx2ipPhm9NXA-bkVLUPeKc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Comment {
  id: string;
  name: string;
  email?: string;
  message: string;
  avatar_url?: string;
  created_at: string;
  is_pinned?: boolean;
  website?: string;
}

export interface CommentInsert {
  name: string;
  email?: string;
  message: string;
  avatar_url?: string;
  website?: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  created_at: string;
}

export interface ContactSubmissionInsert {
  name: string;
  email: string;
  message: string;
}