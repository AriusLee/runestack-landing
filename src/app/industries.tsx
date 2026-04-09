"use client";

import { useEffect, useRef, useState } from "react";

type Industry = (typeof industryData)[number];

/* ── Lucide-style Icon Components (18×18, stroke-based) ── */
function IconBase({ children }: { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <IconBase>
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </IconBase>
  );
}
function BuildingIcon() {
  return (
    <IconBase>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </IconBase>
  );
}
function ChefHatIcon() {
  return (
    <IconBase>
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
      <line x1="6" y1="17" x2="18" y2="17" />
    </IconBase>
  );
}
function FactoryIcon() {
  return (
    <IconBase>
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </IconBase>
  );
}
function TrendingUpIcon() {
  return (
    <IconBase>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </IconBase>
  );
}
function TruckIcon() {
  return (
    <IconBase>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </IconBase>
  );
}
function ShoppingBagIcon() {
  return (
    <IconBase>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </IconBase>
  );
}
function GraduationCapIcon() {
  return (
    <IconBase>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </IconBase>
  );
}

/* ── Glass helper constants (SHARP corners) ── */
const glass =
  "bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-[2px]";
const glassInner =
  "bg-white/[0.03] border border-white/[0.06] rounded-[2px]";
const glassBright =
  "bg-white/[0.06] backdrop-blur-sm border border-white/[0.1] rounded-[2px]";

/* ══════════════════════════════════════════════════════════
   8 MOCKUP COMPONENTS — each visually distinct
   ══════════════════════════════════════════════════════════ */

/* 1 ── Marketing — Bento grid ── */
function MarketingMockup() {
  return (
    <div className={`${glass} p-3 min-h-[310px]`}>
      <div className="grid grid-cols-3 gap-2">
        {/* AI prompt input */}
        <div className={`col-span-2 ${glassInner} p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
          <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">AI Content Prompt</div>
          <div className={`${glassBright} px-2 py-1.5 text-[9px] text-zinc-400`}>
            &quot;Generate a week of social content about AI automation for SMEs&quot;
          </div>
          <div className="flex gap-1.5 mt-2">
            <span className={`${glassBright} px-1.5 py-0.5 text-[7px] text-emerald`}>Carousel</span>
            <span className={`${glassBright} px-1.5 py-0.5 text-[7px] text-emerald`}>Reel</span>
            <span className={`${glassBright} px-1.5 py-0.5 text-[7px] text-emerald`}>Thread</span>
          </div>
        </div>

        {/* Platform badges */}
        <div className={`${glassInner} p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
          <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-2">Platforms</div>
          <div className="grid grid-cols-2 gap-1">
            {["IG", "TT", "X", "LI"].map((p) => (
              <div key={p} className={`${glassBright} text-center py-1 text-[8px] font-mono font-bold text-emerald`}>
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* Content calendar */}
        <div className={`${glassInner} p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
          <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">Calendar</div>
          <div className="grid grid-cols-7 gap-1">
            {["M","T","W","T","F","S","S"].map((d, i) => (
              <div key={i} className="text-center">
                <div className="text-[6px] text-zinc-600 mb-0.5">{d}</div>
                <div className={`w-1.5 h-1.5 rounded-full mx-auto ${
                  [0,2,4].includes(i) ? "bg-emerald" : [1,3].includes(i) ? "bg-violet-400" : "bg-zinc-700"
                }`} />
              </div>
            ))}
          </div>
        </div>

        {/* Engagement ring chart */}
        <div className={`${glassInner} p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] flex items-center justify-center`}>
          <svg width="56" height="56" viewBox="0 0 56 56">
            <defs>
              <linearGradient id="mkt-ring1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="mkt-ring2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
              </linearGradient>
            </defs>
            <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
            <circle cx="28" cy="28" r="24" fill="none" stroke="url(#mkt-ring1)" strokeWidth="3" strokeDasharray="113 151" strokeLinecap="butt" transform="rotate(-90 28 28)" />
            <circle cx="28" cy="28" r="18" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
            <circle cx="28" cy="28" r="18" fill="none" stroke="url(#mkt-ring2)" strokeWidth="3" strokeDasharray="79 113" strokeLinecap="butt" transform="rotate(-90 28 28)" />
            <text x="28" y="30" textAnchor="middle" className="fill-white text-[8px] font-mono font-bold">+184%</text>
          </svg>
        </div>

        {/* Trending topics */}
        <div className={`${glassInner} p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
          <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">Trending</div>
          {["#AIautomation", "#SmartBiz", "#FutureOfWork"].map((tag) => (
            <div key={tag} className={`${glassBright} px-1.5 py-0.5 mb-1 text-[7px] text-zinc-300 flex items-center gap-1`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 2 ── Property — Sidebar nav + listing grid with real images ── */
function PropertyMockup() {
  const listings = [
    { img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&h=120&fit=crop&auto=format", name: "Sunway Villa", price: "RM 320", stars: 4.9, occ: "96%" },
    { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=120&fit=crop&auto=format", name: "Mont Kiara Suite", price: "RM 180", stars: 4.7, occ: "91%" },
    { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&h=120&fit=crop&auto=format", name: "Bangsar Loft", price: "RM 240", stars: 4.8, occ: "94%" },
    { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=120&fit=crop&auto=format", name: "KLCC Tower", price: "RM 450", stars: 4.9, occ: "98%" },
    { img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=200&h=120&fit=crop&auto=format", name: "Damansara Heights", price: "RM 380", stars: 4.6, occ: "87%" },
    { img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=200&h=120&fit=crop&auto=format", name: "Petaling Jaya", price: "RM 150", stars: 4.5, occ: "89%" },
  ];

  return (
    <div className={`${glass} min-h-[310px] flex overflow-hidden`}>
      {/* Sidebar */}
      <div className={`w-[72px] shrink-0 border-r border-white/[0.06] p-2 flex flex-col gap-1.5`}>
        <div className="text-[7px] text-zinc-500 uppercase tracking-wider mb-1">Nav</div>
        {["Dashboard", "Listings", "Bookings", "Revenue", "Guests"].map((n, i) => (
          <div key={n} className={`text-[7px] px-1.5 py-1 rounded-[1px] ${i === 1 ? "bg-emerald/10 text-emerald" : "text-zinc-600"}`}>
            {n}
          </div>
        ))}
      </div>
      {/* Listing grid */}
      <div className="flex-1 p-2.5">
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-2">Active Listings</div>
        <div className="grid grid-cols-3 gap-2">
          {listings.map((l) => (
            <div key={l.name} className={`${glassInner} overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={l.img} alt={l.name} className="w-full h-[48px] object-cover" />
              <div className="p-1.5">
                <div className="text-[7px] text-zinc-300 font-medium truncate">{l.name}</div>
                <div className="flex items-center justify-between mt-0.5">
                  <span className="text-[8px] font-mono font-bold text-emerald">{l.price}<span className="text-zinc-600 font-normal">/night</span></span>
                  <span className="text-[7px] text-amber-400">{"★".repeat(Math.floor(l.stars))}</span>
                </div>
                <div className="mt-1">
                  <span className={`text-[6px] px-1 py-0.5 rounded-[1px] font-mono ${
                    parseInt(l.occ) >= 95 ? "bg-emerald/10 text-emerald" : "bg-white/[0.04] text-zinc-400"
                  }`}>{l.occ} occ</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 3 ── F&B — Full dashboard ── */
function FnBMockup() {
  const stats = [
    { label: "Revenue", value: "RM 18.4K", color: "emerald", spark: [30,45,40,60,55,70,65] },
    { label: "Orders", value: "342", color: "violet", spark: [20,35,50,40,55,48,62] },
    { label: "Waste", value: "-34%", color: "amber", spark: [80,70,65,55,48,40,34] },
    { label: "Staff Util", value: "91%", color: "sky", spark: [75,80,78,85,88,90,91] },
  ];

  return (
    <div className={`${glass} p-3 min-h-[310px]`}>
      {/* Stat cards with sparklines */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {stats.map((s) => (
          <div key={s.label} className={`${glassInner} p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
            <div className="text-[7px] text-zinc-500 uppercase tracking-wider">{s.label}</div>
            <div className={`text-sm font-mono font-bold mt-0.5 ${
              s.color === "emerald" ? "text-emerald" : s.color === "violet" ? "text-violet-400" : s.color === "amber" ? "text-amber-400" : "text-sky-400"
            }`}>{s.value}</div>
            <svg viewBox="0 0 70 20" className="w-full h-3 mt-1">
              <polyline
                fill="none"
                stroke={s.color === "emerald" ? "#10B981" : s.color === "violet" ? "#8B5CF6" : s.color === "amber" ? "#F59E0B" : "#38BDF8"}
                strokeWidth="1.5"
                strokeLinecap="butt"
                points={s.spark.map((v, i) => `${i * 11},${20 - (v / 100) * 18}`).join(" ")}
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Area chart */}
      <div className={`${glassInner} p-2.5 mb-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-2">Revenue vs Orders (7-day)</div>
        <svg viewBox="0 0 280 60" className="w-full h-[60px]">
          <defs>
            <linearGradient id="fnb-rev" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="fnb-ord" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="fnb-rev-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="0,42 40,30 80,35 120,20 160,25 200,15 240,10 280,8 280,60 0,60" fill="url(#fnb-rev-fill)" />
          <polyline points="0,42 40,30 80,35 120,20 160,25 200,15 240,10 280,8" fill="none" stroke="url(#fnb-rev)" strokeWidth="1.5" strokeLinecap="butt" />
          <polyline points="0,48 40,40 80,44 120,32 160,36 200,28 240,22 280,18" fill="none" stroke="url(#fnb-ord)" strokeWidth="1.5" strokeLinecap="butt" strokeDasharray="4 2" />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {/* Inventory stock bars */}
        <div className={`${glassInner} p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
          <div className="text-[7px] text-zinc-500 uppercase tracking-wider mb-1.5">Stock Levels</div>
          {[
            { name: "Chicken", pct: 24, low: true },
            { name: "Rice", pct: 72, low: false },
            { name: "Oil", pct: 18, low: true },
            { name: "Vegetables", pct: 56, low: false },
          ].map((item) => (
            <div key={item.name} className="mb-1">
              <div className="flex justify-between text-[7px] mb-0.5">
                <span className="text-zinc-400">{item.name}</span>
                <span className={`font-mono ${item.low ? "text-amber-400" : "text-zinc-500"}`}>{item.pct}%</span>
              </div>
              <div className="h-1 bg-white/[0.04] rounded-[1px]">
                <div
                  className={`h-full rounded-[1px] ${item.low ? "bg-gradient-to-r from-amber-400/50 to-amber-400" : "bg-gradient-to-r from-emerald/50 to-emerald"}`}
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Staff utilization */}
        <div className={`${glassInner} p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
          <div className="text-[7px] text-zinc-500 uppercase tracking-wider mb-1.5">Staff Utilization</div>
          {[
            { name: "Kitchen", pct: 94, color: "emerald" },
            { name: "Front-of-house", pct: 82, color: "sky" },
            { name: "Prep", pct: 88, color: "violet" },
            { name: "Delivery", pct: 76, color: "amber" },
          ].map((s) => (
            <div key={s.name} className="mb-1">
              <div className="flex justify-between text-[7px] mb-0.5">
                <span className="text-zinc-400">{s.name}</span>
                <span className="text-zinc-500 font-mono">{s.pct}%</span>
              </div>
              <div className="h-1 bg-white/[0.04] rounded-[1px]">
                <div
                  className={`h-full rounded-[1px] bg-gradient-to-r ${
                    s.color === "emerald" ? "from-emerald/50 to-emerald" :
                    s.color === "sky" ? "from-sky-400/50 to-sky-400" :
                    s.color === "violet" ? "from-violet-400/50 to-violet-400" :
                    "from-amber-400/50 to-amber-400"
                  }`}
                  style={{ width: `${s.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 4 ── Manufacturing — Gauges + sensors + progress + alert ── */
function ManufacturingMockup() {
  const gauges = [
    { label: "OEE", value: "87.3%", pct: 0.873, color: "emerald" },
    { label: "Quality", value: "99.2%", pct: 0.992, color: "sky" },
    { label: "Availability", value: "94.1%", pct: 0.941, color: "violet" },
  ];

  return (
    <div className={`${glass} p-3 min-h-[310px]`}>
      {/* Semi-circle gauges */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {gauges.map((g, gi) => (
          <div key={g.label} className={`${glassInner} p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] flex flex-col items-center`}>
            <svg width="72" height="42" viewBox="0 0 72 42">
              <defs>
                <linearGradient id={`mfg-g${gi}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={g.color === "emerald" ? "#10B981" : g.color === "sky" ? "#38BDF8" : "#8B5CF6"} stopOpacity="0.4" />
                  <stop offset="100%" stopColor={g.color === "emerald" ? "#10B981" : g.color === "sky" ? "#38BDF8" : "#8B5CF6"} stopOpacity="1" />
                </linearGradient>
              </defs>
              <path d="M 6 38 A 30 30 0 0 1 66 38" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" strokeLinecap="butt" />
              <path d="M 6 38 A 30 30 0 0 1 66 38" fill="none" stroke={`url(#mfg-g${gi})`} strokeWidth="4" strokeLinecap="butt"
                strokeDasharray={`${g.pct * 94.25} 94.25`} />
              <text x="36" y="36" textAnchor="middle" className="fill-white text-[9px] font-mono font-bold">{g.value}</text>
            </svg>
            <div className="text-[7px] text-zinc-500 uppercase tracking-wider mt-0.5">{g.label}</div>
          </div>
        ))}
      </div>

      {/* Sensor readings */}
      <div className={`${glassInner} p-2 mb-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
        <div className="text-[7px] text-zinc-500 uppercase tracking-wider mb-1.5">Sensor Readings</div>
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "Temp", val: "42°C", ok: true },
            { label: "Vibration", val: "+15%", ok: false },
            { label: "Pressure", val: "2.4 bar", ok: true },
            { label: "Humidity", val: "58%", ok: true },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className={`text-[10px] font-mono font-bold ${s.ok ? "text-zinc-300" : "text-amber-400"}`}>{s.val}</div>
              <div className="text-[6px] text-zinc-600 uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Production line progress bars */}
      <div className={`${glassInner} p-2 mb-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
        <div className="text-[7px] text-zinc-500 uppercase tracking-wider mb-1.5">Production Lines</div>
        {[
          { name: "Line A — Assembly", pct: 92 },
          { name: "Line B — Packaging", pct: 85 },
          { name: "Line C — QC", pct: 68 },
        ].map((line) => (
          <div key={line.name} className="mb-1.5">
            <div className="flex justify-between text-[7px] mb-0.5">
              <span className="text-zinc-400">{line.name}</span>
              <span className="text-zinc-500 font-mono">{line.pct}%</span>
            </div>
            <div className="h-1.5 bg-white/[0.04] rounded-[1px]">
              <div
                className={`h-full rounded-[1px] ${line.pct < 75 ? "bg-gradient-to-r from-amber-400/50 to-amber-400" : "bg-gradient-to-r from-emerald/50 to-emerald"}`}
                style={{ width: `${line.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Amber alert banner */}
      <div className="bg-amber-400/[0.08] border border-amber-400/20 rounded-[2px] px-2.5 py-1.5 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
        <span className="text-[8px] text-amber-300">Motor B-7 bearing wear detected — schedule replacement in 48hrs</span>
      </div>
    </div>
  );
}

/* 5 ── Finance — Stats + donut + pipeline + candlestick ── */
function FinanceMockup() {
  return (
    <div className={`${glass} p-3 min-h-[310px]`}>
      {/* Headline stats */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Pipeline", value: "RM 24M", sub: "8 deals" },
          { label: "IRR", value: "22.4%", sub: "+3.1%" },
          { label: "Reports", value: "6", sub: "auto-gen" },
        ].map((s) => (
          <div key={s.label} className={`${glassInner} p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
            <div className="text-[7px] text-zinc-500 uppercase tracking-wider">{s.label}</div>
            <div className="text-sm font-mono font-bold text-white mt-0.5">{s.value}</div>
            <div className="text-[7px] text-emerald">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        {/* Portfolio donut */}
        <div className={`${glassInner} p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
          <div className="text-[7px] text-zinc-500 uppercase tracking-wider mb-2">Allocation</div>
          <div className="flex items-center gap-3">
            <svg width="64" height="64" viewBox="0 0 64 64">
              <defs>
                <linearGradient id="fin-d1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="fin-d2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="fin-d3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="1" />
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="6" />
              <circle cx="32" cy="32" r="26" fill="none" stroke="url(#fin-d1)" strokeWidth="6" strokeDasharray="65.3 163.4" strokeLinecap="butt" transform="rotate(-90 32 32)" />
              <circle cx="32" cy="32" r="26" fill="none" stroke="url(#fin-d2)" strokeWidth="6" strokeDasharray="49.0 163.4" strokeLinecap="butt" transform="rotate(50 32 32)" />
              <circle cx="32" cy="32" r="26" fill="none" stroke="url(#fin-d3)" strokeWidth="6" strokeDasharray="49.0 163.4" strokeLinecap="butt" transform="rotate(170 32 32)" />
            </svg>
            <div className="space-y-1">
              {[
                { c: "bg-emerald", l: "Tech 40%" },
                { c: "bg-violet-400", l: "F&B 30%" },
                { c: "bg-sky-400", l: "Mfg 30%" },
              ].map((x) => (
                <div key={x.l} className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${x.c}`} />
                  <span className="text-[7px] text-zinc-400">{x.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mini candlestick chart */}
        <div className={`${glassInner} p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
          <div className="text-[7px] text-zinc-500 uppercase tracking-wider mb-2">Market Trend</div>
          <svg viewBox="0 0 120 50" className="w-full h-[50px]">
            {[
              { x: 8, o: 35, c: 20, h: 15, l: 40, up: true },
              { x: 22, o: 22, c: 30, h: 32, l: 18, up: false },
              { x: 36, o: 28, c: 18, h: 14, l: 32, up: true },
              { x: 50, o: 20, c: 25, h: 28, l: 16, up: false },
              { x: 64, o: 24, c: 14, h: 10, l: 28, up: true },
              { x: 78, o: 16, c: 22, h: 25, l: 12, up: false },
              { x: 92, o: 20, c: 10, h: 8, l: 24, up: true },
              { x: 106, o: 12, c: 18, h: 22, l: 8, up: false },
            ].map((c, i) => (
              <g key={i}>
                <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={c.up ? "#10B981" : "#EF4444"} strokeWidth="1" strokeLinecap="butt" />
                <rect x={c.x - 3} y={Math.min(c.o, c.c)} width="6" height={Math.abs(c.o - c.c) || 1} fill={c.up ? "#10B981" : "#EF4444"} rx="0" />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Deal pipeline */}
      <div className={`${glassInner} p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
        <div className="text-[7px] text-zinc-500 uppercase tracking-wider mb-1.5">Deal Pipeline</div>
        {[
          { name: "TechCo Series A", amt: "RM 5M", stage: "Due Diligence", border: "border-l-emerald" },
          { name: "GreenMfg Bridge", amt: "RM 2.5M", stage: "Term Sheet", border: "border-l-violet-400" },
          { name: "FoodChain Seed", amt: "RM 800K", stage: "Screening", border: "border-l-sky-400" },
          { name: "LogiPro Pre-A", amt: "RM 3M", stage: "Negotiation", border: "border-l-amber-400" },
        ].map((d) => (
          <div key={d.name} className={`flex items-center justify-between text-[8px] py-1 px-2 mb-0.5 border-l-2 ${d.border} bg-white/[0.02] rounded-[1px]`}>
            <span className="text-zinc-300">{d.name}</span>
            <span className="text-zinc-500 font-mono">{d.amt}</span>
            <span className="text-emerald text-[7px]">{d.stage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 6 ── Logistics — SVG map + delivery sidebar ── */
function LogisticsMockup() {
  return (
    <div className={`${glass} min-h-[310px] flex overflow-hidden`}>
      {/* Map area */}
      <div className="flex-1 p-2.5 relative">
        <div className="text-[7px] text-zinc-500 uppercase tracking-wider mb-1.5">Live Fleet Map</div>
        <div className={`${glassInner} h-[calc(100%-16px)] relative shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
          <svg viewBox="0 0 200 180" className="w-full h-full">
            {/* Simplified map region outlines */}
            <path d="M40,30 L80,20 L120,35 L160,25 L170,60 L150,90 L160,130 L130,150 L90,140 L60,160 L30,130 L20,80 Z"
              fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            {/* City dots */}
            <circle cx="80" cy="50" r="3" fill="rgba(16,185,129,0.3)" stroke="#10B981" strokeWidth="1" />
            <text x="80" y="44" textAnchor="middle" className="fill-zinc-500 text-[6px]">KL</text>
            <circle cx="140" cy="80" r="2" fill="rgba(16,185,129,0.2)" stroke="#10B981" strokeWidth="0.5" />
            <text x="140" y="74" textAnchor="middle" className="fill-zinc-600 text-[5px]">Penang</text>
            <circle cx="60" cy="130" r="2" fill="rgba(16,185,129,0.2)" stroke="#10B981" strokeWidth="0.5" />
            <text x="60" y="124" textAnchor="middle" className="fill-zinc-600 text-[5px]">JB</text>
            <circle cx="110" cy="110" r="2" fill="rgba(16,185,129,0.2)" stroke="#10B981" strokeWidth="0.5" />
            <text x="110" y="104" textAnchor="middle" className="fill-zinc-600 text-[5px]">Melaka</text>

            {/* Dashed route paths */}
            <path d="M80,50 Q110,40 140,80" fill="none" stroke="#10B981" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
            <path d="M80,50 Q70,90 60,130" fill="none" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
            <path d="M80,50 Q95,80 110,110" fill="none" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />

            {/* Vehicle dots on routes */}
            <circle cx="105" cy="55" r="2.5" fill="#10B981" />
            <circle cx="72" cy="85" r="2.5" fill="#8B5CF6" />
            <circle cx="94" cy="78" r="2.5" fill="#38BDF8" />
          </svg>
        </div>
      </div>

      {/* Delivery sidebar */}
      <div className="w-[160px] shrink-0 border-l border-white/[0.06] p-2.5 flex flex-col gap-2">
        <div className="text-[7px] text-zinc-500 uppercase tracking-wider">Deliveries</div>
        {[
          { id: "#D-1042", route: "KL → Penang", status: "En Route", eta: "2:30 PM", fuel: 72 },
          { id: "#D-1043", route: "KL → JB", status: "En Route", eta: "1:15 PM", fuel: 58 },
          { id: "#D-1044", route: "KL → Melaka", status: "Delivered", eta: "Done", fuel: 34 },
        ].map((d) => (
          <div key={d.id} className={`${glassInner} p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[7px] font-mono font-bold text-zinc-300">{d.id}</span>
              <span className={`w-1.5 h-1.5 rounded-full ${d.status === "Delivered" ? "bg-emerald" : "bg-amber-400"}`} />
            </div>
            <div className="text-[7px] text-zinc-400 mb-0.5">{d.route}</div>
            <div className="flex items-center justify-between text-[6px] mb-1">
              <span className={d.status === "Delivered" ? "text-emerald" : "text-amber-400"}>{d.status}</span>
              <span className="text-zinc-500 font-mono">ETA {d.eta}</span>
            </div>
            <div className="text-[6px] text-zinc-600 mb-0.5">Fuel</div>
            <div className="h-1 bg-white/[0.04] rounded-[1px]">
              <div
                className={`h-full rounded-[1px] bg-gradient-to-r ${d.fuel > 50 ? "from-emerald/50 to-emerald" : "from-amber-400/50 to-amber-400"}`}
                style={{ width: `${d.fuel}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 7 ── Retail — Metrics + product grid + funnel + segments ── */
function RetailMockup() {
  const products = [
    { img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=120&fit=crop&auto=format", name: "Wireless Earbuds", price: "RM 89", sold: 342 },
    { img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=120&fit=crop&auto=format", name: "Artisan Bread", price: "RM 12", sold: 1204 },
    { img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200&h=120&fit=crop&auto=format", name: "Ceramic Mug", price: "RM 28", sold: 567 },
    { img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=200&h=120&fit=crop&auto=format", name: "Scented Candle", price: "RM 35", sold: 289 },
  ];

  return (
    <div className={`${glass} p-3 min-h-[310px]`}>
      {/* Metrics bar */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {[
          { label: "Revenue", value: "RM 48K", trend: "+22%" },
          { label: "Orders", value: "1,842", trend: "+15%" },
          { label: "AOV", value: "RM 26", trend: "+8%" },
          { label: "Stockouts", value: "0", trend: "prevented" },
        ].map((m) => (
          <div key={m.label} className={`${glassInner} p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
            <div className="text-[7px] text-zinc-500 uppercase tracking-wider">{m.label}</div>
            <div className="text-[11px] font-mono font-bold text-white">{m.value}</div>
            <div className="text-[7px] text-emerald">{m.trend}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        {/* Product cards */}
        <div className={`${glassInner} p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
          <div className="text-[7px] text-zinc-500 uppercase tracking-wider mb-1.5">Top Products</div>
          <div className="grid grid-cols-2 gap-1.5">
            {products.map((p) => (
              <div key={p.name} className={`${glassBright} overflow-hidden`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.name} className="w-full h-[36px] object-cover" />
                <div className="p-1">
                  <div className="text-[6px] text-zinc-300 truncate">{p.name}</div>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-[7px] font-mono font-bold text-emerald">{p.price}</span>
                    <span className="text-[6px] text-zinc-500 font-mono">{p.sold} sold</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion funnel + segments */}
        <div className="space-y-2">
          <div className={`${glassInner} p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
            <div className="text-[7px] text-zinc-500 uppercase tracking-wider mb-1.5">Conversion Funnel</div>
            {[
              { stage: "Visitors", pct: 100, w: "100%" },
              { stage: "Add to Cart", pct: 42, w: "42%" },
              { stage: "Checkout", pct: 28, w: "28%" },
              { stage: "Purchase", pct: 18, w: "18%" },
            ].map((f) => (
              <div key={f.stage} className="mb-1">
                <div className="flex justify-between text-[6px] mb-0.5">
                  <span className="text-zinc-400">{f.stage}</span>
                  <span className="text-zinc-500 font-mono">{f.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/[0.04] rounded-[1px]">
                  <div className="h-full rounded-[1px] bg-gradient-to-r from-emerald/50 to-emerald" style={{ width: f.w }} />
                </div>
              </div>
            ))}
          </div>

          <div className={`${glassInner} p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
            <div className="text-[7px] text-zinc-500 uppercase tracking-wider mb-1">Segments</div>
            {[
              { name: "Repeat Buyers", pct: "38%", c: "emerald" },
              { name: "First-time", pct: "45%", c: "sky" },
              { name: "VIP", pct: "17%", c: "violet" },
            ].map((s) => (
              <div key={s.name} className="flex items-center gap-1.5 text-[7px] py-0.5">
                <span className={`w-1.5 h-1.5 rounded-full ${s.c === "emerald" ? "bg-emerald" : s.c === "sky" ? "bg-sky-400" : "bg-violet-400"}`} />
                <span className="text-zinc-400 flex-1">{s.name}</span>
                <span className="text-zinc-500 font-mono">{s.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* 8 ── Education — Stats + progress rings + grades + at-risk ── */
function EducationMockup() {
  const courses = [
    { name: "Data Science 101", pct: 0.92, instructor: "Dr. Lim", color: "emerald" },
    { name: "Business Analytics", pct: 0.87, instructor: "Prof. Tan", color: "sky" },
    { name: "AI Fundamentals", pct: 0.78, instructor: "Dr. Raj", color: "violet" },
  ];

  return (
    <div className={`${glass} p-3 min-h-[310px]`}>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Students", value: "1,842" },
          { label: "Completion", value: "89%" },
          { label: "At Risk", value: "23" },
        ].map((s) => (
          <div key={s.label} className={`${glassInner} p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
            <div className="text-[7px] text-zinc-500 uppercase tracking-wider">{s.label}</div>
            <div className="text-sm font-mono font-bold text-white mt-0.5">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Progress rings per course */}
      <div className={`${glassInner} p-2.5 mb-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
        <div className="text-[7px] text-zinc-500 uppercase tracking-wider mb-2">Course Completion</div>
        <div className="grid grid-cols-3 gap-3">
          {courses.map((c, ci) => (
            <div key={c.name} className="flex flex-col items-center">
              <svg width="52" height="52" viewBox="0 0 52 52">
                <defs>
                  <linearGradient id={`edu-r${ci}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={c.color === "emerald" ? "#10B981" : c.color === "sky" ? "#38BDF8" : "#8B5CF6"} stopOpacity="0.4" />
                    <stop offset="100%" stopColor={c.color === "emerald" ? "#10B981" : c.color === "sky" ? "#38BDF8" : "#8B5CF6"} stopOpacity="1" />
                  </linearGradient>
                </defs>
                <circle cx="26" cy="26" r="22" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                <circle cx="26" cy="26" r="22" fill="none" stroke={`url(#edu-r${ci})`} strokeWidth="3"
                  strokeDasharray={`${c.pct * 138.23} 138.23`} strokeLinecap="butt" transform="rotate(-90 26 26)" />
                <text x="26" y="28" textAnchor="middle" className="fill-white text-[8px] font-mono font-bold">{Math.round(c.pct * 100)}%</text>
              </svg>
              <div className="text-[7px] text-zinc-300 mt-1 text-center">{c.name}</div>
              <div className="text-[6px] text-zinc-600">{c.instructor}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {/* Grade distribution bar chart */}
        <div className={`${glassInner} p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
          <div className="text-[7px] text-zinc-500 uppercase tracking-wider mb-1.5">Grade Distribution</div>
          <div className="flex items-end gap-1 h-[40px]">
            {[
              { grade: "A", pct: 28, color: "from-emerald/50 to-emerald" },
              { grade: "B", pct: 35, color: "from-sky-400/50 to-sky-400" },
              { grade: "C", pct: 22, color: "from-violet-400/50 to-violet-400" },
              { grade: "D", pct: 10, color: "from-amber-400/50 to-amber-400" },
              { grade: "F", pct: 5, color: "from-red-400/50 to-red-400" },
            ].map((g) => (
              <div key={g.grade} className="flex flex-col items-center flex-1">
                <div className={`w-full bg-gradient-to-r ${g.color} rounded-[1px]`} style={{ height: `${g.pct * 1.3}px` }} />
                <span className="text-[6px] text-zinc-500 mt-0.5 font-mono">{g.grade}</span>
              </div>
            ))}
          </div>
        </div>

        {/* At-risk students */}
        <div className={`${glassInner} p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
          <div className="text-[7px] text-zinc-500 uppercase tracking-wider mb-1.5">At-Risk Students</div>
          <div className="space-y-1">
            {[
              { name: "Ahmad R.", drop: "42% attendance", flag: "Critical" },
              { name: "Mei Ling C.", drop: "3 missed deadlines", flag: "Warning" },
              { name: "Raj K.", drop: "Grade declining", flag: "Warning" },
            ].map((s) => (
              <div key={s.name} className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-white/[0.06] flex items-center justify-center text-[6px] text-zinc-400 font-bold">
                  {s.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[7px] text-zinc-300 truncate">{s.name}</div>
                  <div className="text-[6px] text-zinc-600">{s.drop}</div>
                </div>
                <span className={`text-[6px] px-1 py-0.5 rounded-[1px] ${s.flag === "Critical" ? "bg-red-400/10 text-red-400" : "bg-amber-400/10 text-amber-400"}`}>
                  {s.flag}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-1.5 text-[7px] text-amber-300 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Intervention emails queued
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   INDUSTRY DATA
   ══════════════════════════════════════════════════════════ */
export const industryData = [
  {
    id: "marketing",
    title: "Marketing & Social",
    tagline: "Always-on content engine.",
    description:
      "AI auto-aggregates trending topics, generates on-brand content, visuals, and short-form video, then schedules everything across all your social platforms — hands-free.",
    icon: MegaphoneIcon,
    mockup: MarketingMockup,
    comparison: {
      task: "Weekly content: research, design, video, copy & schedule",
      manual: { time: "16 hrs", label: "Marketing team" },
      ai: { time: "20 min", label: "Review & approve" },
      saved: "98%",
      savedLabel: "Hands-on time saved",
    },
  },
  {
    id: "property",
    title: "Property Management",
    tagline: "Stop juggling spreadsheets.",
    description:
      "AI-managed listings, dynamic pricing, and booking sync across Airbnb, Booking.com, Agoda — all from one dashboard.",
    icon: BuildingIcon,
    mockup: PropertyMockup,
    comparison: {
      task: "Daily sync: prices & availability for 20 units across 4 portals",
      manual: { time: "90 min", label: "Manual portal updates" },
      ai: { time: "Real-time", label: "Auto-sync everywhere" },
      saved: "100%",
      savedLabel: "No more manual updates",
    },
  },
  {
    id: "fnb",
    title: "Food & Beverage",
    tagline: "From inventory to insights.",
    description:
      "Demand forecasting, automated stock reordering, and waste reduction. Your kitchen runs itself.",
    icon: ChefHatIcon,
    mockup: FnBMockup,
    comparison: {
      task: "Daily inventory check & supplier ordering",
      manual: { time: "2 hrs", label: "Manual stock count" },
      ai: { time: "5 min", label: "AI auto-ordering" },
      saved: "96%",
      savedLabel: "Daily time saved",
    },
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    tagline: "Predict before it breaks.",
    description:
      "Real-time OEE tracking, predictive maintenance alerts, and production line optimization.",
    icon: FactoryIcon,
    mockup: ManufacturingMockup,
    comparison: {
      task: "Detect a machine failure before downtime",
      manual: { time: "4 hrs", label: "Reactive repair" },
      ai: { time: "Instant", label: "Predictive alert" },
      saved: "62%",
      savedLabel: "Downtime reduction",
    },
  },
  {
    id: "finance",
    title: "Investment & Finance",
    tagline: "Your analyst that never sleeps.",
    description:
      "Automated deal flow analysis, portfolio monitoring, valuation models, and investor-ready report generation.",
    icon: TrendingUpIcon,
    mockup: FinanceMockup,
    comparison: {
      task: "Generate an investor-ready quarterly report",
      manual: { time: "8 hrs", label: "Analyst writing" },
      ai: { time: "12 min", label: "AI generation" },
      saved: "97%",
      savedLabel: "Report turnaround",
    },
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    tagline: "Every route, optimized.",
    description:
      "Fleet tracking, route optimization, delivery ETAs, and fuel cost reduction — powered by real-time AI.",
    icon: TruckIcon,
    mockup: LogisticsMockup,
    comparison: {
      task: "Plan optimal routes for 30 daily deliveries",
      manual: { time: "90 min", label: "Manual planning" },
      ai: { time: "3 min", label: "AI optimization" },
      saved: "97%",
      savedLabel: "Planning time + 18% fuel",
    },
  },
  {
    id: "retail",
    title: "Retail & E-commerce",
    tagline: "Sell smarter, stock better.",
    description:
      "Sales forecasting, inventory intelligence, dynamic promotions, and zero-stockout operations.",
    icon: ShoppingBagIcon,
    mockup: RetailMockup,
    comparison: {
      task: "Weekly stock reorder & sales analysis",
      manual: { time: "4 hrs", label: "Manual review" },
      ai: { time: "10 min", label: "AI forecast" },
      saved: "96%",
      savedLabel: "Weekly time saved",
    },
  },
  {
    id: "education",
    title: "Education & Training",
    tagline: "Scale learning, not admin.",
    description:
      "Student progress tracking, at-risk detection, automated communications, and course performance analytics.",
    icon: GraduationCapIcon,
    mockup: EducationMockup,
    comparison: {
      task: "Generate student progress reports",
      manual: { time: "30 min", label: "Per student" },
      ai: { time: "2 min", label: "AI-curated" },
      saved: "93%",
      savedLabel: "Reporting time saved",
    },
  },
];

/* ══════════════════════════════════════════════════════════
   INDUSTRY PANEL — shared by mobile + desktop
   ══════════════════════════════════════════════════════════ */
function IndustryPanel({ ind }: { ind: Industry }) {
  return (
    <div className="space-y-6">
      {/* Top row: text left + compact comparison right */}
      <div className="flex gap-6 items-start">
        {/* Left — title + description + CTA */}
        <div className="flex-1 min-w-0">
          <span className="text-xs text-emerald font-semibold uppercase tracking-[3px]">
            {ind.tagline}
          </span>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
            {ind.title}
          </h3>
          <div className="w-10 h-0.5 bg-gradient-to-r from-emerald to-emerald-light rounded-[1px] mb-4" />
          <p className="text-text-secondary leading-relaxed text-base">
            {ind.description}
          </p>
        </div>

        {/* Right — compact comparison card */}
        <div className="w-[240px] shrink-0 hidden md:block">
          <div className="bg-surface border border-zinc-800 rounded-[2px] p-5 space-y-3">
            <p className="text-xs text-white font-semibold leading-snug mb-1">{ind.comparison.task}</p>
            {/* Before */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Before</span>
              <span className="font-heading text-xl font-bold text-zinc-400">{ind.comparison.manual.time}</span>
            </div>
            {/* Divider */}
            <div className="flex items-center gap-2">
              <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 via-emerald/30 to-emerald/50" />
              <svg className="w-3 h-3 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <div className="flex-1 h-px bg-gradient-to-l from-zinc-800 via-emerald/30 to-emerald/50" />
            </div>
            {/* After */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-emerald uppercase tracking-wider font-medium">After</span>
              <span className="font-heading text-xl font-bold text-emerald">{ind.comparison.ai.time}</span>
            </div>
            {/* Saved */}
            <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
              <span className="text-[10px] text-zinc-400">{ind.comparison.savedLabel}</span>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <span className="font-heading text-xl font-bold text-white">{ind.comparison.saved}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only comparison */}
      <div className="md:hidden">
        <div className="bg-surface border border-zinc-800 rounded-[2px] p-5 space-y-3">
          <p className="text-[10px] text-zinc-500 leading-snug mb-1">{ind.comparison.task}</p>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Before</span>
            <span className="font-heading text-xl font-bold text-zinc-400">{ind.comparison.manual.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 via-emerald/30 to-emerald/50" />
            <svg className="w-3 h-3 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
            <div className="flex-1 h-px bg-gradient-to-l from-zinc-800 via-emerald/30 to-emerald/50" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-emerald uppercase tracking-wider font-medium">After</span>
            <span className="font-heading text-xl font-bold text-emerald">{ind.comparison.ai.time}</span>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
            <span className="text-[10px] text-zinc-400">{ind.comparison.savedLabel}</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span className="font-heading text-xl font-bold text-white">{ind.comparison.saved}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: full-width mockup with glow + fade */}
      <div className="relative">
        <div className="absolute inset-x-8 inset-y-4 bg-emerald/10 rounded-[2px] blur-[60px] pointer-events-none" />
        <div className="relative">
          <ind.mockup />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   INDUSTRIES SECTION — default export
   ══════════════════════════════════════════════════════════ */
export default function IndustriesSection() {
  const [active, setActive] = useState(0);
  const mobileRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mobile: scroll-driven active sync via rAF
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      if (window.matchMedia("(min-width: 1024px)").matches) return;
      const targetY = window.innerHeight * 0.3;
      let bestIdx = 0;
      let bestDist = Infinity;
      mobileRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - targetY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });
      setActive(bestIdx);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const scrollToIndex = (i: number) => {
    const el = mobileRefs.current[i];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="industries" className="py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold text-emerald uppercase tracking-[4px]">
            Industries We Serve
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-4 mb-5">
            AI molded to <span className="text-emerald">your industry</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            We don&apos;t do one-size-fits-all. Every solution is built around
            the patterns and pain points of your specific vertical.
          </p>
        </div>

        {/* Desktop (lg+): tab layout with left sidebar buttons */}
        <div className="hidden lg:grid lg:grid-cols-[220px_1fr] gap-8">
          <div className="flex flex-col gap-1">
            {industryData.map((item, i) => {
              const Icon = item.icon;
              const isActive = active === i;
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(i)}
                  className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-[2px] text-sm font-medium transition-colors duration-200 cursor-pointer text-left ${
                    isActive
                      ? "text-emerald bg-gradient-to-r from-emerald/25 via-emerald/10 to-transparent"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1.5 bottom-1.5 w-[2px] rounded-[1px] bg-emerald transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <Icon />
                  <span className="flex-1">{item.title}</span>
                </button>
              );
            })}
          </div>

          <IndustryPanel ind={industryData[active]} />
        </div>

        {/* Mobile (<lg): sticky icon nav on left + stacked panels on right */}
        <div className="lg:hidden flex gap-4">
          <nav className="sticky top-20 self-start flex flex-col gap-1.5 py-2 z-10">
            {industryData.map((item, i) => {
              const Icon = item.icon;
              const isActive = active === i;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToIndex(i)}
                  aria-label={item.title}
                  className={`w-10 h-10 flex items-center justify-center transition-colors duration-200 cursor-pointer ${
                    isActive ? "text-emerald" : "text-zinc-700 hover:text-zinc-400"
                  }`}
                >
                  <Icon />
                </button>
              );
            })}
          </nav>

          <div className="flex-1 min-w-0 space-y-24">
            {industryData.map((item, i) => (
              <div
                key={item.id}
                ref={(el) => {
                  mobileRefs.current[i] = el;
                }}
              >
                <IndustryPanel ind={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-text-muted text-sm mb-4">
            Don&apos;t see your industry? We adapt to any vertical.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-surface hover:bg-surface-light text-zinc-200 border border-zinc-700 font-semibold px-6 py-3 rounded-[2px] transition cursor-pointer"
          >
            Tell us about your business
          </a>
        </div>
      </div>
    </section>
  );
}
