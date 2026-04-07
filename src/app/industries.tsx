"use client";

import { useState } from "react";

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

/* ── Industries Section Component — Tabs Layout ── */
export default function IndustriesSection() {
  const [active, setActive] = useState(0);
  const ind = industryData[active];

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

        {/* Tabs left + content right */}
        <div className="grid lg:grid-cols-[220px_1fr] gap-8">
          {/* Left tab buttons */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {industryData.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`px-4 py-2.5 rounded-[2px] text-sm font-medium transition cursor-pointer text-left whitespace-nowrap lg:whitespace-normal ${
                  active === i
                    ? "bg-emerald text-white shadow-lg shadow-emerald/20"
                    : "bg-surface border border-zinc-800 text-text-secondary hover:text-white hover:border-zinc-600"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Right content */}
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
