export default function Home() {
  return (
    <main className="hero">
      <div className="overlay"></div>

      <div className="content">
        <span className="eyebrow">North Coast, Egypt</span>
        <h1 className="headline">Your Escape<br />Awaits</h1>
        <p className="subheadline">
          A curated collection of beachfront chalets on Egypt&apos;s North Coast.
          Book your perfect stay by the sea — launching soon.
        </p>
        <span className="badge">Coming Soon · Summer 2027</span>
      </div>

      <div className="waves">
  <svg className="wave-layer wave-back" viewBox="0 0 2600 200" preserveAspectRatio="none">
    <path
      fill="rgba(255,255,255,0.5)"
      d="M0,120 C300,90 600,140 900,110 C1200,80 1500,130 1800,100 C2100,75 2400,125 2600,105 L2600,200 L0,200 Z"
    />
  </svg>
  <svg className="wave-layer wave-front" viewBox="0 0 2600 200" preserveAspectRatio="none">
    <path
      fill="rgba(255,255,255,0.75)"
      d="M0,140 C300,160 600,120 900,150 C1200,175 1500,130 1800,155 C2100,170 2400,135 2600,150 L2600,200 L0,200 Z"
    />
  </svg>
</div>
    </main>
  );
}