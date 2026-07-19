import { supabase } from "../../../lib/supabaseClient";
import Navbar from "../../../components/Navbar";

export default async function DestinationPage({ params }) {
  const { slug } = await params;
  const locationName = slug.replace(/-/g, " ");

  const { data: chalets, error } = await supabase
    .from("chalets")
    .select("*")
    .ilike("location", `%${locationName}%`);

  return (
    <>
      <Navbar />
      <section className="section">
        <h2 className="section-title" style={{ textTransform: "capitalize" }}>
          {locationName}
        </h2>
        <p className="section-subtitle">
          {error ? "Something went wrong loading chalets." : `${chalets?.length || 0} chalets available`}
        </p>

        <div className="destinations-grid">
          {chalets && chalets.map((chalet) => (
            <div key={chalet.id} className="destination-card" style={{ background: "#12525C" }}>
              <div className="destination-label">
                <h3>{chalet.name}</h3>
                <span>{chalet.price} EGP / night</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}