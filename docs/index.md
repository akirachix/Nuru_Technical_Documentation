---
layout: page
---

<div class="hero-container">
  <div class="logo-wrapper">
    <img class="main-logo" src="/images/eLoop_logo.png" alt="eLoop Logo" />
  </div>
  
  <p class="hero-tagline">AI and IoT-driven material intelligence system for electronic waste analytics</p>
  
  <div class="hero-actions">
    <a class="btn brand-btn" href="/overview/product-definition">Get Started</a>
    <a class="btn alt-btn" href="/overview/key-features">View Key Features</a>
  </div>
</div>

<div class="advantages-grid">
  <div class="card">
    <h3>Strategic Advantages</h3>
    <p>Traditional e-waste recovery systems suffer from manual visual guesswork, low tracking visibility, and highly fragmented B2B sourcing networks.</p>
  </div>
  
  <div class="card">
    <h3>Architectural Efficiency</h3>
    <p>Processes computer vision directly on the hardware line using Raspberry Pi 5 to completely bypass slow, expensive cloud server latency.</p>
  </div>
  
  <div class="card">
    <h3>Asset Value Optimization</h3>
    <p>Translates real-time component photos straight into clear material weight estimations, turning raw unverified scrap into high-value B2B commodities.</p>
  </div>
</div>

<div class="footer-callout-container">
  <div class="footer-callout">
    <div class="footer-line">
      Learn more about eLoop on our <a href="https://nuruinformationalwebsite.vercel.app/" target="_blank">Website</a>.
    </div>
    <div class="footer-line">
      Ready to get started? <a href="/overview/product-definition">Start here!</a>
    </div>
  </div>
</div>


<style>

.hero-container {
  text-align: center;
  padding: 60px 20px 40px 20px;
  max-width: 900px;
  margin: 0 auto;
  
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}


.main-logo {
  max-width: 380px;
  height: auto;
  display: block;
}


.hero-tagline {
  font-size: 2.25rem;
  color: #666;
  max-width: 650px;
  margin: 0 auto 35px auto;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.brand-btn {
  background-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text) !important;
}

.brand-btn:hover {
  background-color: var(--vp-button-brand-hover-bg);
}

.alt-btn {
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1) !important;
}

.alt-btn:hover {
  background-color: var(--vp-c-bg-soft);
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1150px;
  margin: 40px auto 80px auto;
  padding: 0 24px;
  flex-wrap: wrap;

}

.card {
  background: var(--vp-c-bg-soft); 
  border: 1px solid var(--vp-c-bg-alt);
  border-radius: 12px;
  padding: 30px;
  text-align: left;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-6px); 
  box-shadow: 0 12px 20px -4px rgba(0, 0, 0, 0.08), 0 4px 8px -2px rgba(0, 0, 0, 0.04); 
  border-color: var(--vp-c-brand-1); 
}

.card h3 {
  font-size: 1.25rem !important;
  margin: 0 0 12px 0; 
  color: var(--vp-c-brand-1) !important;
  line-height: 1.4 !important;
  
}

.card p {
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  line-height: 1.6;
  margin: 0;
  opacity: 0.85;
}

.footer-callout-container {
  width: 100%;
  padding: 40px 24px 20px 24px;
 
  
}

.footer-callout {
  background-color: var(--vp-c-bg-soft);
  border-left: 4px solid var(--vp-c-brand-1); 
  border-top: 1px solid var(--vp-c-bg-alt);
  border-right: 1px solid var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-bg-alt);
  border-radius: 0 12px 12px 0;
  padding: 24px 30px;
  text-align: left;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
  max-width: 1102px; 
  margin: 0 auto;
}

.footer-line {
  font-size: 1.05rem;
  color: var(--vp-c-text-1);
  font-style: italic;
  line-height: 1.6;
  opacity: 0.9;
}

.footer-callout a {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-underline-offset: 3px;
  transition: color 0.2s ease;
}

.footer-callout a:hover {
  color: var(--vp-c-brand-2); 
}

</style>
