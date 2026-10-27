"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const questions = [
  ["How quickly can we connect feedback?", "Most teams connect support, calls, and in-product feedback in under 20 minutes."],
  ["Does it replace product analytics?", "No. SignalNest adds the customer context analytics cannot see, then connects themes to your roadmap."],
  ["Can we invite teammates?", "Yes. Every plan includes unlimited viewers with workspace roles for sensitive notes."],
];

const features = [
  ["01", "One home for every signal", "Pull feedback from support, sales, reviews, and your product into one searchable workspace.", "bg-lavender"],
  ["02", "Themes, not just tickets", "Group repeated needs and see which customer segment feels the pain most.", "bg-mint"],
  ["03", "Roadmaps with receipts", "Turn a theme into a decision with quotes, opportunity size, and source trail.", "bg-ink text-white"],
];

const plans = [
  { name: "Studio", description: "For a small product team finding its signal.", monthly: 40, yearly: 32, features: ["3 feedback sources", "Unlimited insights", "Slack digests", "Roadmap exports"], action: "Start free" },
  { name: "Scale", description: "For teams making customer-led decisions every day.", monthly: 74, yearly: 59, features: ["Unlimited sources", "AI theme clustering", "Custom permissions", "Dedicated onboarding"], action: "Start free", featured: true },
  { name: "Enterprise", description: "For organizations turning customer context into a company habit.", monthly: 0, yearly: 0, features: ["Advanced governance", "Security review support", "Priority success team", "Custom data retention"], action: "Contact us" },
];

function LogoStrip() {
  return (
    <div className="mx-auto mt-5 flex max-w-4xl flex-wrap items-center justify-center gap-8 text-ink/40 sm:gap-12" aria-label="Customer logos">
      {["cinder", "proton", "loomly", "northstar"].map((name) => (
        <svg key={name} viewBox="0 0 120 32" className="h-7 w-24 fill-current" role="img" aria-label={name}>
          <text x="4" y="23" fontFamily="var(--font-space)" fontSize="18" fontWeight="700">{name}</text>
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  const [annual, setAnnual] = useState(true);
  const [open, setOpen] = useState(0);
  const [menu, setMenu] = useState(false);
  const [toast, setToast] = useState("");

  const showDemoToast = () => {
    setToast("Demo only — connect your workspace to continue.");
    window.setTimeout(() => setToast(""), 3000);
  };

  return (
    <main>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="font-display text-xl font-bold tracking-tight" aria-label="SignalNest home">
          <span className="mr-2 inline-flex size-8 items-center justify-center rounded-full bg-violet text-white"><Sparkles size={16} /></span>
          signalnest
        </a>
        <div className="hidden gap-8 text-sm font-medium md:flex"><a href="#product">Product</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></div>
        <a href="#contact" className="hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-violet md:block">Start free <ArrowRight className="ml-2 inline" size={15} /></a>
        <button className="md:hidden" aria-label="Toggle navigation" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
      </nav>
      {menu && <div className="border-y border-line bg-white px-6 py-5 md:hidden"><div className="flex flex-col gap-5 font-semibold"><a href="#product" onClick={() => setMenu(false)}>Product</a><a href="#pricing" onClick={() => setMenu(false)}>Pricing</a><a href="#faq" onClick={() => setMenu(false)}>FAQ</a></div></div>}

      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:pb-32 lg:pt-24">
        <div>
          <p className="mb-6 text-sm font-bold uppercase tracking-[.18em] text-violet">● Customer intelligence, made human</p>
          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-[-.05em] sm:text-7xl">Your customers are telling you <span className="text-violet">what to build.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted">SignalNest turns scattered feedback into a focused roadmap, so your team can spend less time sorting noise and more time creating momentum.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-violet px-6 py-4 font-semibold text-white shadow-lg shadow-violet/20 hover:bg-ink">See SignalNest in action <ArrowRight className="ml-2 inline" size={17} /></a>
            <button onClick={showDemoToast} className="rounded-full border border-line bg-white px-6 py-4 font-semibold hover:border-violet"><Play className="mr-2 inline fill-current text-violet" size={15} /> Watch 90 sec</button>
          </div>
          <p className="mt-6 text-sm text-muted">No credit card required · Setup in 20 minutes</p>
        </div>
        <div className="relative">
          <div className="relative rotate-2 rounded-[28px] border border-line bg-white p-4 shadow-2xl">
            <div className="flex justify-between border-b border-line px-3 pb-4">
              <div><p className="font-display font-bold">Customer pulse</p><p className="text-xs text-muted">Updated just now</p></div>
              <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold">↑ 18% signal</span>
            </div>
            <div className="grid gap-3 p-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-ink p-5 text-white sm:row-span-2">
                <p className="text-sm text-white/70">Top opportunity</p><p className="mt-8 font-display text-4xl font-bold">Onboarding</p><p className="mt-2 text-sm text-white/70">Mentioned by 42 customers this month</p>
                <div className="mt-8 h-2 rounded-full bg-white/20"><div className="h-full w-4/5 rounded-full bg-mint" /></div>
              </div>
              <div className="rounded-2xl bg-lavender p-5"><p className="text-xs font-bold uppercase text-violet">New insight</p><p className="mt-3 font-semibold">“I found my aha moment in 3 days.”</p></div>
              <div className="rounded-2xl border border-line p-5"><p className="text-xs font-bold uppercase text-muted">Roadmap impact</p><p className="mt-3 font-display text-3xl font-bold">+24%</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-8"><p className="text-center text-xs font-bold uppercase tracking-[.2em] text-muted">Loved by teams who listen closely</p><LogoStrip /></section>
      <section id="product" className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="max-w-2xl"><p className="font-bold text-violet">From noise to north star</p><h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">The clarity your best decisions deserve.</h2></div><div className="mt-16 grid items-stretch gap-5 lg:grid-cols-3">{features.map(([n, t, d, c]) => <article key={n} className={`flex min-h-[330px] flex-col rounded-card p-7 ${c}`}><p className="font-display text-sm font-bold opacity-60">{n}</p><div className="mt-auto"><h3 className="font-display text-2xl font-bold">{t}</h3><p className="mt-3 max-w-xs leading-7 opacity-75">{d}</p></div></article>)}</div></section>
      <section className="bg-ink px-6 py-24 text-white lg:px-10"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="font-bold text-mint">A better rhythm</p><h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Make customer love a team habit.</h2><p className="mt-6 max-w-md leading-7 text-white/70">“SignalNest gave our weekly product review a shared language. We stopped debating anecdotes and started prioritizing evidence.”</p><p className="mt-7 text-sm font-bold">Maya Chen <span className="font-normal text-white/60">· VP Product, Cinder</span></p></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{[["3.2x", "faster synthesis"], ["41%", "more confidence"], ["18k", "signals organized"], ["4.9", "team rating"]].map((x) => <div key={x[0]} className="border-l border-white/20 p-5"><p className="font-display text-4xl font-bold text-mint">{x[0]}</p><p className="mt-2 text-sm text-white/60">{x[1]}</p></div>)}</div></div></section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="text-center"><p className="font-bold text-violet">Simple by design</p><h2 className="mt-3 font-display text-4xl font-bold">A plan for your next chapter.</h2><div className="mx-auto mt-8 inline-flex rounded-full border border-line bg-white p-1 text-sm"><button onClick={() => setAnnual(false)} className={`rounded-full px-4 py-2 ${!annual ? "bg-ink text-white" : ""}`}>Monthly</button><button onClick={() => setAnnual(true)} className={`rounded-full px-4 py-2 ${annual ? "bg-violet text-white" : ""}`}>Yearly · save 20%</button></div></div><div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">{plans.map((plan) => <div key={plan.name} className={`flex h-full flex-col rounded-card p-8 ${plan.featured ? "bg-violet text-white" : "border border-line bg-white"}`}><p className="font-bold">{plan.name}</p><p className="mt-2 min-h-12 text-sm opacity-75">{plan.description}</p><p className="mt-7 min-h-16 font-display text-5xl font-bold">{plan.monthly === 0 ? "Custom" : `$${annual ? plan.yearly : plan.monthly}`}<span className="text-base font-normal opacity-70">{plan.monthly === 0 ? "" : " / seat / mo"}</span></p><a href={plan.monthly === 0 ? "mailto:hello@signalnest.example" : "#contact"} className={`mt-7 block rounded-full py-3 text-center font-semibold ${plan.featured ? "bg-ink hover:bg-white hover:text-ink" : "border border-ink hover:bg-ink hover:text-white"}`}>{plan.action}</a><ul className="mt-8 space-y-3 text-sm">{plan.features.map((feature) => <li key={feature}><Check className={`mr-2 inline ${plan.featured ? "text-mint" : "text-violet"}`} size={16} />{feature}</li>)}</ul></div>)}</div></section>

      <section id="faq" className="border-t border-line bg-white px-6 py-24 lg:px-10"><div className="mx-auto max-w-3xl"><p className="font-bold text-violet">Questions, answered</p><h2 className="mt-3 font-display text-4xl font-bold">Good to know.</h2><div className="mt-10 divide-y divide-line border-y border-line">{questions.map(([q, a], i) => <div key={q}><button className="flex w-full items-center justify-between py-6 text-left font-semibold" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{q}<ChevronDown className={`shrink-0 ${open === i ? "rotate-180 text-violet" : ""}`} /></button><AnimatePresence>{open === i && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-6 leading-7 text-muted">{a}</motion.p>}</AnimatePresence></div>)}</div></div></section>
      <section id="contact" className="mx-auto my-20 max-w-7xl rounded-[28px] bg-lavender px-6 py-16 text-center lg:px-10"><h2 className="font-display text-4xl font-bold sm:text-5xl">Ready to hear the signal?</h2><p className="mx-auto mt-4 max-w-lg text-muted">Start a free workspace and bring your next customer conversation into focus.</p><a href="mailto:hello@signalnest.example" className="mt-8 inline-block rounded-full bg-ink px-7 py-4 font-semibold text-white hover:bg-violet">Book a thoughtful demo <ArrowRight className="ml-2 inline" size={17} /></a></section>
      <footer className="mx-auto grid max-w-7xl gap-8 border-t border-line px-6 py-10 text-sm text-muted sm:grid-cols-4 lg:px-10"><div><span className="font-display text-xl font-bold text-ink">signalnest</span><p className="mt-3 max-w-xs">Customer intelligence, made human.</p></div><div><p className="font-semibold text-ink">Product</p><a className="mt-3 block" href="#product">Features</a><a className="mt-2 block" href="#pricing">Pricing</a></div><div><p className="font-semibold text-ink">Company</p><a className="mt-3 block" href="#customers">Customers</a><a className="mt-2 block" href="mailto:hello@signalnest.example">Contact</a></div><div><p className="font-semibold text-ink">Legal</p><a className="mt-3 block" href="mailto:hello@signalnest.example?subject=Privacy">Privacy</a><a className="mt-2 block" href="mailto:hello@signalnest.example?subject=Terms">Terms</a></div></footer>
      {toast && <div role="status" className="fixed bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-xl">{toast}</div>}
    </main>
  );
}
