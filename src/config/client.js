import { createClient } from '@supabase/supabase-js';

const URL = "https://ikpompiokjhpztbydkev.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrcG9tcGlva2pocHp0Ynlka2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0NjM1NTAsImV4cCI6MjA0MDAzOTU1MH0.wEt-ufEcyzptdmaG1rqmmrAIab5hj_tjc6clMicqq-8"
export const supabase = createClient(URL, API_KEY);
