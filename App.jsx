import React, { useState } from 'react'

export default function App() {
  const [ageGateOpen, setAgeGateOpen] = useState(true)

  const products = [
    { title: 'Sativa • Bliss & Creativity', desc: 'Uplifting daytime picks for flow-state and content days.', cta: 'Shop Sativa Picks', href: '#shop-sativa' },
    { title: 'Hybrid • Relax & Reset', desc: 'Balanced hybrids for evening wind-down without the fog.', cta: 'Shop Hybrid Picks', href: '#shop-hybrid' },
    { title: 'CBD • Calm & Sleep', desc: 'Non-intoxicating wellness favorites for stress & deep sleep.', cta: 'Shop CBD Picks', href: '#shop-cbd' },
    { title: 'Accessories • Luxury Rituals', desc: 'Copper trays, smell-proof bags, grinders — elevated and discreet.', cta: 'Shop Accessories', href: '#shop-accessories' }
  ]

  const posts = [
    {
      id: 'manifesto',
      title: 'HGW Manifesto: Luxury, Judgment‑Free, Human',
      excerpt: 'We’re building a safe space where cannabis isn’t a secret or a stereotype — it’s a ritual that supports wellness, creativity, and life.',
      content: (
        <>
          <p className="mb-4">
            HGW is where luxury meets down‑to‑earth realness. We share stories, not
            shame. We curate, not push. We honor wellness, creativity, parenting,
            and peace — the many reasons we choose cannabis.
          </p>
          <p className="mb-4">
            This is a judgment‑free zone. Your story belongs here: the giggles, the
            breakthroughs, the nights you finally slept, the way a microdose helped
            you brainstorm, or how CBD took the edge off your stress.
          </p>
          <p className="mb-4">
            We partner only with transparent brands and products we’d recommend to
            family. We disclose affiliates. We say no when it doesn’t serve.
          </p>
          <p>
            Welcome to HGW — a sovereign, sovereignly chill space. Breathe in,
            exhale doubt.
          </p>
        </>
      )
    },
    {
      id: 'creative-flow',
      title: 'How I Microdose for Creative Flow (Without the Crash)',
      excerpt: 'A gentle protocol for idea days: timing, dose ranges, and aftercare.',
      content: (
        <>
          <p className="mb-4">
            On creative days I aim for clarity, not couch‑lock. My baseline is a
            very light microdose (consult local laws; adult use only): 1–2 gentle
            puffs of a sativa‑leaning vape or a 1–2 mg THC edible paired with a
            CBD tincture. I hydrate, queue a playlist, and set a single 60‑minute
            sprint.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><span className="font-semibold">Timing:</span> 20–30 minutes before the work block.</li>
            <li><span className="font-semibold">Pairing:</span> Light caffeine or matcha; CBD to smooth edges.</li>
            <li><span className="font-semibold">Aftercare:</span> 10‑minute walk + water. No doom‑scrolling.</li>
          </ul>
          <p>
            Tools should serve you — not steal your day. Keep it tiny, intentional,
            and tracked. Your future self will thank you.
          </p>
        </>
      )
    },
    {
      id: 'sleep-ritual',
      title: 'My Copper‑Calm Night Ritual (CBD First, Screens Last)',
      excerpt: 'A 20‑minute wind‑down that pairs CBD with breathwork for deep sleep.',
      content: (
        <>
          <p className="mb-4">
            Evenings are for nervous‑system repair. I dim lights, set my phone to
            grayscale, and place a copper tray with a CBD tincture, journal, and
            water by the bed. 30 minutes pre‑sleep: dropper of CBD, 5 box‑breaths,
            light stretch. Tech off, gratitude on.
          </p>
          <p>
            Results: calmer mind, better sleep metrics, sweeter mornings. If it’s
            been a day, I add magnesium or a CBD‑CBN blend and skip all screens.
          </p>
        </>
      )
    }
  ]

  return (
    <div className="min-h-screen" style={{
      backgroundColor: 'var(--bg)',
      color: 'var(--ink)'
    }}>
      {ageGateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="w-full max-w-md rounded-2xl p-6 shadow-xl border border-white/10" style={{backgroundColor: 'var(--panel)'}}>
            <h2 className="text-2xl font-semibold mb-2">Welcome to HGW</h2>
            <p className="text-sm mb-6" style={{color:'var(--muted)'}}>
              This site contains cannabis content and is intended for adults 21+
              in jurisdictions where it is legal. By entering, you confirm you are
              of legal age.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setAgeGateOpen(false)} className="px-4 py-2 rounded-xl font-medium hover:opacity-90" style={{backgroundColor:'var(--accent)', color:'#000'}}>I’m 21+</button>
              <a href="https://www.google.com" className="px-4 py-2 rounded-xl bg-white/10 text-white font-medium hover:bg-white/15">I’m not</a>
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-7 w-7 rounded-lg" style={{backgroundColor:'var(--accent)'}} />
            <span className="font-semibold tracking-wide">HGW</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#shop" className="hover:text-[color:var(--mint)]">Shop</a>
            <a href="#stories" className="hover:text-[color:var(--mint)]">Stories</a>
            <a href="#blog" className="hover:text-[color:var(--mint)]">Blog</a>
            <a href="#subscribe" className="hover:text-[color:var(--mint)]">Subscribe</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl" style={{backgroundColor:'rgba(0,73,83,0.4)'}}/>
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl" style={{backgroundColor:'rgba(184,115,51,0.3)'}}/>
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
                Luxury cannabis, judgment‑free.
              </h1>
              <p className="max-w-prose mb-6" style={{color:'var(--muted)'}}>
                HGW is a safe space to share stories, learn rituals, and access
                trusted CBD/THC products for wellness, creativity, and calm.
              </p>
              <div className="flex gap-3">
                <a href="#shop" className="px-5 py-3 rounded-xl font-medium hover:opacity-90" style={{backgroundColor:'var(--accent)', color:'#000'}}>Explore Shop</a>
                <a href="#stories" className="px-5 py-3 rounded-xl border border-white/15 hover:bg-white/10">Share Your Story</a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-2">
              <div className="aspect-[4/3] rounded-xl flex items-center justify-center" style={{backgroundImage:'linear-gradient(to bottom right, rgba(0,73,83,0.4), #000)'}}>
                <div className="text-center p-6">
                  <div className="text-sm uppercase tracking-widest" style={{color:'var(--muted)'}}>HGW Ritual</div>
                  <div className="mt-2 text-xl font-medium">Copper tray • Tea green glass • Midnight vibe</div>
                  <div className="mt-3" style={{color:'var(--muted)'}}>Designing elevated, grounded moments.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold">HGW Curated Shop</h2>
          <a href="#" className="text-sm hover:text-[color:var(--mint)]" style={{color:'var(--muted)'}}>View all collections →</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p,i)=>(
            <a key={i} href={p.href} className="group rounded-2xl border border-white/10 p-5 hover:border-[color:var(--accent)]/60 transition" style={{backgroundColor:'var(--panel)'}}>
              <div className="h-28 rounded-xl mb-4" style={{backgroundImage:'linear-gradient(to bottom right, rgba(0,73,83,0.4), #000)'}}/>
              <div className="font-medium mb-1">{p.title}</div>
              <div className="text-sm mb-3" style={{color:'var(--muted)'}}>{p.desc}</div>
              <div className="text-sm" style={{color:'var(--mint)'}}>{p.cta} →</div>
            </a>
          ))}
        </div>
        <p className="text-xs mt-4" style={{color:'var(--muted)'}}>
          Affiliate disclosure: We may earn a commission when you buy through links on this site.
        </p>
      </section>

      <section id="stories" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Share Your Story</h2>
            <p className="mb-6 max-w-prose" style={{color:'var(--muted)'}}>
              Your voice matters. Tell us how cannabis supports your life — creativity,
              parenting, wellness, or simply winding down. Submissions may be featured on the blog.
            </p>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-3">
                <input name="name" required placeholder="Name (or Alias)"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-[color:var(--accent)]" />
                <input type="email" name="email" placeholder="Email (optional)"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-[color:var(--accent)]" />
              </div>
              <select name="category"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-[color:var(--accent)]">
                <option value="Creativity">Creativity</option>
                <option value="Relaxation">Relaxation</option>
                <option value="Parenting">Parenting</option>
                <option value="Wellness">Wellness</option>
                <option value="First-time">First‑time story</option>
              </select>
              <textarea name="story" required placeholder="Your story… (200–600 words is perfect)" rows={6}
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-[color:var(--accent)]" />
              <label className="flex items-start gap-2 text-sm" style={{color:'var(--muted)'}}>
                <input type="checkbox" name="consent" required className="mt-1" />
                I consent to my story being published on the HGW blog. Minor
                edits may be made for clarity. No last names will be published.
              </label>
              <button type="submit" className="px-5 py-3 rounded-xl font-medium hover:opacity-90" style={{backgroundColor:'var(--accent)', color:'#000'}}>Submit Story</button>
            </form>
            <div className="mt-3 text-xs" style={{color:'var(--muted)'}}>
              Prefer email? Send to <a href="mailto:stories@yourdomain.com" className="underline">stories@yourdomain.com</a>.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-5" style={{backgroundColor:'var(--panel)'}}>
            <h3 className="font-medium mb-2">Story Prompts</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm" style={{color:'var(--muted)'}}>
              <li>“The first time I realized cannabis supported my wellness…”</li>
              <li>“My microdose routine for creative flow looks like…”</li>
              <li>“Parenting on a tough day — how CBD helped me choose calm.”</li>
              <li>“A ritual that makes my evenings feel luxurious and grounded.”</li>
              <li>“What I wish I knew before trying edibles.”</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold">Latest on the Blog</h2>
          <a href="#" className="text-sm hover:text-[color:var(--mint)]" style={{color:'var(--muted)'}}>View all posts →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((post)=>(
            <a key={post.id} href={`#post-${post.id}`} className="group rounded-2xl border border-white/10 p-5 hover:border-[color:var(--accent)]/60 transition" style={{backgroundColor:'var(--panel)'}}>
              <div className="h-28 rounded-xl mb-4" style={{backgroundImage:'linear-gradient(to bottom right, rgba(0,73,83,0.4), #000)'}}/>
              <div className="font-medium mb-1">{post.title}</div>
              <div className="text-sm" style={{color:'var(--muted)'}}>{post.excerpt}</div>
            </a>
          ))}
        </div>

        <div className="mt-12 space-y-10">
          {posts.map((post)=>(
            <article key={post.id} id={`post-${post.id}`} className="scroll-mt-24">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <div className="prose prose-invert max-w-none">
                {post.content}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="subscribe" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-white/10 p-6" style={{backgroundColor:'var(--panel)'}}>
          <h2 className="text-2xl font-semibold mb-2">Get The High Note</h2>
          <p className="mb-4" style={{color:'var(--muted)'}}>Weekly drops: luxury rituals, real stories, and curated picks. No spam.</p>
          <form action="https://buttondown.email/api/emails/embed-subscribe/hgw" method="post" target="_blank" className="flex flex-col md:flex-row gap-3">
            <input type="email" name="email" required placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-[color:var(--accent)]" />
            <button type="submit" className="px-5 py-3 rounded-xl font-medium hover:opacity-90" style={{backgroundColor:'var(--accent)', color:'#000'}}>Subscribe</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm" style={{color:'var(--muted)'}}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>© {new Date().getFullYear()} HGW. All rights reserved.</div>
            <div className="space-x-4">
              <a href="#" className="hover:text-[color:var(--mint)]">Privacy</a>
              <a href="#" className="hover:text-[color:var(--mint)]">Terms</a>
              <a href="#" className="hover:text-[color:var(--mint)]">Affiliate Disclosure</a>
            </div>
          </div>
          <p className="mt-4 text-xs">
            Legal &amp; Health: HGW content is for adults 21+ where legal. This is not medical advice. Consult a qualified professional. Some links are affiliate; we may earn commissions.
          </p>
        </div>
      </footer>
    </div>
  )
}
