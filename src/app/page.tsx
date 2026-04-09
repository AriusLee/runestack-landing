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
import ProcessSection from "./process";

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

function ZapIcon({ className = "" }: { className?: string }) {
  return (
    <Icon className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
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

/* ── Service Illustrations ── */
function WorkflowAutomationIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="w-full h-auto">
      {/* Flow nodes */}
      <rect x="20" y="35" width="50" height="22" rx="3" fill="#0F0F11" stroke="#10B981" strokeOpacity="0.5" strokeWidth="1" />
      <rect x="26" y="42" width="20" height="2" rx="1" fill="#10B981" opacity="0.7" />
      <rect x="26" y="47" width="14" height="2" rx="1" fill="#10B981" opacity="0.4" />
      <text x="45" y="53" textAnchor="middle" fill="#71717A" fontSize="5">TRIGGER</text>

      <rect x="115" y="20" width="50" height="22" rx="3" fill="#0F0F11" stroke="#10B981" strokeWidth="1" />
      <circle cx="125" cy="31" r="3" fill="#10B981" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <rect x="132" y="28" width="22" height="2" rx="1" fill="#A1A1AA" opacity="0.5" />
      <rect x="132" y="33" width="16" height="2" rx="1" fill="#A1A1AA" opacity="0.3" />
      <text x="140" y="50" textAnchor="middle" fill="#10B981" fontSize="5">AI DECISION</text>

      <rect x="115" y="100" width="50" height="22" rx="3" fill="#0F0F11" stroke="#3F3F46" strokeWidth="1" />
      <rect x="121" y="107" width="20" height="2" rx="1" fill="#A1A1AA" opacity="0.5" />
      <rect x="121" y="112" width="14" height="2" rx="1" fill="#A1A1AA" opacity="0.3" />
      <text x="140" y="129" textAnchor="middle" fill="#71717A" fontSize="5">PROCESS</text>

      <rect x="210" y="60" width="50" height="22" rx="3" fill="#0F0F11" stroke="#10B981" strokeOpacity="0.5" strokeWidth="1" />
      <rect x="216" y="67" width="20" height="2" rx="1" fill="#10B981" opacity="0.7" />
      <rect x="216" y="72" width="14" height="2" rx="1" fill="#10B981" opacity="0.4" />
      <text x="235" y="89" textAnchor="middle" fill="#71717A" fontSize="5">ACTION</text>

      {/* Connection lines */}
      <line x1="70" y1="46" x2="115" y2="31" stroke="#10B981" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="70" y1="46" x2="115" y2="111" stroke="#10B981" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="165" y1="31" x2="210" y2="71" stroke="#10B981" strokeWidth="1.2" />
      <line x1="165" y1="111" x2="210" y2="71" stroke="#10B981" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 2" />

      {/* Lightning packets traveling along the flow path: trigger → AI → action */}
      <circle r="2.2" fill="#34D399">
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.4s" repeatCount="indefinite" />
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M 70 46 L 115 31 L 165 31 L 210 71" />
      </circle>
      <circle r="3.5" fill="#34D399" opacity="0.4">
        <animate attributeName="opacity" values="0;0.4;0.4;0" keyTimes="0;0.1;0.9;1" dur="2.4s" repeatCount="indefinite" />
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M 70 46 L 115 31 L 165 31 L 210 71" />
      </circle>

      {/* Secondary path packet (process route) */}
      <circle r="1.8" fill="#10B981">
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
        <animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite" path="M 70 46 L 115 111 L 165 111 L 210 71" />
      </circle>
    </svg>
  );
}

function PlatformDevIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="w-full h-auto">
      {/* Browser/dashboard window */}
      <rect x="20" y="20" width="240" height="125" rx="5" fill="#0F0F11" stroke="#3F3F46" strokeWidth="1" />
      <rect x="20" y="20" width="240" height="14" rx="5" fill="#1A1A1A" />
      <rect x="20" y="29" width="240" height="5" fill="#1A1A1A" />
      <circle cx="30" cy="27" r="2" fill="#3F3F46" />
      <circle cx="38" cy="27" r="2" fill="#3F3F46" />
      <circle cx="46" cy="27" r="2" fill="#3F3F46" />

      {/* Sidebar */}
      <rect x="20" y="34" width="48" height="111" fill="#141416" />
      <rect x="26" y="44" width="36" height="3" rx="1" fill="#10B981" opacity="0.7" />
      <rect x="26" y="52" width="28" height="3" rx="1" fill="#3F3F46" />
      <rect x="26" y="60" width="32" height="3" rx="1" fill="#3F3F46" />
      <rect x="26" y="68" width="24" height="3" rx="1" fill="#3F3F46" />

      {/* Stat cards */}
      <rect x="76" y="44" width="55" height="32" rx="3" fill="#161618" stroke="#27272A" strokeWidth="0.5" />
      <rect x="82" y="50" width="20" height="2" rx="1" fill="#71717A" />
      <rect x="82" y="58" width="30" height="6" rx="1" fill="#10B981" opacity="0.9" />

      <rect x="139" y="44" width="55" height="32" rx="3" fill="#161618" stroke="#27272A" strokeWidth="0.5" />
      <rect x="145" y="50" width="20" height="2" rx="1" fill="#71717A" />
      <rect x="145" y="58" width="30" height="6" rx="1" fill="#34D399" opacity="0.9" />

      <rect x="202" y="44" width="50" height="32" rx="3" fill="#161618" stroke="#27272A" strokeWidth="0.5" />
      <rect x="208" y="50" width="20" height="2" rx="1" fill="#71717A" />
      <rect x="208" y="58" width="28" height="6" rx="1" fill="#10B981" opacity="0.9" />

      {/* Chart area */}
      <rect x="76" y="84" width="176" height="55" rx="3" fill="#141416" stroke="#27272A" strokeWidth="0.5" />
      <polyline points="84,128 100,118 116,122 132,108 148,112 164,98 180,102 196,90 212,94 228,82 244,86 244,135 84,135" fill="#10B981" fillOpacity="0.1" />
      <polyline
        points="84,128 100,118 116,122 132,108 148,112 164,98 180,102 196,90 212,94 228,82 244,86"
        stroke="#10B981"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="240"
        strokeDashoffset="240"
      >
        <animate attributeName="stroke-dashoffset" values="240;0;0;240" keyTimes="0;0.5;0.85;1" dur="4s" repeatCount="indefinite" />
      </polyline>
      {/* Pulse along the line */}
      <circle r="2" fill="#34D399">
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="4s" repeatCount="indefinite" />
        <animateMotion dur="4s" repeatCount="indefinite" path="M 84 128 L 100 118 L 116 122 L 132 108 L 148 112 L 164 98 L 180 102 L 196 90 L 212 94 L 228 82 L 244 86" />
      </circle>
    </svg>
  );
}

function AdvisoryIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="w-full h-auto">
      {/* Document */}
      <rect x="60" y="20" width="160" height="130" rx="3" fill="#0F0F11" stroke="#3F3F46" strokeWidth="1" />
      <rect x="60" y="20" width="160" height="20" fill="#10B981" fillOpacity="0.08" />
      <rect x="70" y="27" width="60" height="6" rx="1" fill="#10B981" opacity="0.9" />
      <rect x="70" y="36" width="40" height="2" rx="1" fill="#71717A" />

      {/* Section: Score */}
      <rect x="70" y="50" width="50" height="3" rx="1" fill="#A1A1AA" opacity="0.6" />
      <rect x="70" y="58" width="140" height="22" rx="2" fill="#161618" stroke="#10B981" strokeOpacity="0.4" strokeWidth="0.5" />
      <text x="78" y="73" fill="#10B981" fontSize="11" fontWeight="700">A+</text>
      <rect x="100" y="65" width="100" height="3" rx="1.5" fill="#27272A" />
      <rect x="100" y="65" height="3" rx="1.5" fill="#10B981">
        <animate attributeName="width" values="0;85;85;0" keyTimes="0;0.4;0.85;1" dur="4s" repeatCount="indefinite" />
      </rect>
      <rect x="100" y="71" width="60" height="2" rx="1" fill="#71717A" />

      {/* Bar chart */}
      <rect x="70" y="90" width="60" height="3" rx="1" fill="#A1A1AA" opacity="0.6" />
      <g>
        <rect x="70" width="14" fill="#10B981" opacity="0.4">
          <animate attributeName="y" values="140;100;100;140" keyTimes="0;0.3;0.85;1" dur="4s" repeatCount="indefinite" />
          <animate attributeName="height" values="0;40;40;0" keyTimes="0;0.3;0.85;1" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="88" width="14" fill="#10B981" opacity="0.6">
          <animate attributeName="y" values="140;108;108;140" keyTimes="0;0.35;0.85;1" dur="4s" repeatCount="indefinite" />
          <animate attributeName="height" values="0;32;32;0" keyTimes="0;0.35;0.85;1" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="106" width="14" fill="#10B981" opacity="0.8">
          <animate attributeName="y" values="140;96;96;140" keyTimes="0;0.4;0.85;1" dur="4s" repeatCount="indefinite" />
          <animate attributeName="height" values="0;44;44;0" keyTimes="0;0.4;0.85;1" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="124" width="14" fill="#34D399">
          <animate attributeName="y" values="140;92;92;140" keyTimes="0;0.45;0.85;1" dur="4s" repeatCount="indefinite" />
          <animate attributeName="height" values="0;48;48;0" keyTimes="0;0.45;0.85;1" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="142" width="14" fill="#10B981">
          <animate attributeName="y" values="140;86;86;140" keyTimes="0;0.5;0.85;1" dur="4s" repeatCount="indefinite" />
          <animate attributeName="height" values="0;54;54;0" keyTimes="0;0.5;0.85;1" dur="4s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Side metrics */}
      <rect x="166" y="100" width="44" height="18" rx="2" fill="#161618" stroke="#27272A" strokeWidth="0.5" />
      <rect x="170" y="105" width="20" height="2" rx="1" fill="#71717A" />
      <rect x="170" y="111" width="30" height="4" rx="1" fill="#10B981" />

      <rect x="166" y="122" width="44" height="18" rx="2" fill="#161618" stroke="#27272A" strokeWidth="0.5" />
      <rect x="170" y="127" width="20" height="2" rx="1" fill="#71717A" />
      <rect x="170" y="133" width="30" height="4" rx="1" fill="#34D399" />
    </svg>
  );
}

function IntegrationIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="w-full h-auto">
      {/* Center hub */}
      <circle cx="140" cy="80" r="22" fill="#0F0F11" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="140" cy="80" r="14" fill="none" stroke="#10B981" strokeOpacity="0.4" strokeWidth="0.8" strokeDasharray="2 2" />
      <text x="140" y="78" textAnchor="middle" fill="#10B981" fontSize="6" fontWeight="700">RUNESTACK</text>
      <text x="140" y="86" textAnchor="middle" fill="#A1A1AA" fontSize="4">CORE</text>

      {/* Outer service nodes + data pulses from center */}
      {[
        { x: 60, y: 30, label: "API", delay: "0s" },
        { x: 220, y: 30, label: "DB", delay: "0.4s" },
        { x: 30, y: 80, label: "CRM", delay: "0.8s" },
        { x: 250, y: 80, label: "ERP", delay: "1.2s" },
        { x: 60, y: 130, label: "WEB", delay: "1.6s" },
        { x: 220, y: 130, label: "APP", delay: "2s" },
      ].map((n, i) => (
        <g key={i}>
          <line x1="140" y1="80" x2={n.x} y2={n.y} stroke="#10B981" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 2" />
          <rect x={n.x - 16} y={n.y - 9} width="32" height="18" rx="3" fill="#0F0F11" stroke="#3F3F46" strokeWidth="1" />
          <text x={n.x} y={n.y + 3} textAnchor="middle" fill="#A1A1AA" fontSize="6" fontWeight="600">{n.label}</text>
          {/* Data packet from hub to this node */}
          <circle r="1.8" fill="#34D399">
            <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="2.4s" begin={n.delay} repeatCount="indefinite" />
            <animateMotion dur="2.4s" begin={n.delay} repeatCount="indefinite" path={`M 140 80 L ${n.x} ${n.y}`} />
          </circle>
        </g>
      ))}

      {/* Pulse rings */}
      <circle cx="140" cy="80" r="22" fill="none" stroke="#10B981" strokeOpacity="0.6" strokeWidth="1">
        <animate attributeName="r" values="22;40;22" dur="3s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function ContentEngineIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="w-full h-auto">
      {/* Trends source on left */}
      <rect x="15" y="30" width="60" height="100" rx="4" fill="#0F0F11" stroke="#3F3F46" strokeWidth="1" />
      <rect x="22" y="38" width="46" height="2" rx="1" fill="#71717A" />
      <rect x="22" y="46" width="46" height="14" rx="2" fill="#161618" />
      <rect x="26" y="50" width="22" height="2" rx="1" fill="#10B981" opacity="0.7" />
      <rect x="26" y="55" width="14" height="2" rx="1" fill="#3F3F46" />
      <rect x="22" y="64" width="46" height="14" rx="2" fill="#161618" />
      <rect x="26" y="68" width="20" height="2" rx="1" fill="#10B981" opacity="0.7" />
      <rect x="26" y="73" width="16" height="2" rx="1" fill="#3F3F46" />
      <rect x="22" y="82" width="46" height="14" rx="2" fill="#161618" />
      <rect x="26" y="86" width="24" height="2" rx="1" fill="#10B981" opacity="0.7" />
      <rect x="26" y="91" width="14" height="2" rx="1" fill="#3F3F46" />
      <text x="45" y="115" textAnchor="middle" fill="#71717A" fontSize="5">TRENDS</text>

      {/* AI engine center */}
      <rect x="110" y="55" width="60" height="50" rx="5" fill="#0F0F11" stroke="#10B981" strokeWidth="1.5" />
      <text x="140" y="73" textAnchor="middle" fill="#10B981" fontSize="6" fontWeight="700">AI ENGINE</text>
      <rect x="118" y="80" width="44" height="3" rx="1" fill="#10B981" fillOpacity="0.3" />
      <rect x="118" y="80" width="32" height="3" rx="1" fill="#10B981" />
      <rect x="118" y="87" width="44" height="3" rx="1" fill="#10B981" fillOpacity="0.3" />
      <rect x="118" y="87" width="38" height="3" rx="1" fill="#10B981" />
      <text x="140" y="100" textAnchor="middle" fill="#A1A1AA" fontSize="4">GENERATING</text>

      {/* Output content cards on right */}
      <rect x="200" y="20" width="65" height="32" rx="3" fill="#0F0F11" stroke="#10B981" strokeOpacity="0.5" strokeWidth="1" />
      <rect x="206" y="26" width="20" height="2" rx="1" fill="#10B981" />
      <rect x="206" y="31" width="40" height="2" rx="1" fill="#3F3F46" />
      <rect x="206" y="36" width="35" height="2" rx="1" fill="#3F3F46" />
      <text x="232" y="48" textAnchor="middle" fill="#71717A" fontSize="4">REEL</text>

      <rect x="200" y="64" width="65" height="32" rx="3" fill="#0F0F11" stroke="#10B981" strokeOpacity="0.5" strokeWidth="1" />
      <rect x="206" y="70" width="20" height="2" rx="1" fill="#34D399" />
      <rect x="206" y="75" width="40" height="2" rx="1" fill="#3F3F46" />
      <rect x="206" y="80" width="35" height="2" rx="1" fill="#3F3F46" />
      <text x="232" y="92" textAnchor="middle" fill="#71717A" fontSize="4">CAROUSEL</text>

      <rect x="200" y="108" width="65" height="32" rx="3" fill="#0F0F11" stroke="#10B981" strokeOpacity="0.5" strokeWidth="1" />
      <rect x="206" y="114" width="20" height="2" rx="1" fill="#10B981" />
      <rect x="206" y="119" width="40" height="2" rx="1" fill="#3F3F46" />
      <rect x="206" y="124" width="35" height="2" rx="1" fill="#3F3F46" />
      <text x="232" y="136" textAnchor="middle" fill="#71717A" fontSize="4">POST</text>

      {/* Connection lines */}
      <line x1="75" y1="80" x2="110" y2="80" stroke="#10B981" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="170" y1="65" x2="200" y2="36" stroke="#10B981" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="170" y1="80" x2="200" y2="80" stroke="#10B981" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="170" y1="95" x2="200" y2="124" stroke="#10B981" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 2" />

      {/* Trends → AI input pulses */}
      <circle r="2" fill="#34D399">
        <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" />
        <animateMotion dur="2s" repeatCount="indefinite" path="M 75 80 L 110 80" />
      </circle>

      {/* AI → Output pulses (3 outputs, staggered) */}
      <circle r="2" fill="#34D399">
        <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="2s" begin="0.6s" repeatCount="indefinite" />
        <animateMotion dur="2s" begin="0.6s" repeatCount="indefinite" path="M 170 65 L 200 36" />
      </circle>
      <circle r="2" fill="#34D399">
        <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="2s" begin="0.9s" repeatCount="indefinite" />
        <animateMotion dur="2s" begin="0.9s" repeatCount="indefinite" path="M 170 80 L 200 80" />
      </circle>
      <circle r="2" fill="#34D399">
        <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="2s" begin="1.2s" repeatCount="indefinite" />
        <animateMotion dur="2s" begin="1.2s" repeatCount="indefinite" path="M 170 95 L 200 124" />
      </circle>
    </svg>
  );
}

function AnalyticsIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="w-full h-auto">
      {/* Main chart panel */}
      <rect x="20" y="20" width="170" height="125" rx="4" fill="#0F0F11" stroke="#3F3F46" strokeWidth="1" />
      <rect x="28" y="28" width="50" height="3" rx="1" fill="#A1A1AA" opacity="0.6" />
      <text x="28" y="45" fill="#10B981" fontSize="14" fontWeight="700">+184%</text>
      <rect x="78" y="40" width="20" height="3" rx="1" fill="#34D399" opacity="0.7" />

      {/* Grid lines */}
      <line x1="28" y1="65" x2="180" y2="65" stroke="#27272A" strokeWidth="0.5" />
      <line x1="28" y1="85" x2="180" y2="85" stroke="#27272A" strokeWidth="0.5" />
      <line x1="28" y1="105" x2="180" y2="105" stroke="#27272A" strokeWidth="0.5" />
      <line x1="28" y1="125" x2="180" y2="125" stroke="#27272A" strokeWidth="0.5" />

      {/* Live area chart */}
      <path d="M28,120 L48,110 L68,115 L88,95 L108,100 L128,80 L148,85 L168,65 L180,60 L180,135 L28,135 Z" fill="#10B981" fillOpacity="0.15" />
      <polyline
        points="28,120 48,110 68,115 88,95 108,100 128,80 148,85 168,65 180,60"
        stroke="#10B981"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="200"
        strokeDashoffset="200"
      >
        <animate attributeName="stroke-dashoffset" values="200;0;0;200" keyTimes="0;0.5;0.85;1" dur="4s" repeatCount="indefinite" />
      </polyline>
      <circle cx="180" cy="60" r="3" fill="#10B981">
        <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      {/* Pulse running along the chart line */}
      <circle r="2.2" fill="#34D399">
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="4s" repeatCount="indefinite" />
        <animateMotion dur="4s" repeatCount="indefinite" path="M 28 120 L 48 110 L 68 115 L 88 95 L 108 100 L 128 80 L 148 85 L 168 65 L 180 60" />
      </circle>

      {/* Side metric cards */}
      <rect x="200" y="20" width="60" height="38" rx="3" fill="#0F0F11" stroke="#27272A" strokeWidth="0.5" />
      <rect x="206" y="26" width="22" height="2" rx="1" fill="#71717A" />
      <text x="206" y="42" fill="#10B981" fontSize="9" fontWeight="700">2,841</text>
      <rect x="206" y="46" width="14" height="2" rx="1" fill="#34D399" opacity="0.7" />

      <rect x="200" y="64" width="60" height="38" rx="3" fill="#0F0F11" stroke="#27272A" strokeWidth="0.5" />
      <rect x="206" y="70" width="22" height="2" rx="1" fill="#71717A" />
      <text x="206" y="86" fill="#10B981" fontSize="9" fontWeight="700">94.7%</text>
      <rect x="206" y="90" width="14" height="2" rx="1" fill="#34D399" opacity="0.7" />

      <rect x="200" y="108" width="60" height="38" rx="3" fill="#0F0F11" stroke="#27272A" strokeWidth="0.5" />
      <rect x="206" y="114" width="22" height="2" rx="1" fill="#71717A" />
      <text x="206" y="130" fill="#10B981" fontSize="9" fontWeight="700">RM 48K</text>
      <rect x="206" y="134" width="14" height="2" rx="1" fill="#34D399" opacity="0.7" />

      {/* Live indicator */}
      <circle cx="170" cy="32" r="2" fill="#10B981">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
      </circle>
      <text x="176" y="34" fill="#10B981" fontSize="5" fontWeight="600">LIVE</text>
    </svg>
  );
}

/* ── Data ── */
const services = [
  {
    title: "AI Workflow Automation",
    subtitle: "Wire AI into your daily ops",
    description:
      "Automate repetitive tasks, route decisions, and trigger actions across your tools without manual handoffs.",
    illustration: WorkflowAutomationIllustration,
  },
  {
    title: "Custom Platform Development",
    subtitle: "Built around your business",
    description:
      "Full-stack dashboards, APIs, and integrations engineered for your exact workflow — designed to scale.",
    illustration: PlatformDevIllustration,
  },
  {
    title: "AI Advisory & Diagnostics",
    subtitle: "Decode your business",
    description:
      "Structured AI reports that diagnose your operations, map growth paths, and prepare you for capital readiness.",
    illustration: AdvisoryIllustration,
  },
  {
    title: "System Integration",
    subtitle: "One intelligent pipeline",
    description:
      "Connect your existing tools into a single workflow. We bridge the gaps so data flows seamlessly.",
    illustration: IntegrationIllustration,
  },
  {
    title: "AI Content Engine",
    subtitle: "Always-on marketing",
    description:
      "Auto-aggregate trends, generate content, and schedule across every social platform — fully hands-free.",
    illustration: ContentEngineIllustration,
  },
  {
    title: "Real-time Analytics",
    subtitle: "Decisions at the speed of data",
    description:
      "Live dashboards that surface what matters — predictive insights, anomaly alerts, and revenue intelligence.",
    illustration: AnalyticsIllustration,
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
      <section id="services" className="relative py-24 border-t border-white/5 overflow-hidden">
        {/* Top emerald glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold text-emerald uppercase tracking-[4px]">
              What We Build
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-4 mb-5">
              Systems that <span className="italic text-emerald">do the work</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto text-lg">
              Not flashy demos — real systems that plug into real workflows and
              deliver measurable results.
            </p>
          </div>

          {/* Mobile: horizontal swipe carousel · Desktop: grid */}
          <div className="-mx-6 md:mx-0">
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none px-6 md:px-0 pb-4 md:pb-0 scrollbar-hide">
            {services.map((s) => (
              <div key={s.title} className="service-card group shrink-0 md:shrink w-[85%] sm:w-[70%] md:w-auto snap-center">
                {/* Text content */}
                <div className="relative p-7 pb-5 z-[1]">
                  <h3 className="font-heading text-xl font-semibold text-white mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[2px] font-semibold text-emerald/80 mb-4">
                    {s.subtitle}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Illustration with bottom fade */}
                <div
                  className="relative px-7 pb-7 z-[1]"
                  style={{
                    maskImage:
                      "linear-gradient(180deg, #000 0%, #000 65%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(180deg, #000 0%, #000 65%, transparent 100%)",
                  }}
                >
                  <s.illustration />
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <IndustriesSection />

      {/* ── HOW IT WORKS ── */}
      <ProcessSection />

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
