"use client";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════
   ANIMATED NUMBER — each instance has its own observer
   ═══════════════════════════════════════════════════ */
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════
   DASHBOARD WIDGET — rendered product UI
   ═══════════════════════════════════════════════════ */
export function DashboardWidget() {
  return (
    <div className="w-full max-w-[460px] mx-auto">
      {/* Browser chrome */}
      <div className="rounded-none bg-surface border-t border-x border-border px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
        </div>
        <div className="flex-1 ml-2">
          <div className="bg-background border border-border rounded-none px-3 py-0.5 text-xs text-body font-mono">
            app.leadhaus.io/dashboard
          </div>
        </div>
      </div>

      {/* Dashboard */}
      <div className="bg-background border-x border-b border-border rounded-none shadow-sm overflow-hidden">
        {/* Top nav */}
        <div className="px-5 py-3 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-foreground tracking-tight">Leadhaus</span>
            <span className="text-xs font-semibold text-body border-l border-border pl-3">Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs text-accent font-semibold">Live</span>
          </div>
        </div>

        {/* Metrics */}
        <div className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Total Leads", val: 237412, color: "text-foreground" },
              { label: "Added This Week", val: 4891, color: "text-accent" },
              { label: "Messages Sent", val: 18204, color: "text-foreground" },
              { label: "Opens", val: 7632, color: "text-foreground" },
              { label: "Replies", val: 312, color: "text-accent" },
              { label: "Bookings", val: 47, color: "text-accent" },
            ].map((m) => (
              <div key={m.label} className="bg-surface rounded-none border border-border px-3 py-2.5">
                <p className={`text-base font-bold ${m.color} leading-none tabular-nums`}>
                   <AnimatedNumber target={m.val} />
                </p>
                <p className="text-[10px] text-body mt-1 leading-tight font-semibold uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mini chart bar */}
        <div className="px-4 pb-2">
          <div className="flex items-end gap-[3px] h-10">
            {[35, 42, 38, 55, 48, 62, 58, 72, 65, 78, 70, 85, 80, 88, 75, 90, 82, 95, 88, 92].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-none ${i === 17 || i === 19 ? "bg-accent" : "bg-accent/35"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[10px] text-muted font-medium">4 weeks ago</span>
            <span className="text-[10px] text-muted font-medium">Today</span>
          </div>
        </div>

        {/* Activity feed */}
        <div className="px-4 pb-4 pt-2">
          <div className="border border-border rounded-none divide-y divide-border overflow-hidden">
            {[
              { text: "Reply from James Mitchell, Apex Legal", time: "2m ago", dot: "bg-accent" },
              { text: "Booking: Sarah Chen, 2pm Tuesday", time: "18m ago", dot: "bg-accent" },
              { text: "New lead: David Park, CFO at Meridian", time: "34m ago", dot: "bg-muted" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 text-xs">
                <span className={`w-1.5 h-1.5 rounded-full ${item.dot} flex-shrink-0`} />
                <span className="text-body flex-1 truncate">{item.text}</span>
                <span className="text-muted flex-shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   EMAIL PREVIEW — rendered automation flow like SendX
   ═══════════════════════════════════════════════════ */
export function EmailPreviewWidget() {
  return (
    <div className="w-full max-w-[360px]">
      {/* Trigger node */}
      <div className="flex items-center gap-2.5 mb-2.5">
        <div className="w-8 h-8 rounded-none bg-accent/10 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
          </svg>
        </div>
        <div className="flex-1 bg-surface border border-border rounded-none px-3 py-2">
          <p className="text-[11px] font-semibold text-foreground">New lead captured</p>
          <p className="text-[10px] text-body">via Leadhaus outreach</p>
        </div>
      </div>

      <div className="flex justify-center mb-2.5">
        <div className="w-px h-5 bg-border" />
      </div>

      {/* Wait node */}
      <div className="flex items-center gap-2.5 mb-2.5">
        <div className="w-8 h-8 rounded-none bg-accent/10 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1 bg-surface border border-border rounded-none px-3 py-2">
          <p className="text-[11px] font-semibold text-foreground">Wait 24 hours</p>
          <p className="text-[10px] text-body">Then send welcome sequence</p>
        </div>
      </div>

      <div className="flex justify-center mb-2.5">
        <div className="w-px h-5 bg-border" />
      </div>

      {/* Email card */}
      <div className="bg-background rounded-none border border-border shadow-sm overflow-hidden">
        <div className="bg-surface px-4 py-2 border-b border-border">
          <p className="text-[10px] font-semibold text-foreground tracking-wide uppercase">Welcome Email</p>
        </div>
        <div className="p-4">
          <p className="font-semibold text-foreground text-[13px]">Hi James,</p>
          <p className="text-[11px] text-body mt-1.5 leading-relaxed">
            Thanks for getting in touch. Here is the case study showing
            how we helped a London recruiter generate 47 bookings in their
            first month...
          </p>
          <div className="mt-3 bg-surface rounded-none p-2.5 border border-border flex items-center gap-2">
            <div className="w-7 h-7 rounded-none bg-accent/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-medium text-foreground">Case_Study_Recruiter.pdf</p>
              <p className="text-[9px] text-muted">2.3 MB</p>
            </div>
          </div>
          <button className="btn-premium w-full text-center mt-4">
            Download case study
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   SOCIAL PROOF BAR — like Mailchimp / EmailOctopus
   ═══════════════════════════════════════════════════ */
export function SocialProofBar() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {[
        { platform: "G2", score: "4.8", reviews: "120+" },
        { platform: "Capterra", score: "4.7", reviews: "85+" },
        { platform: "Trustpilot", score: "4.9", reviews: "200+" },
      ].map((b) => (
        <div key={b.platform} className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-foreground">{b.platform}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-semibold text-foreground">{b.score}</span>
          </div>
          <span className="text-[10px] text-body">{b.reviews} reviews</span>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   INDUSTRY SELECTOR — like Constant Contact's hero
   ═══════════════════════════════════════════════════ */
export function IndustrySelector() {
  const [selected, setSelected] = useState<string | null>(null);

  const industries = [
    { id: "legal", label: "Legal & Accounting" },
    { id: "agency", label: "Agencies" },
    { id: "recruit", label: "Recruiters" },
    { id: "saas", label: "SaaS & Tech" },
    { id: "trades", label: "Tradespeople" },
    { id: "health", label: "Health & Wellness" },
  ];

  return (
    <div className="w-full">
      <p className="text-sm font-semibold text-foreground mb-3">What industry are you in?</p>
      <div className="grid grid-cols-3 gap-2">
        {industries.map((ind) => (
          <button
            key={ind.id}
            onClick={() => setSelected(ind.id === selected ? null : ind.id)}
            className={`flex flex-col items-center gap-1.5 rounded-none border px-3 py-4 text-center transition-all duration-200
              ${selected === ind.id
                ? "border-accent bg-accent/5 shadow-sm"
                : "border-border bg-background hover:border-body hover:shadow-sm"
              }`}
          >
            <span className={`text-[11px] font-medium leading-tight ${selected === ind.id ? "text-accent" : "text-body"}`}>
              {ind.label}
            </span>
          </button>
        ))}
      </div>
      {selected && (
        <div className="mt-3 bg-accent/5 border border-accent/20 rounded-none px-4 py-3 text-[12px] text-accent font-medium animate-fade-in">
          We currently serve 340+ {industries.find(i => i.id === selected)?.label.toLowerCase()} clients across the UK.
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   SAVINGS CALCULATOR — B2B Sales Outreach Alternatives
   ═══════════════════════════════════════════════════ */
export function SavingsCalculator() {
  const [contacts, setContacts] = useState(25000);

  // Estimating average monthly subscription + database credits + domain infrastructure costs
  const competitors = [
    {
      name: "Reply.io",
      calc: (n: number) => {
        const base = 59; // Basic user plan
        const dataCost = Math.ceil(n / 5000) * 30; // Data credits
        const infra = 40; // Secondary domains and warming
        return base + dataCost + infra;
      },
      desc: "Software plus manual data and domains setup"
    },
    {
      name: "Apollo.io",
      calc: (n: number) => {
        const base = 49; // Professional user seat
        const exportCredits = Math.ceil(n / 10000) * 50; // Export/prospection credits
        const infra = 30; // 3 sending domains
        return base + exportCredits + infra;
      },
      desc: "Database plus software but credit restricted"
    },
    {
      name: "Instantly.ai",
      calc: (n: number) => {
        const base = 47; // Hypercharge sending plan
        const dataBuy = Math.ceil(n / 5000) * 40; // Separate database purchase
        const infra = 50; // 5 sending domains and inbox fees
        return base + dataBuy + infra;
      },
      desc: "Sending software only, no contacts included"
    },
    {
      name: "Mailchimp",
      calc: (n: number) => {
        return n <= 10000 ? 135 : n <= 25000 ? 270 : n <= 50000 ? 350 : 520;
      },
      desc: "Newsletter tool only, cold emailing forbidden"
    }
  ];

  const tiers = [
    { limit: 10000, price: 497 },
    { limit: 25000, price: 497 },
    { limit: 50000, price: 997 },
    { limit: 100000, price: 1997 },
  ];
  const leadhausPrice = tiers.find((t) => contacts <= t.limit)?.price ?? 1997;

  return (
    <div className="bg-background rounded-none border border-border shadow-sm p-6 w-full text-left">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-base font-bold text-foreground">Compare your monthly options</h3>
        <span className="text-xs text-muted font-medium">Updated April 2026</span>
      </div>
      <p className="text-sm text-body mb-6 leading-relaxed">
        Software alternatives charge to let you send messages. Leadhaus is a managed service that provides targeted contacts, warms up your domains, drafts copy, and delivers active replies.
      </p>

      <div className="mb-6">
        <label className="block text-xs font-semibold text-body uppercase tracking-wider mb-2">
          Target Contacts to Reach Each Month
        </label>
        <div className="relative mb-2">
          <input
            type="range" min={5000} max={100000} step={5000}
            value={contacts}
            onChange={(e) => setContacts(Number(e.target.value))}
            className="w-full slider-custom cursor-pointer"
          />
        </div>
        <p className="text-right text-lg font-bold text-accent tabular-nums">
          {contacts.toLocaleString()} contacts
        </p>
      </div>

      <div className="space-y-3">
        {/* Leadhaus premium flat fee */}
        <div className="flex items-center justify-between bg-accent/10 border-2 border-accent rounded-none px-4 py-4">
          <div>
            <p className="text-sm font-bold text-foreground">Leadhaus Managed Pipeline</p>
            <p className="text-xs text-accent font-medium mt-0.5">
              Data, custom copywriting, sending infrastructure, and delivery included
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-accent tabular-nums">£{leadhausPrice}</p>
            <p className="text-[10px] text-body uppercase tracking-wider font-semibold">Flat Fee</p>
          </div>
        </div>

        {/* Competitors software list */}
        {competitors.map((comp) => (
          <div key={comp.name} className="flex items-center justify-between bg-surface border border-border rounded-none px-4 py-3">
            <div>
              <p className="text-sm font-medium text-foreground">{comp.name}</p>
              <p className="text-xs text-body mt-0.5">{comp.desc}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-foreground tabular-nums">${comp.calc(contacts)}/mo</p>
              <p className="text-[10px] text-muted uppercase tracking-wider">Estimated Total</p>
            </div>
          </div>
        ))}
      </div>

      {/* Hidden Costs Panel */}
      <div className="mt-6 pt-6 border-t border-border bg-surface/30 p-4">
        <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">
          The Hidden Infrastructure Cost of Doing it Yourself
        </p>
        <p className="text-xs text-body leading-relaxed mb-3">
          To match Leadhaus deliverables using software tools, you must pay for:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs text-body">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>Multiple domains (approx £50 yearly)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>Email verification tools (£30 monthly)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>Outbound copywriter fees (£500 setup)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>Database subscriptions (£80 monthly)</span>
          </div>
        </div>
        <p className="text-xs text-muted italic mt-4">
          Plus approximately fifteen hours weekly managing lists, bounce cleaning, and domain deliverability settings.
        </p>
      </div>
    </div>
  );
}


