export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    // New: expose Supabase config via environment variables
    if (url.pathname === '/config') {
      return new Response(JSON.stringify({
        url: env.SUPABASE_URL,
        key: env.SUPABASE_ANON_KEY
      }), { headers: { 'Content-Type': 'application/json' } })
    }

    // Everything else: serve static files exactly as before
    return env.ASSETS.fetch(request)
  }
  }
