import Link from "next/link";

export default function DestinationCard({ slug, name, image }) {
  return (
    <Link href={`/destinations/${slug}`} className="destination-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="destination-overlay"></div>
      <div className="destination-label">
        <h3>{name}</h3>
        <span>View chalets</span>
      </div>
    </Link>
  );
}