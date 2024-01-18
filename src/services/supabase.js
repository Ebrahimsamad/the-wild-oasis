import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pbjdqohyqtrisnopfdmm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiamRxb2h5cXRyaXNub3BmZG1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM3MTAwMzgsImV4cCI6MjAxOTI4NjAzOH0.wKO4kguEzfqzexxuFQiX7QXXVmbaLUr8xETG8kCLpoY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
