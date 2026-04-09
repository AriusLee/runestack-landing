"use client";

import { useEffect, useRef, useState } from "react";

type Industry = (typeof industryData)[number];

/* ── Industry Icons (Lucide-style) ── */
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

/* ── Industry Mockup Teasers ── */
/* Each industry gets a mini dashboard/UI preview rendered in CSS */

function MockupWindow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#0C0C0E] border border-zinc-800 rounded-lg overflow-hidden shadow-2xl">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#111113] border-b border-zinc-800">
        <div className="w-2 h-2 rounded-full bg-zinc-700" />
        <div className="w-2 h-2 rounded-full bg-zinc-700" />
        <div className="w-2 h-2 rounded-full bg-zinc-700" />
        <span className="text-[9px] text-zinc-600 ml-2 font-mono">{title}</span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

function StatPill({ label, value, trend }: { label: string; value: string; trend?: string }) {
  return (
    <div className="bg-[#161618] rounded-md px-2.5 py-2">
      <div className="text-[8px] text-zinc-500 uppercase tracking-wider">{label}</div>
      <div className="flex items-baseline gap-1.5 mt-0.5">
        <span className="text-sm font-bold text-white font-mono">{value}</span>
        {trend && <span className="text-[9px] text-emerald font-medium">{trend}</span>}
      </div>
    </div>
  );
}

function BarChart({ bars }: { bars: { h: number; label: string }[] }) {
  return (
    <div className="flex items-end gap-1 h-12">
      {bars.map((b) => (
        <div key={b.label} className="flex flex-col items-center gap-0.5 flex-1">
          <div
            className="w-full bg-emerald/30 rounded-sm min-h-[2px]"
            style={{ height: `${b.h}%` }}
          />
          <span className="text-[7px] text-zinc-600">{b.label}</span>
        </div>
      ))}
    </div>
  );
}

function TableRow({ cells, highlight }: { cells: string[]; highlight?: boolean }) {
  return (
    <div className={`flex items-center text-[9px] py-1 px-1.5 rounded ${highlight ? "bg-emerald/5" : ""}`}>
      {cells.map((c, i) => (
        <span
          key={i}
          className={`flex-1 ${i === 0 ? "text-zinc-300 font-medium" : "text-zinc-500"} ${
            c.startsWith("+") || c === "Active" || c === "Synced" || c === "On Track" || c === "Optimal"
              ? "!text-emerald"
              : c === "Low" || c === "Alert" || c === "Overdue"
                ? "!text-amber-400"
                : ""
          }`}
        >
          {c}
        </span>
      ))}
    </div>
  );
}

function StatusDot({ color }: { color: string }) {
  return <span className={`inline-block w-1.5 h-1.5 rounded-full ${color}`} />;
}

/* ── Property Management Mockup ── */
function PropertyMockup() {
  return (
    <MockupWindow title="PropSync — Listing Manager">
      <div className="grid grid-cols-3 gap-2 mb-3">
        <StatPill label="Listings" value="142" trend="+12 this week" />
        <StatPill label="Occupancy" value="94%" trend="+3.2%" />
        <StatPill label="Revenue" value="RM 48K" trend="+18%" />
      </div>
      <div className="bg-[#161618] rounded-md p-2">
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">Platform Sync Status</div>
        <TableRow cells={["Airbnb", "48 units", "Synced", "RM 12,400"]} highlight />
        <TableRow cells={["Booking.com", "36 units", "Synced", "RM 9,800"]} />
        <TableRow cells={["Agoda", "28 units", "Synced", "RM 7,200"]} />
        <TableRow cells={["Direct", "30 units", "Active", "RM 18,600"]} highlight />
      </div>
    </MockupWindow>
  );
}

/* ── F&B Mockup ── */
function FnBMockup() {
  return (
    <MockupWindow title="Kitchen AI — Inventory & Demand">
      <div className="grid grid-cols-3 gap-2 mb-3">
        <StatPill label="Waste Reduced" value="34%" trend="-RM 2.1K" />
        <StatPill label="Stock Items" value="286" />
        <StatPill label="Auto-Orders" value="12" trend="today" />
      </div>
      <div className="bg-[#161618] rounded-md p-2 mb-2">
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">Demand Forecast — Next 7 Days</div>
        <BarChart bars={[
          { h: 60, label: "Mon" }, { h: 85, label: "Tue" }, { h: 70, label: "Wed" },
          { h: 90, label: "Thu" }, { h: 100, label: "Fri" }, { h: 95, label: "Sat" }, { h: 75, label: "Sun" },
        ]} />
      </div>
      <div className="bg-[#161618] rounded-md p-2">
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">Restock Alerts</div>
        <TableRow cells={["Chicken Breast", "2.4 kg left", "Low", "Auto-ordered"]} />
        <TableRow cells={["Cooking Oil", "5L left", "Low", "Auto-ordered"]} highlight />
      </div>
    </MockupWindow>
  );
}

/* ── Manufacturing Mockup ── */
function ManufacturingMockup() {
  return (
    <MockupWindow title="LineWatch — Production Monitor">
      <div className="grid grid-cols-3 gap-2 mb-3">
        <StatPill label="OEE" value="87.3%" trend="+4.1%" />
        <StatPill label="Downtime" value="12 min" trend="-62%" />
        <StatPill label="Output" value="2,841" trend="units/hr" />
      </div>
      <div className="bg-[#161618] rounded-md p-2 mb-2">
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">Production Lines</div>
        <TableRow cells={["Line A — Assembly", "Running", "Optimal", "412/hr"]} highlight />
        <TableRow cells={["Line B — Packaging", "Running", "Optimal", "380/hr"]} />
        <TableRow cells={["Line C — QC", "Alert", "Alert", "Vibration +15%"]} />
      </div>
      <div className="bg-[#161618] rounded-md p-2">
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">Predictive Maintenance</div>
        <div className="flex items-center gap-2 text-[9px] text-zinc-400 py-1">
          <StatusDot color="bg-amber-400" />
          <span>Motor B-7 bearing wear detected — schedule replacement in 48hrs</span>
        </div>
      </div>
    </MockupWindow>
  );
}

/* ── Investment & Finance Mockup ── */
function FinanceMockup() {
  return (
    <MockupWindow title="DealFlow AI — Portfolio Intelligence">
      <div className="grid grid-cols-3 gap-2 mb-3">
        <StatPill label="Pipeline" value="RM 24M" trend="8 deals" />
        <StatPill label="IRR" value="22.4%" trend="+3.1%" />
        <StatPill label="Reports" value="6" trend="auto-generated" />
      </div>
      <div className="bg-[#161618] rounded-md p-2">
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">Deal Pipeline</div>
        <TableRow cells={["TechCo Series A", "RM 5M", "Due Diligence", "On Track"]} highlight />
        <TableRow cells={["GreenMfg Bridge", "RM 2.5M", "Term Sheet", "On Track"]} />
        <TableRow cells={["FoodChain Seed", "RM 800K", "Screening", "Active"]} />
        <TableRow cells={["LogiPro Pre-A", "RM 3M", "Negotiation", "Active"]} highlight />
      </div>
    </MockupWindow>
  );
}

/* ── Logistics Mockup ── */
function LogisticsMockup() {
  return (
    <MockupWindow title="RouteAI — Fleet & Delivery Ops">
      <div className="grid grid-cols-3 gap-2 mb-3">
        <StatPill label="Active Fleet" value="28" trend="vehicles" />
        <StatPill label="On-Time" value="96.2%" trend="+8%" />
        <StatPill label="Fuel Saved" value="RM 4.2K" trend="this month" />
      </div>
      <div className="bg-[#161618] rounded-md p-2 mb-2">
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">Live Deliveries</div>
        <TableRow cells={["#D-1042", "KL → Penang", "En Route", "ETA 2:30 PM"]} highlight />
        <TableRow cells={["#D-1043", "JB → Melaka", "En Route", "ETA 1:15 PM"]} />
        <TableRow cells={["#D-1044", "Shah Alam", "Delivered", "+12 min early"]} />
      </div>
      <div className="bg-[#161618] rounded-md p-2">
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">Route Optimization</div>
        <div className="flex items-center gap-2 text-[9px] text-zinc-400 py-1">
          <StatusDot color="bg-emerald" />
          <span>3 routes re-optimized — saving 47 km and 1.2 hrs total</span>
        </div>
      </div>
    </MockupWindow>
  );
}

/* ── Retail / E-commerce Mockup ── */
function RetailMockup() {
  return (
    <MockupWindow title="ShelfIQ — Retail Intelligence">
      <div className="grid grid-cols-3 gap-2 mb-3">
        <StatPill label="Daily Sales" value="RM 18K" trend="+22%" />
        <StatPill label="SKUs" value="1,240" />
        <StatPill label="Stockouts" value="0" trend="prevented" />
      </div>
      <div className="bg-[#161618] rounded-md p-2 mb-2">
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">Sales Trend — This Week</div>
        <BarChart bars={[
          { h: 55, label: "Mon" }, { h: 68, label: "Tue" }, { h: 72, label: "Wed" },
          { h: 80, label: "Thu" }, { h: 100, label: "Fri" }, { h: 92, label: "Sat" }, { h: 60, label: "Sun" },
        ]} />
      </div>
      <div className="bg-[#161618] rounded-md p-2">
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">AI Recommendations</div>
        <div className="flex items-center gap-2 text-[9px] text-zinc-400 py-1">
          <StatusDot color="bg-emerald" />
          <span>Bundle &quot;Weekend Snack Pack&quot; — predicted +15% basket size</span>
        </div>
      </div>
    </MockupWindow>
  );
}

/* ── Marketing & Social Mockup ── */
function MarketingMockup() {
  return (
    <MockupWindow title="ContentEngine — AI Marketing Hub">
      <div className="grid grid-cols-3 gap-2 mb-3">
        <StatPill label="Trends Tracked" value="142" trend="+18 today" />
        <StatPill label="Posts Queued" value="36" trend="this week" />
        <StatPill label="Engagement" value="+184%" trend="vs last mo" />
      </div>
      <div className="bg-[#161618] rounded-md p-2 mb-2">
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">Trending Now — Auto-Detected</div>
        <TableRow cells={["#AIautomation", "TikTok + X", "+340%", "Active"]} highlight />
        <TableRow cells={["#SmartHome", "Instagram + FB", "+128%", "Active"]} />
        <TableRow cells={["#FutureOfWork", "LinkedIn", "+92%", "Active"]} />
      </div>
      <div className="bg-[#161618] rounded-md p-2">
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">AI Content Pipeline</div>
        <div className="flex items-center gap-2 text-[9px] text-zinc-400 py-1">
          <StatusDot color="bg-emerald" />
          <span>3 reels generated · 5 carousels · 2 blog posts — all scheduled across 6 platforms</span>
        </div>
      </div>
    </MockupWindow>
  );
}

/* ── Education Mockup ── */
function EducationMockup() {
  return (
    <MockupWindow title="EduStack — Learning Ops Platform">
      <div className="grid grid-cols-3 gap-2 mb-3">
        <StatPill label="Students" value="1,842" />
        <StatPill label="Completion" value="89%" trend="+7%" />
        <StatPill label="At Risk" value="23" trend="flagged" />
      </div>
      <div className="bg-[#161618] rounded-md p-2 mb-2">
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">Course Performance</div>
        <TableRow cells={["Data Science 101", "312 students", "92%", "On Track"]} highlight />
        <TableRow cells={["Business Analytics", "186 students", "87%", "On Track"]} />
        <TableRow cells={["AI Fundamentals", "244 students", "78%", "Alert"]} />
      </div>
      <div className="bg-[#161618] rounded-md p-2">
        <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-1.5">AI Insights</div>
        <div className="flex items-center gap-2 text-[9px] text-zinc-400 py-1">
          <StatusDot color="bg-amber-400" />
          <span>23 students showing drop-off patterns — intervention emails queued</span>
        </div>
      </div>
    </MockupWindow>
  );
}

/* ── Industry Data ── */
export const industryData = [
  {
    id: "marketing",
    title: "Marketing & Social",
    tagline: "Always-on content engine.",
    description: "AI auto-aggregates trending topics, generates on-brand content, visuals, and short-form video, then schedules everything across all your social platforms — hands-free.",
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
    description: "AI-managed listings, dynamic pricing, and booking sync across Airbnb, Booking.com, Agoda — all from one dashboard.",
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
    description: "Demand forecasting, automated stock reordering, and waste reduction. Your kitchen runs itself.",
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
    description: "Real-time OEE tracking, predictive maintenance alerts, and production line optimization.",
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
    description: "Automated deal flow analysis, portfolio monitoring, valuation models, and investor-ready report generation.",
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
    description: "Fleet tracking, route optimization, delivery ETAs, and fuel cost reduction — powered by real-time AI.",
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
    description: "Sales forecasting, inventory intelligence, dynamic promotions, and zero-stockout operations.",
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
    description: "Student progress tracking, at-risk detection, automated communications, and course performance analytics.",
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

/* ── Industry Detail Panel (shared by mobile + desktop) ── */
function IndustryPanel({ ind }: { ind: Industry }) {
  return (
    <div className="space-y-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div>
          <span className="text-xs text-emerald font-semibold uppercase tracking-[3px]">
            {ind.tagline}
          </span>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
            {ind.title}
          </h3>
          <div className="w-10 h-0.5 bg-gradient-to-r from-emerald to-emerald-light rounded mb-4" />
          <p className="text-text-secondary leading-relaxed text-base">
            {ind.description}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-6 text-sm text-emerald font-semibold hover:underline cursor-pointer"
          >
            Learn more &rarr;
          </a>
        </div>

        {/* Mockup */}
        <div className="relative">
          <div className="absolute inset-0 bg-emerald/5 rounded-2xl blur-2xl -m-4" />
          <div className="relative">
            <ind.mockup />
          </div>
        </div>
      </div>

      {/* Comparison block */}
      <div className="bg-surface border border-zinc-800 rounded-[2px] p-6 md:p-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[10px] font-bold text-emerald uppercase tracking-[3px]">
            Real-World Comparison
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald/30 to-transparent" />
        </div>

        <p className="text-sm text-text-secondary mb-5">
          <span className="text-white font-medium">Task:</span> {ind.comparison.task}
        </p>

        <div className="grid sm:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4 sm:gap-3">
          {/* Manual */}
          <div className="bg-[#0F0F11] border border-zinc-800 rounded-[2px] p-4 text-center">
            <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-[2px] mb-2">
              Manual Process
            </div>
            <div className="font-heading text-3xl font-bold text-zinc-300 mb-1">
              {ind.comparison.manual.time}
            </div>
            <div className="text-[11px] text-text-muted">
              {ind.comparison.manual.label}
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden sm:flex items-center justify-center text-emerald/50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>

          {/* AI */}
          <div className="bg-emerald/5 border border-emerald/40 rounded-[2px] p-4 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald/10 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="text-[9px] font-bold text-emerald uppercase tracking-[2px] mb-2">
                With Runestack
              </div>
              <div className="font-heading text-3xl font-bold text-emerald mb-1">
                {ind.comparison.ai.time}
              </div>
              <div className="text-[11px] text-text-secondary">
                {ind.comparison.ai.label}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden sm:flex items-center justify-center text-emerald/50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>

          {/* Saved */}
          <div className="bg-gradient-to-br from-emerald/15 to-emerald/5 border border-emerald rounded-[2px] p-4 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-emerald/5 blur-xl pointer-events-none" />
            <div className="relative">
              <div className="text-[9px] font-bold text-emerald-light uppercase tracking-[2px] mb-2">
                You Save
              </div>
              <div className="font-heading text-3xl font-bold text-white mb-1">
                {ind.comparison.saved}
              </div>
              <div className="text-[11px] text-emerald-light">
                {ind.comparison.savedLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Industries Section Component ── */
export default function IndustriesSection() {
  const [active, setActive] = useState(0);
  const mobileRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mobile: scroll-driven active sync
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      // Only run on mobile (sticky nav layout)
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

        {/* Desktop: tabs left + single panel right */}
        <div className="hidden lg:grid lg:grid-cols-[220px_1fr] gap-8">
          {/* Left tab buttons */}
          <div className="flex flex-col gap-1">
            {industryData.map((item, i) => {
              const Icon = item.icon;
              const isActive = active === i;
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(i)}
                  className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer text-left ${
                    isActive
                      ? "text-emerald bg-gradient-to-r from-emerald/25 via-emerald/10 to-transparent"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1.5 bottom-1.5 w-[2px] rounded-r-full bg-emerald transition-opacity duration-200 ${
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

        {/* Mobile: sticky icon nav + scrolling stacked panels */}
        <div className="lg:hidden flex gap-4">
          {/* Sticky icon-only nav */}
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

          {/* Scrolling stacked panels */}
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
