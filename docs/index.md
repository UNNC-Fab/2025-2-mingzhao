---
layout: home
hero:
  name: My project
  text: UNNC-Fab/2025-2-xi mingzhao
sidebar: false
aside: false
outline: false
---

<style>
/* force centering */
.VPHomeHero { text-align: center; }
.VPHomeHero .container { max-width: 1200px; margin: 0 auto; }

/* jumbo title size */
:root {
  --vp-home-hero-name-font-size: 110px; /* mobile */
  --vp-home-hero-name-line-height: 1.04;
  --vp-home-hero-name-letter-spacing: -0.02em;
}
@media (min-width: 960px) {
  :root { --vp-home-hero-name-font-size: 180px; } /* desktop */
}

/* gradient + glow + spacing below title */
.VPHomeHero .name {
  font-weight: 900;
  margin-bottom: 24px;                 /* add space under the title */
  background: linear-gradient(120deg, #60a5fa, #a78bfa, #f472b6, #f59e0b, #60a5fa);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow:
    0 6px 24px rgba(96,165,250,0.25),
    0 16px 48px rgba(244,114,182,0.20);

  animation: heroGradientShift 8s ease-in-out infinite;
  will-change: background-position, filter, transform;
}

/* subtle hover lift */
.VPHomeHero .name:hover {
  filter: brightness(1.06);
  transform: translateZ(0) scale(1.02);
  transition: transform 300ms ease, filter 300ms ease;
}

/* subtitle sizing and spacing */
.VPHomeHero .text {
  font-size: 28px;      /* mobile */
  line-height: 1.5;
  opacity: 0.92;
}
@media (min-width: 960px) {
  .VPHomeHero .text { font-size: 34px; }
}

/* animated gradient shift */
@keyframes heroGradientShift {
  0%   { background-position:   0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position:   0% 50%; }
}

/* respect reduced-motion users */
@media (prefers-reduced-motion: reduce) {
  .VPHomeHero .name { animation: none; }
}
</style>

