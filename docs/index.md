---
layout: home
hero:
  name: My project
sidebar: false
aside: false
outline: false
---
<style>
:root {
  --vp-home-hero-name-font-size: 84px;
  --vp-home-hero-name-line-height: 1.05;
  --vp-home-hero-name-letter-spacing: -0.02em;
}
@media (min-width: 960px) {
  :root { --vp-home-hero-name-font-size: 120px; }
}
.VPHomeHero { text-align: center; }
.VPHomeHero .name {
  font-weight: 900;
  background: linear-gradient(120deg, #7dd3fc, #a78bfa, #f472b6, #f59e0b, #7dd3fc);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow:
    0 2px 10px rgba(167,139,250,0.25),
    0 6px 30px rgba(244,114,182,0.20);
  animation: heroGradientShift 8s ease-in-out infinite;
}
.VPHomeHero .name:hover {
  filter: brightness(1.06);
  transform: translateZ(0) scale(1.02);
  transition: transform 300ms ease, filter 300ms ease;
}
@keyframes heroGradientShift {
  0%   { background-position:   0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position:   0% 50%; }
}
@media (prefers-reduced-motion: reduce) {
  .VPHomeHero .name { animation: none; }
}
</style>