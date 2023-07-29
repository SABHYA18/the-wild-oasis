import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bgbvsuhpsdparbexvtnb.supabase.co";
// eslint-disable-next-line no-undef
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnYnZzdWhwc2RwYXJiZXh2dG5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzODA0MTEsImV4cCI6MjAwNTk1NjQxMX0.jgw_t7YVbqc-7Gr9Lg3STXTqtgfq1bWZf938hHGsgu0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
