"use client";

import { useEffect, useRef, useState } from "react";

/* ── Step illustrations (shared visual language) ── */

function DiscoverIllustration() {
  return (
    <svg viewBox="0 0 320 240" fill="none" className="w-full h-auto">
      <defs>
        <radialGradient id="discoverGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="120" r="100" fill="url(#discoverGlow)" />
      {/* Grid of operation nodes */}
      {Array.from({ length: 5 }).map((_, r) =>
        Array.from({ length: 6 }).map((_, c) => {
          const x = 50 + c * 44;
          const y = 50 + r * 32;
          const isHot = (r === 2 && c === 3) || (r === 1 && c === 1);
          return (
            <rect
              key={`${r}-${c}`}
              x={x}
              y={y}
              width="28"
              height="20"
              rx="3"
              fill={isHot ? "#10B981" : "#18181B"}
              fillOpacity={isHot ? "0.18" : "1"}
              stroke={isHot ? "#10B981" : "#27272A"}
              strokeWidth="1"
            >
              {isHot && (
                <animate
                  attributeName="fill-opacity"
                  values="0.1;0.35;0.1"
                  dur="2.4s"
                  repeatCount="indefinite"
                  begin={r === 2 ? "0s" : "1.2s"}
                />
              )}
            </rect>
          );
        })
      )}
      {/* Scanning ring (orbits the grid center) */}
      <g>
        <circle
          cx="182"
          cy="124"
          r="34"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          opacity="0.7"
        />
        <circle cx="182" cy="124" r="3" fill="#10B981">
          <animate attributeName="r" values="3;5;3" dur="1.6s" repeatCount="indefinite" />
        </circle>
        {/* Sonar sweep */}
        <circle
          cx="182"
          cy="124"
          r="6"
          fill="none"
          stroke="#10B981"
          strokeWidth="1.5"
          opacity="0"
        >
          <animate attributeName="r" values="4;36;36" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 160 130"
          to="360 160 130"
          dur="14s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
}

function DesignIllustration() {
  return (
    <svg viewBox="0 0 320 240" fill="none" className="w-full h-auto">
      <defs>
        <radialGradient id="designGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="120" r="110" fill="url(#designGlow)" />
      {/* Inputs (left) */}
      {[60, 110, 160].map((y, i) => (
        <g key={i}>
          <rect x="30" y={y} width="60" height="20" rx="3" fill="#18181B" stroke="#3F3F46" strokeWidth="1" />
          <rect x="38" y={y + 7} width="28" height="2" rx="1" fill="#52525B" />
          <rect x="38" y={y + 12} width="18" height="2" rx="1" fill="#3F3F46" />
        </g>
      ))}
      {/* Central engine */}
      <rect x="130" y="90" width="70" height="60" rx="6" fill="#0A0A0A" stroke="#10B981" strokeWidth="1.5">
        <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="2.8s" repeatCount="indefinite" />
      </rect>
      <rect x="138" y="100" width="54" height="6" rx="2" fill="#10B981" fillOpacity="0.25">
        <animate attributeName="fill-opacity" values="0.15;0.45;0.15" dur="2.8s" repeatCount="indefinite" />
      </rect>
      <rect x="138" y="112" width="40" height="4" rx="1" fill="#27272A" />
      <rect x="138" y="120" width="48" height="4" rx="1" fill="#27272A" />
      <rect x="138" y="128" width="32" height="4" rx="1" fill="#27272A" />
      <text x="165" y="146" textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="700" letterSpacing="1">
        AI ENGINE
      </text>
      {/* Outputs (right) */}
      {[60, 110, 160].map((y, i) => (
        <g key={i}>
          <rect x="230" y={y} width="60" height="20" rx="3" fill="#18181B" stroke="#10B981" strokeWidth="1" strokeOpacity="0.4" />
          <rect x="238" y={y + 7} width="28" height="2" rx="1" fill="#10B981" fillOpacity="0.5" />
          <rect x="238" y={y + 12} width="18" height="2" rx="1" fill="#10B981" fillOpacity="0.3" />
        </g>
      ))}
      {/* Input connections — flowing dashes toward engine */}
      {[70, 120, 170].map((y, i) => (
        <line
          key={`in-${i}`}
          x1="90"
          y1={y}
          x2="130"
          y2="120"
          stroke="#52525B"
          strokeWidth="1"
          strokeDasharray="3 4"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="14"
            to="0"
            dur="1.6s"
            repeatCount="indefinite"
            begin={`${i * 0.2}s`}
          />
        </line>
      ))}
      {/* Output connections — flowing dashes away from engine */}
      {[70, 120, 170].map((y, i) => (
        <line
          key={`out-${i}`}
          x1="200"
          y1="120"
          x2="230"
          y2={y}
          stroke="#10B981"
          strokeWidth="1"
          strokeOpacity="0.6"
          strokeDasharray="3 4"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-14"
            dur="1.6s"
            repeatCount="indefinite"
            begin={`${i * 0.2 + 0.4}s`}
          />
        </line>
      ))}
    </svg>
  );
}

function BuildIllustration() {
  return (
    <svg viewBox="0 0 320 240" fill="none" className="w-full h-auto">
      <defs>
        <radialGradient id="buildGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="120" r="110" fill="url(#buildGlow)" />
      {/* Terminal window */}
      <rect x="40" y="30" width="240" height="180" rx="8" fill="#0A0A0A" stroke="#27272A" strokeWidth="1" />
      <rect x="40" y="30" width="240" height="26" rx="8" fill="#18181B" />
      <rect x="40" y="48" width="240" height="8" fill="#18181B" />
      <circle cx="58" cy="43" r="3.5" fill="#EF4444" opacity="0.7" />
      <circle cx="72" cy="43" r="3.5" fill="#F59E0B" opacity="0.7" />
      <circle cx="86" cy="43" r="3.5" fill="#10B981" opacity="0.7" />
      <text x="160" y="46" textAnchor="middle" fill="#52525B" fontSize="7" fontFamily="monospace">
        ~/runestack/deploy
      </text>
      {/* Code lines */}
      {[
        { x: 56, w: 12, c: "#10B981", o: 0.7 },
        { x: 72, w: 60, c: "#A1A1AA", o: 0.35 },
        { x: 136, w: 36, c: "#3B82F6", o: 0.6 },
      ].map((l, i) => (
        <rect key={`l1-${i}`} x={l.x} y="74" width={l.w} height="4" rx="1" fill={l.c} opacity={l.o} />
      ))}
      {[
        { x: 64, w: 18, c: "#3B82F6", o: 0.6 },
        { x: 86, w: 70, c: "#A1A1AA", o: 0.35 },
      ].map((l, i) => (
        <rect key={`l2-${i}`} x={l.x} y="86" width={l.w} height="4" rx="1" fill={l.c} opacity={l.o} />
      ))}
      {[
        { x: 64, w: 24, c: "#10B981", o: 0.5 },
        { x: 92, w: 50, c: "#A1A1AA", o: 0.35 },
        { x: 146, w: 30, c: "#F59E0B", o: 0.55 },
      ].map((l, i) => (
        <rect key={`l3-${i}`} x={l.x} y="98" width={l.w} height="4" rx="1" fill={l.c} opacity={l.o} />
      ))}
      <rect x="56" y="110" width="12" height="4" rx="1" fill="#10B981" opacity="0.7" />
      <rect x="72" y="110" width="80" height="4" rx="1" fill="#A1A1AA" opacity="0.35" />
      {/* Deploy block */}
      <rect x="56" y="138" width="208" height="52" rx="4" fill="#10B981" fillOpacity="0.06" stroke="#10B981" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="72" cy="156" r="4" fill="#10B981">
        <animate attributeName="opacity" values="1;0.4;1" dur="1.4s" repeatCount="indefinite" />
      </circle>
      {/* Pulse ring */}
      <circle cx="72" cy="156" r="4" fill="none" stroke="#10B981" strokeWidth="1.5" opacity="0">
        <animate attributeName="r" values="4;14;14" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="86" y="160" fill="#10B981" fontSize="9" fontWeight="700" letterSpacing="0.5">
        DEPLOYING TO PRODUCTION
      </text>
      <rect x="72" y="172" width="180" height="6" rx="3" fill="#0A0A0A" stroke="#27272A" strokeWidth="0.5" />
      {/* Animated progress bar */}
      <rect x="72" y="172" width="0" height="6" rx="3" fill="#10B981" opacity="0.85">
        <animate attributeName="width" values="0;180;180" keyTimes="0;0.85;1" dur="3.6s" repeatCount="indefinite" />
      </rect>
      <text x="244" y="160" textAnchor="end" fill="#10B981" fontSize="7" fontFamily="monospace">
        <animate
          attributeName="opacity"
          values="0.7;1;0.7"
          dur="1.4s"
          repeatCount="indefinite"
        />
        BUILDING…
      </text>
    </svg>
  );
}

function ScaleIllustration() {
  return (
    <svg viewBox="0 0 320 240" fill="none" className="w-full h-auto">
      <defs>
        <radialGradient id="scaleGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="160" cy="120" r="110" fill="url(#scaleGlow)" />
      {/* Chart card */}
      <rect x="30" y="30" width="260" height="180" rx="8" fill="#0A0A0A" stroke="#27272A" strokeWidth="1" />
      {/* Header */}
      <text x="46" y="56" fill="#A1A1AA" fontSize="9" fontWeight="600" letterSpacing="1">EFFICIENCY GAINS</text>
      <rect x="220" y="44" width="56" height="16" rx="3" fill="#10B981" fillOpacity="0.12" stroke="#10B981" strokeOpacity="0.4" />
      <text x="248" y="55" textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="700">+142%</text>
      {/* Grid */}
      {[80, 110, 140, 170].map((y) => (
        <line key={y} x1="46" y1={y} x2="274" y2={y} stroke="#1F1F23" strokeWidth="1" />
      ))}
      {/* Area */}
      <path
        d="M56,168 L88,156 L120,142 L152,118 L184,96 L216,76 L248,62 L264,54 L264,182 L56,182 Z"
        fill="url(#areaFill)"
        opacity="0"
      >
        <animate attributeName="opacity" from="0" to="1" dur="1.2s" begin="1.6s" fill="freeze" />
      </path>
      {/* Line — draws on */}
      <polyline
        points="56,168 88,156 120,142 152,118 184,96 216,76 248,62 264,54"
        stroke="#10B981"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="280"
        strokeDashoffset="280"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="280"
          to="0"
          dur="2.4s"
          fill="freeze"
        />
      </polyline>
      {/* Data points — fade in along the line */}
      {[
        [56, 168], [88, 156], [120, 142], [152, 118], [184, 96], [216, 76], [248, 62],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#0A0A0A" stroke="#10B981" strokeWidth="1.5" opacity="0">
          <animate
            attributeName="opacity"
            from="0"
            to="1"
            dur="0.3s"
            begin={`${0.2 + i * 0.3}s`}
            fill="freeze"
          />
        </circle>
      ))}
      <circle cx="264" cy="54" r="5" fill="#10B981" opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="2.4s" fill="freeze" />
      </circle>
      {/* Pulse ring on latest point */}
      <circle cx="264" cy="54" r="5" fill="none" stroke="#10B981" strokeWidth="1.5" opacity="0">
        <animate attributeName="r" values="5;16;16" dur="2s" begin="2.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0" dur="2s" begin="2.6s" repeatCount="indefinite" />
      </circle>
      {/* Stat row */}
      <rect x="46" y="190" width="68" height="12" rx="2" fill="#10B981" fillOpacity="0.08" />
      <text x="80" y="199" textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="700">UPTIME 99.9%</text>
      <rect x="122" y="190" width="68" height="12" rx="2" fill="#10B981" fillOpacity="0.08" />
      <text x="156" y="199" textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="700">REVENUE ↑38%</text>
      <rect x="198" y="190" width="76" height="12" rx="2" fill="#10B981" fillOpacity="0.08" />
      <text x="236" y="199" textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="700">HOURS SAVED 4K</text>
    </svg>
  );
}

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your operations — identify bottlenecks, repetitive tasks, and high-impact automation opportunities.",
    Illustration: DiscoverIllustration,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We architect a solution tailored to your workflow — choosing the right AI models, integrations, and interfaces.",
    Illustration: DesignIllustration,
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop, test, and deploy your system. Real software, real integrations, real results.",
    Illustration: BuildIllustration,
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We monitor, optimize, and expand. As your business grows, your AI grows with it.",
    Illustration: ScaleIllustration,
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      // Active step = the last step whose top has scrolled past the
      // visual's top edge. Visual is sticky at top-32 (8rem ≈ 128px),
      // plus a small buffer so the title appears to "lock in" right
      // at the visual's top edge.
      const targetY = 128 + 24;
      let bestIdx = 0;
      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= targetY) bestIdx = i;
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

  return (
    <section id="process" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[11px] font-bold text-emerald uppercase tracking-[4px]">
            How It Works
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-4 mb-5">
            From discovery to <span className="italic text-emerald">deployment</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg">
            A proven four-step process that turns operational friction into
            automated efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 md:gap-16 items-start">
          {/* Sticky visual */}
          <div className="hidden md:block md:sticky md:top-32">
            <div className="relative aspect-[4/3] bg-surface border border-zinc-800 rounded-[2px] overflow-hidden">
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-gradient-radial from-emerald/8 via-transparent to-transparent pointer-events-none" />
              {/* Step indicator */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                <span className="font-heading text-[10px] font-bold text-emerald uppercase tracking-[3px]">
                  Step {steps[active].number}
                </span>
                <span className="h-px w-8 bg-emerald/40" />
                <span className="font-heading text-[10px] font-bold text-white/80 uppercase tracking-[2px]">
                  {steps[active].title}
                </span>
              </div>
              {/* Progress dots */}
              <div className="absolute bottom-5 left-5 z-10 flex items-center gap-1.5">
                {steps.map((s, i) => (
                  <span
                    key={s.number}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === active ? "w-8 bg-emerald" : "w-4 bg-zinc-700"
                    }`}
                  />
                ))}
              </div>
              {/* Layered illustrations */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                {steps.map((s, i) => {
                  const Illu = s.Illustration;
                  return (
                    <div
                      key={s.number}
                      className={`absolute inset-0 flex items-center justify-center p-10 transition-all duration-700 ease-out ${
                        i === active
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4 pointer-events-none"
                      }`}
                    >
                      <Illu />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Scrolling step list — last step gets extra trailing space so its
              title can scroll up to the visual's top edge before the section ends. */}
          <div className="space-y-24 md:space-y-40 md:pb-[25vh]">
            {steps.map((step, i) => {
              const Illu = step.Illustration;
              const isActive = i === active;
              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className="relative"
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span
                      className={`font-heading text-[11px] font-bold uppercase tracking-[3px] transition-colors duration-500 ${
                        isActive ? "text-emerald" : "text-zinc-600"
                      }`}
                    >
                      Step {step.number}
                    </span>
                    <span
                      className={`h-px flex-1 max-w-[60px] transition-colors duration-500 ${
                        isActive ? "bg-emerald/50" : "bg-zinc-800"
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-heading text-3xl md:text-4xl font-bold mb-5 transition-colors duration-500 ${
                      isActive ? "text-white" : "text-zinc-500"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`leading-relaxed text-lg transition-colors duration-500 ${
                      isActive ? "text-text-secondary" : "text-zinc-600"
                    }`}
                  >
                    {step.description}
                  </p>

                  {/* Mobile-only inline illustration */}
                  <div className="md:hidden mt-8">
                    <Illu />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
