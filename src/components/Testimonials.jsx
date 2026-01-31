import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "Amazing service! Our home has been pest-free ever since.",
    },
    {
      name: "James R.",
      text: "Professional, friendly, and effective. Highly recommend.",
    },
    {
      name: "Emily T.",
      text: "They explained everything clearly and the results were fantastic.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials fade-in">
      <h2>What Our Customers Say</h2>

      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">“{testimonial.text}”</p>
            <p className="testimonial-name">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
