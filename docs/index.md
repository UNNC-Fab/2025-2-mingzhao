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
/* Force center + make the hero block wider and centered */
.VPHomeHero { text-align: center; }
.VPHomeHero .container { max-width: 1200px; margin: 0 auto; }

/* Bigger hero title */
:root {
  --vp-home-hero-name-font-size: 96px;   /* mobile base */
  --vp-home-hero-name-line-height: 1.05;
  --vp-home-hero-name-letter-spacing: -0.02em;
}
@media (min-width: 960px) {
  :root { --vp-home-hero-name-font-size: 160px; }  /* desktop mega size */
}

/* Make title bolder and a bit glow (optional, looks nicer) */
.VPHomeHero .name {
  font-weight: 900;
  text-shadow:
    0 2px 10px rgba(0,0,0,0.08),
    0 10px 40px rgba(0,0,0,0.06);
}

/* Subtitle (the "text" line) styling: larger + softer color */
.VPHomeHero .text {
  font-size: 22px;
  line-height: 1.4;
  opacity: 0.9;
  margin-top: 12px;
}
@media (min-width: 960px) {
  .VPHomeHero .text { font-size: 28px; }
}

/* Double-ensure center alignment even if other CSS interferes */
.VPHomeHero .main, .VPHomeHero .container, .VPHomeHero .name, .VPHomeHero .text {
  margin-left: auto !important;
  margin-right: auto !important;
}
</style>
