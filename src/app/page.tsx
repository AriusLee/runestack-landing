import Image from "next/image";
import {
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiMeta,
  SiMistralai,
  SiPerplexity,
} from "react-icons/si";
import IndustriesSection from "./industries";

/* ── Icon components (Lucide-style) ── */
function Icon({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

function BotIcon({ className = "" }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </Icon>
  );
}

function ZapIcon({ className = "" }: { className?: string }) {
  return (
    <Icon className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </Icon>
  );
}

function LayersIcon({ className = "" }: { className?: string }) {
  return (
    <Icon className={className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </Icon>
  );
}

function GearIcon({ className = "" }: { className?: string }) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </Icon>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <Icon className={className}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </Icon>
  );
}

function RocketIcon({ className = "" }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </Icon>
  );
}


function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <Icon className={className}>
      <polyline points="20 6 9 17 4 12" />
    </Icon>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <Icon className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </Icon>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <Icon className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </Icon>
  );
}

/* ── Data ── */
const services = [
  {
    icon: BotIcon,
    title: "AI Workflow Automation",
    description:
      "We wire AI into your daily operations — automating repetitive tasks, routing decisions, and triggering actions across your tools.",
  },
  {
    icon: LayersIcon,
    title: "Custom Platform Development",
    description:
      "Full-stack platforms built around your business logic. Dashboards, APIs, integrations — designed to scale with you.",
  },
  {
    icon: SearchIcon,
    title: "AI Advisory & Diagnostics",
    description:
      "Structured AI-powered reports that diagnose your business, map growth pathways, and prepare you for capital readiness.",
  },
  {
    icon: GearIcon,
    title: "System Integration",
    description:
      "Connect your existing tools into a single intelligent workflow. We bridge the gaps between platforms so data flows seamlessly.",
  },
];


/* ── Process Illustrations ── */
function DiscoverIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-auto">
      {/* Magnifying glass scanning nodes */}
      <circle cx="80" cy="60" r="28" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" />
      <circle cx="80" cy="60" r="18" stroke="#10B981" strokeWidth="1.5" opacity="0.5" />
      <line x1="94" y1="74" x2="112" y2="92" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      {/* Scattered operation nodes */}
      <rect x="30" y="25" width="24" height="14" rx="3" fill="#1A1A1A" stroke="#3F3F46" strokeWidth="1" />
      <rect x="33" y="29" width="12" height="2" rx="1" fill="#3F3F46" />
      <rect x="33" y="33" width="8" height="2" rx="1" fill="#3F3F46" />
      <rect x="110" y="30" width="24" height="14" rx="3" fill="#1A1A1A" stroke="#3F3F46" strokeWidth="1" />
      <rect x="113" y="34" width="12" height="2" rx="1" fill="#3F3F46" />
      <rect x="113" y="38" width="8" height="2" rx="1" fill="#3F3F46" />
      <rect x="130" y="65" width="24" height="14" rx="3" fill="#1A1A1A" stroke="#3F3F46" strokeWidth="1" />
      <rect x="133" y="69" width="12" height="2" rx="1" fill="#3F3F46" />
      <rect x="133" y="73" width="8" height="2" rx="1" fill="#3F3F46" />
      {/* Highlight found bottleneck */}
      <rect x="62" y="50" width="36" height="20" rx="4" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="1.5" />
      <rect x="67" y="55" width="16" height="2" rx="1" fill="#10B981" opacity="0.7" />
      <rect x="67" y="60" width="10" height="2" rx="1" fill="#10B981" opacity="0.5" />
      <circle cx="92" cy="56" r="3" fill="#10B981" opacity="0.6" />
      {/* Connection lines */}
      <line x1="54" y1="35" x2="62" y2="52" stroke="#3F3F46" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="110" y1="40" x2="98" y2="52" stroke="#3F3F46" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="130" y1="70" x2="98" y2="65" stroke="#3F3F46" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

function DesignIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-auto">
      {/* Blueprint / architecture diagram */}
      {/* Central hub */}
      <rect x="72" y="40" width="56" height="40" rx="6" fill="#1A1A1A" stroke="#10B981" strokeWidth="1.5" />
      <text x="100" y="56" textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="600">AI ENGINE</text>
      <rect x="82" y="62" width="36" height="8" rx="2" fill="#10B981" fillOpacity="0.15" />
      <rect x="85" y="64.5" width="20" height="3" rx="1" fill="#10B981" opacity="0.4" />
      {/* Input modules left */}
      <rect x="10" y="28" width="40" height="16" rx="3" fill="#1A1A1A" stroke="#3F3F46" strokeWidth="1" />
      <text x="30" y="39" textAnchor="middle" fill="#A1A1AA" fontSize="5.5">CRM Data</text>
      <rect x="10" y="52" width="40" height="16" rx="3" fill="#1A1A1A" stroke="#3F3F46" strokeWidth="1" />
      <text x="30" y="63" textAnchor="middle" fill="#A1A1AA" fontSize="5.5">Inventory</text>
      <rect x="10" y="76" width="40" height="16" rx="3" fill="#1A1A1A" stroke="#3F3F46" strokeWidth="1" />
      <text x="30" y="87" textAnchor="middle" fill="#A1A1AA" fontSize="5.5">Bookings</text>
      {/* Output modules right */}
      <rect x="150" y="28" width="40" height="16" rx="3" fill="#1A1A1A" stroke="#3F3F46" strokeWidth="1" />
      <text x="170" y="39" textAnchor="middle" fill="#A1A1AA" fontSize="5.5">Dashboard</text>
      <rect x="150" y="52" width="40" height="16" rx="3" fill="#1A1A1A" stroke="#3F3F46" strokeWidth="1" />
      <text x="170" y="63" textAnchor="middle" fill="#A1A1AA" fontSize="5.5">Alerts</text>
      <rect x="150" y="76" width="40" height="16" rx="3" fill="#1A1A1A" stroke="#3F3F46" strokeWidth="1" />
      <text x="170" y="87" textAnchor="middle" fill="#A1A1AA" fontSize="5.5">Reports</text>
      {/* Arrows in */}
      <line x1="50" y1="36" x2="72" y2="50" stroke="#3F3F46" strokeWidth="1" markerEnd="url(#arrowG)" />
      <line x1="50" y1="60" x2="72" y2="60" stroke="#3F3F46" strokeWidth="1" markerEnd="url(#arrowG)" />
      <line x1="50" y1="84" x2="72" y2="70" stroke="#3F3F46" strokeWidth="1" markerEnd="url(#arrowG)" />
      {/* Arrows out */}
      <line x1="128" y1="50" x2="150" y2="36" stroke="#10B981" strokeWidth="1" markerEnd="url(#arrowE)" />
      <line x1="128" y1="60" x2="150" y2="60" stroke="#10B981" strokeWidth="1" markerEnd="url(#arrowE)" />
      <line x1="128" y1="70" x2="150" y2="84" stroke="#10B981" strokeWidth="1" markerEnd="url(#arrowE)" />
      {/* Arrow markers */}
      <defs>
        <marker id="arrowG" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#3F3F46" strokeWidth="1" />
        </marker>
        <marker id="arrowE" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#10B981" strokeWidth="1" />
        </marker>
      </defs>
    </svg>
  );
}

function BuildIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-auto">
      {/* Terminal / code window */}
      <rect x="30" y="15" width="140" height="90" rx="6" fill="#111113" stroke="#3F3F46" strokeWidth="1" />
      <rect x="30" y="15" width="140" height="18" rx="6" fill="#1A1A1A" />
      <rect x="30" y="27" width="140" height="6" fill="#1A1A1A" />
      <circle cx="42" cy="24" r="3" fill="#EF4444" opacity="0.6" />
      <circle cx="52" cy="24" r="3" fill="#F59E0B" opacity="0.6" />
      <circle cx="62" cy="24" r="3" fill="#10B981" opacity="0.6" />
      {/* Code lines */}
      <rect x="40" y="42" width="8" height="3" rx="1" fill="#10B981" opacity="0.6" />
      <rect x="52" y="42" width="32" height="3" rx="1" fill="#A1A1AA" opacity="0.3" />
      <rect x="48" y="50" width="12" height="3" rx="1" fill="#3B82F6" opacity="0.5" />
      <rect x="64" y="50" width="40" height="3" rx="1" fill="#A1A1AA" opacity="0.3" />
      <rect x="48" y="58" width="16" height="3" rx="1" fill="#10B981" opacity="0.4" />
      <rect x="68" y="58" width="28" height="3" rx="1" fill="#A1A1AA" opacity="0.3" />
      <rect x="48" y="66" width="8" height="3" rx="1" fill="#F59E0B" opacity="0.5" />
      <rect x="60" y="66" width="36" height="3" rx="1" fill="#A1A1AA" opacity="0.3" />
      <rect x="40" y="74" width="8" height="3" rx="1" fill="#10B981" opacity="0.6" />
      {/* Deploy indicator */}
      <rect x="40" y="84" width="50" height="12" rx="3" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="1" />
      <text x="65" y="93" textAnchor="middle" fill="#10B981" fontSize="6" fontWeight="600">DEPLOYING...</text>
      {/* Progress bar */}
      <rect x="96" y="87" width="60" height="6" rx="3" fill="#1A1A1A" />
      <rect x="96" y="87" width="42" height="6" rx="3" fill="#10B981" opacity="0.7" />
    </svg>
  );
}

function ScaleIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-auto">
      {/* Upward trending chart */}
      <rect x="20" y="10" width="160" height="100" rx="6" fill="#111113" stroke="#3F3F46" strokeWidth="1" />
      {/* Grid lines */}
      <line x1="40" y1="30" x2="165" y2="30" stroke="#262626" strokeWidth="0.5" />
      <line x1="40" y1="50" x2="165" y2="50" stroke="#262626" strokeWidth="0.5" />
      <line x1="40" y1="70" x2="165" y2="70" stroke="#262626" strokeWidth="0.5" />
      <line x1="40" y1="90" x2="165" y2="90" stroke="#262626" strokeWidth="0.5" />
      {/* Y-axis labels */}
      <text x="35" y="33" textAnchor="end" fill="#3F3F46" fontSize="5">100%</text>
      <text x="35" y="53" textAnchor="end" fill="#3F3F46" fontSize="5">75%</text>
      <text x="35" y="73" textAnchor="end" fill="#3F3F46" fontSize="5">50%</text>
      <text x="35" y="93" textAnchor="end" fill="#3F3F46" fontSize="5">25%</text>
      {/* Area fill */}
      <path d="M50,85 L70,78 L90,70 L110,55 L130,42 L150,32 L160,28 L160,90 L50,90 Z" fill="#10B981" fillOpacity="0.08" />
      {/* Growth line */}
      <polyline points="50,85 70,78 90,70 110,55 130,42 150,32 160,28" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Data points */}
      <circle cx="50" cy="85" r="3" fill="#0F0F0F" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="70" cy="78" r="3" fill="#0F0F0F" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="90" cy="70" r="3" fill="#0F0F0F" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="110" cy="55" r="3" fill="#0F0F0F" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="130" cy="42" r="3" fill="#0F0F0F" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="150" cy="32" r="3" fill="#0F0F0F" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="160" cy="28" r="3.5" fill="#10B981" />
      {/* Tooltip on latest */}
      <rect x="135" y="14" width="30" height="12" rx="3" fill="#10B981" />
      <text x="150" y="23" textAnchor="middle" fill="white" fontSize="6" fontWeight="700">+142%</text>
      <line x1="150" y1="26" x2="160" y2="28" stroke="#10B981" strokeWidth="1" />
      {/* Stat badges at bottom */}
      <rect x="45" y="95" width="30" height="10" rx="2" fill="#10B981" fillOpacity="0.1" />
      <text x="60" y="102.5" textAnchor="middle" fill="#10B981" fontSize="5" fontWeight="600">OEE ↑</text>
      <rect x="80" y="95" width="35" height="10" rx="2" fill="#10B981" fillOpacity="0.1" />
      <text x="97.5" y="102.5" textAnchor="middle" fill="#10B981" fontSize="5" fontWeight="600">Revenue ↑</text>
      <rect x="120" y="95" width="40" height="10" rx="2" fill="#10B981" fillOpacity="0.1" />
      <text x="140" y="102.5" textAnchor="middle" fill="#10B981" fontSize="5" fontWeight="600">Efficiency ↑</text>
    </svg>
  );
}

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your operations — identify bottlenecks, repetitive tasks, and high-impact automation opportunities.",
    illustration: DiscoverIllustration,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We architect a solution tailored to your workflow — choosing the right AI models, integrations, and interfaces.",
    illustration: DesignIllustration,
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop, test, and deploy your system. Real software, real integrations, real results.",
    illustration: BuildIllustration,
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We monitor, optimize, and expand. As your business grows, your AI grows with it.",
    illustration: ScaleIllustration,
  },
];

const reasons = [
  "We build real systems, not demos",
  "Industry-specific AI — not one-size-fits-all",
  "Full-stack team: AI + engineering + design",
  "We ship fast and iterate faster",
  "Your operations are sacred — we don't cut corners",
  "AI that pays for itself in weeks, not months",
];

/* ── Page ── */
export default function Home() {
  return (
    <>
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 cursor-pointer">
            <Image
              src="/r-logo.png"
              alt="Runestack"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-heading text-lg font-bold text-white">
              Runestack
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-text-secondary hover:text-white transition cursor-pointer">
              About
            </a>
            <a href="#services" className="text-sm text-text-secondary hover:text-white transition cursor-pointer">
              Services
            </a>
            <a href="#industries" className="text-sm text-text-secondary hover:text-white transition cursor-pointer">
              Industries
            </a>
            <a href="#process" className="text-sm text-text-secondary hover:text-white transition cursor-pointer">
              Process
            </a>
            <a
              href="#contact"
              className="bg-emerald hover:bg-emerald-dark text-white text-sm font-semibold px-5 py-2 rounded-[2px] transition cursor-pointer"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-[100svh] flex items-start overflow-hidden pt-28 md:pt-52 pb-32 md:pb-0">
        {/* Background image — runestone anchored to the right */}
        <div
          className="absolute inset-0 bg-no-repeat md:bg-cover md:bg-center"
          style={{
            backgroundImage: "url(/bg-hero.webp)",
            backgroundSize: "auto 100%",
            backgroundPosition: "right center",
          }}
        />

        {/* Mobile overlay — fade from dark left → transparent right so runes show on the right */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/20" />

        {/* Mist layers — desktop only */}
        <div className="hidden md:block">
          {/* Core emerald bloom — sits right on top of the runes */}
          <div
            className="absolute pointer-events-none mix-blend-screen"
            style={{
              top: "25%",
              right: "12%",
              width: "45%",
              height: "60%",
              background:
                "radial-gradient(ellipse at center, rgba(16,185,129,0.55) 0%, rgba(16,185,129,0.25) 25%, rgba(16,185,129,0.08) 50%, transparent 75%)",
              filter: "blur(30px)",
            }}
          />

          {/* Wider atmospheric haze */}
          <div
            className="absolute pointer-events-none mix-blend-screen"
            style={{
              top: "10%",
              right: "0%",
              width: "70%",
              height: "90%",
              background:
                "radial-gradient(ellipse at 60% 50%, rgba(16,185,129,0.30) 0%, rgba(16,185,129,0.12) 30%, transparent 65%)",
              filter: "blur(80px)",
            }}
          />

          {/* Mint highlight close to rune carvings */}
          <div
            className="absolute pointer-events-none mix-blend-screen"
            style={{
              top: "35%",
              right: "22%",
              width: "25%",
              height: "35%",
              background:
                "radial-gradient(circle at center, rgba(52,211,153,0.45) 0%, rgba(52,211,153,0.15) 40%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          {/* Drifting animated mist layers */}
          <div className="absolute inset-0 pointer-events-none mix-blend-screen">
            <div className="mist-layer mist-1" />
            <div className="mist-layer mist-2" />
            <div className="mist-layer mist-3" />
          </div>
        </div>

        {/* Left-side darkening gradient for text legibility (desktop only) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-transparent" />

        {/* Top-left mist — visible on mobile + desktop */}
        <div
          className="absolute pointer-events-none mix-blend-screen"
          style={{
            top: "-10%",
            left: "-5%",
            width: "55%",
            height: "70%",
            background:
              "radial-gradient(ellipse at 30% 30%, rgba(16,185,129,0.45) 0%, rgba(16,185,129,0.18) 30%, rgba(16,185,129,0.05) 55%, transparent 75%)",
            filter: "blur(60px)",
          }}
        />
        <div className="absolute inset-0 pointer-events-none mix-blend-screen">
          <div className="mist-layer mist-tl" />
        </div>

        {/* Subtle vignette from the corners */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,15,15,0.6)_100%)]" />

        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-charcoal" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="inline-block mb-6">
              <span className="text-[11px] font-bold text-emerald uppercase tracking-[4px]">
                Automate &middot; Optimize &middot; Scale
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-5 md:mb-6">
              We build AI systems that{" "}
              <span className="text-emerald">run your operations</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-xl mb-8 md:mb-10 leading-relaxed">
              So you can run your business. Real AI automation for property,
              F&amp;B, manufacturing, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4">
              <a
                href="#contact"
                className="btn-primary group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-white font-semibold tracking-wide cursor-pointer"
              >
                <span className="btn-spark" />
                <span className="relative z-10 flex items-center gap-2.5">
                  Start a Project
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <a
                href="#services"
                className="bg-surface/60 backdrop-blur hover:bg-surface-light text-zinc-200 border border-zinc-700 font-semibold px-8 py-3.5 rounded-[2px] transition text-center cursor-pointer"
              >
                What We Do
              </a>
            </div>
          </div>
        </div>

        {/* ── AI Brand Logos Strip ── */}
        <div className="absolute bottom-6 md:bottom-12 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-12 gap-y-3">
              <SiOpenai className="h-5 md:h-7 w-auto ai-logo" style={{ animationDelay: "0s" }} title="OpenAI" />
              <SiAnthropic className="h-5 md:h-7 w-auto ai-logo" style={{ animationDelay: "0.9s" }} title="Anthropic" />
              <SiGooglegemini className="h-5 md:h-7 w-auto ai-logo" style={{ animationDelay: "1.8s" }} title="Google Gemini" />
              <SiMeta className="h-5 md:h-7 w-auto ai-logo" style={{ animationDelay: "2.7s" }} title="Meta" />
              <SiMistralai className="h-5 md:h-7 w-auto ai-logo" style={{ animationDelay: "3.6s" }} title="Mistral AI" />
              <SiPerplexity className="h-5 md:h-7 w-auto ai-logo" style={{ animationDelay: "4.5s" }} title="Perplexity" />
            </div>

            {/* Scroll down indicator */}
            <a
              href="#about"
              aria-label="Scroll down"
              className="scroll-indicator mt-5 md:mt-8 mx-auto flex flex-col items-center gap-1.5 text-text-muted hover:text-emerald transition cursor-pointer w-fit"
            >
              <span className="text-[8px] uppercase tracking-[2px] font-semibold">Scroll</span>
              <span className="scroll-mouse">
                <span className="scroll-wheel" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[11px] font-bold text-emerald uppercase tracking-[4px]">
                About Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                Ancient wisdom meets modern engineering
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-emerald to-emerald-light rounded mb-6" />
              <p className="text-text-secondary leading-relaxed mb-4">
                Every business we walked into had the same problem — smart
                people buried in repetitive work. Property managers copying
                prices between platforms. Restaurant owners guessing
                tomorrow&apos;s stock order. Factory supervisors staring at
                dashboards they couldn&apos;t act on fast enough.
              </p>
              <p className="text-text-secondary leading-relaxed">
                The tools existed. AI was there. But nobody was wiring it into
                the actual day-to-day operations where it mattered.{" "}
                <span className="text-white font-medium">
                  So we started building.
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Ship it", desc: "Working software beats perfect plans" },
                { label: "Solve the real problem", desc: "We don't sell AI for AI's sake" },
                { label: "Earn the trust", desc: "Your operations are sacred" },
                { label: "Stay curious", desc: "Every industry has patterns to decode" },
              ].map((v) => (
                <div
                  key={v.label}
                  className="bg-surface border border-zinc-800 rounded-xl p-5"
                >
                  <h4 className="font-heading text-sm font-semibold text-emerald mb-2">
                    {v.label}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold text-emerald uppercase tracking-[4px]">
              What We Build
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              AI that works as hard as you do
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Not flashy demos — real systems that plug into real workflows and
              deliver measurable results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-surface border border-zinc-800 rounded-xl p-8 hover:border-emerald/30 transition group"
              >
                <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-emerald/20 transition">
                  <s.icon className="w-6 h-6 text-emerald" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <IndustriesSection />

      {/* ── HOW IT WORKS ── */}
      <section id="process" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold text-emerald uppercase tracking-[4px]">
              How It Works
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              From discovery to deployment
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              A proven four-step process that turns operational friction into
              automated efficiency.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-surface border border-zinc-800 rounded-xl overflow-hidden hover:border-emerald/20 transition group">
                {/* Illustration */}
                <div className="bg-[#0C0C0E] border-b border-zinc-800 px-6 pt-6 pb-4">
                  <step.illustration />
                </div>
                {/* Text */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-heading text-sm font-bold text-emerald bg-emerald/10 w-8 h-8 rounded-lg flex items-center justify-center">
                      {step.number}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold text-emerald uppercase tracking-[4px]">
              Why Runestack
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Built different
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-4 bg-surface border border-zinc-800 rounded-xl p-5"
              >
                <div className="w-8 h-8 bg-emerald/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-4 h-4 text-emerald" />
                </div>
                <span className="text-sm text-zinc-200 leading-relaxed">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION ── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface border border-zinc-800 rounded-xl p-10">
              <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center mb-6">
                <RocketIcon className="w-6 h-6 text-emerald" />
              </div>
              <h3 className="font-heading text-sm font-bold text-emerald uppercase tracking-[3px] mb-3">
                Mission
              </h3>
              <p className="text-lg text-zinc-200 leading-relaxed">
                To eliminate operational friction in every industry by building
                AI systems that work as hard as the people they serve.
              </p>
            </div>
            <div className="bg-surface border border-zinc-800 rounded-xl p-10">
              <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center mb-6">
                <ZapIcon className="w-6 h-6 text-emerald" />
              </div>
              <h3 className="font-heading text-sm font-bold text-emerald uppercase tracking-[3px] mb-3">
                Vision
              </h3>
              <p className="text-lg text-zinc-200 leading-relaxed">
                A world where business owners spend zero time on operations
                that machines can handle better — and all their time on the
                work that actually matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / CONTACT ── */}
      <section id="contact" className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-[11px] font-bold text-emerald uppercase tracking-[4px]">
            Let&apos;s Talk
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Ready to automate?
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Tell us about your operations. We&apos;ll show you what AI can do
            for your business — no fluff, just a real conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@runestack.tech"
              className="bg-emerald hover:bg-emerald-dark text-white font-semibold px-8 py-3.5 rounded-[2px] transition flex items-center gap-2 cursor-pointer"
            >
              <MailIcon className="w-5 h-5" />
              hello@runestack.tech
            </a>
          </div>
          <p className="text-text-muted text-sm mt-6">
            Or reach out on{" "}
            <a
              href="https://linkedin.com/company/runestack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald hover:underline cursor-pointer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/r-logo.png"
              alt="Runestack"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-sm text-text-muted">
              <span className="text-emerald font-semibold">Runestack</span>{" "}
              Technologies &copy; {new Date().getFullYear()}
            </span>
          </div>
          <a
            href="https://runestack.tech"
            className="text-sm text-emerald font-semibold hover:underline cursor-pointer"
          >
            runestack.tech
          </a>
        </div>
      </footer>
    </>
  );
}
