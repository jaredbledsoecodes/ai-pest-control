import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>AI Pest Control</h3>
          <p>Eco-friendly pest solutions you can trust.</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>📞 (555) 123-4567</p>
          <p>✉️ info@aipestcontrol.com</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#testimonials">Reviews</a>
            </li>
            <li>
              <a href="#contact">Request a Quote</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} AI Pest Control. All rights reserved.
      </div>
    </footer>
  );
}
