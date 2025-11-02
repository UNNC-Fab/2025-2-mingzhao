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
/* make hero area fill viewport and center everything */
.VPHomeHero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  padding: 0;
}

/* slightly smaller hero title (compared to previous version) */
.VPHomeHero .name {
  font-size: 110px;           /* mobile size */
  line-height: 1;
  font-weight: 900;
  margin-bottom: 50px;        /* spacing below title */

  /* neon gradient */
  background: linear-gradient(90deg,#4facfe,#00f2fe,#a78bfa,#f472b6,#f59e0b,#4facfe);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  /* glow + animation */
  text-shadow: 0 0 20px rgba(79,172,254,0.4),
               0 0 40px rgba(244,114,182,0.25);
  animation: glowShift 6s ease-in-out infinite;
}

@keyframes glowShift {
  0%   { background-position:   0% 50%; text-shadow:0 0 20px rgba(79,172,254,0.4); }
  50%  { background-position: 100% 50%; text-shadow:0 0 40px rgba(244,114,182,0.4); }
  100% { background-position:   0% 50%; text-shadow:0 0 20px rgba(79,172,254,0.4); }
}

/* desktop: smaller than before, still impressive */
@media (min-width: 960px) {
  .VPHomeHero .name { font-size: 240px; }
}

/* subtitle styling */
.VPHomeHero .text {
  font-size: 34px;            /* mobile */
  line-height: 1.4;
  font-weight: 500;
  opacity: 0.95;
  color: #d1d5db;
  letter-spacing: 1px;
}
@media (min-width: 960px) {
  .VPHomeHero .text { font-size: 46px; }
}

/* safety for reduced-motion users */
@media (prefers-reduced-motion: reduce) {
  .VPHomeHero .name { animation: none; }
}
</style>

