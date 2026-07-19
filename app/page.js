import Navbar from "../components/Navbar";
import BannerSlider from "../components/BannerSlider";
import DestinationCard from "../components/DestinationCard";

const destinations = [
  { slug: "north-coast", name: "North Coast", image: "/destinations/north-coast.jpg" },
  { slug: "el-gouna", name: "El Gouna", image: "/destinations/el-gouna.jpg" },
  { slug: "ain-sokhna", name: "Ain Sokhna", image: "/destinations/ain-sokhna.jpg" },
  { slug: "ras-el-hekma", name: "Ras El Hekma", image: "/destinations/ras-el-hekma.jpg" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <BannerSlider />

      <section id="destinations" className="section">
        <h2 className="section-title">Explore Our Destinations</h2>
        <p className="section-subtitle">Pick a destination to see available chalets</p>
        <div className="destinations-grid">
          {destinations.map((d) => (
            <DestinationCard key={d.slug} {...d} />
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <h2 className="section-title">About Us</h2>
        <p className="about-text">
          We connect travelers with the finest beachfront chalets across Egypt&apos;s
          most beautiful coastal destinations. Whether you&apos;re looking for a
          quiet weekend escape or a family summer getaway, we make booking your
          perfect stay simple, secure, and fast.
        </p>
      </section>

      <footer className="footer">
        © 2026 Our Chalets. All rights reserved.
      </footer>
    </>
  );
}