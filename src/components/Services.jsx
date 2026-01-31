import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services fade-in">
      <h2>Our Services</h2>

      <div className="service-cards">
        <div className="service-card">
          <h3>Mosquito Control</h3>
          <p>Protect your yard and family from mosquitoes year-round.</p>
        </div>

        <div className="service-card">
          <h3>General Pest Control</h3>
          <p>Safe and effective protection from common household pests.</p>
        </div>

        <div className="service-card">
          <h3>Termite Control</h3>
          <p>Prevent costly damage with professional termite solutions.</p>
        </div>
      </div>
    </section>
  );
}
