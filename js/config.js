// ─────────────────────────────────────────
//  Career-Ops — Supabase Config
//  Replace these two values after creating
//  your project at supabase.com
// ─────────────────────────────────────────
const SUPABASE_URL      = 'https://pnsxlfnuzorjlmbrcbtr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuc3hsZm51em9yamxtYnJjYnRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzNzI1MjgsImV4cCI6MjA5Mzk0ODUyOH0.ZzNs3Yi9gbrluMnTOsutp7YIqzoCdCgDTCgnexaph8I';

// MiniMax AI
const MINIMAX_KEY = 'sk-cp-TaWMLUmf-F0mQiDp7az0uuSGMFcg0CBd6GcSEXXf96qhqn8_PaYOLrHw7sxVJkfvr0sQ82w8_GufekJJryl1azDWKIQwaLGPAYcrwiIYybsE02eCpk_eENA';
const MINIMAX_URL = 'https://api.minimax.io/v1/chat/completions';

// Base URL — works on GitHub Pages /career_ops/ and localhost
const _isLocal = ['localhost','127.0.0.1'].includes(window.location.hostname);
const BASE_URL = _isLocal
  ? window.location.origin
  : window.location.origin + '/' + (window.location.pathname.split('/')[1] || '');
