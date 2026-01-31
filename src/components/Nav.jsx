import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="nav-logo">Pest Control</div>

        <ul className="nav-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#testimonials">Reviews</a>
          </li>
          <li>
            <a href="#contact">Quote</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
