import "./Header.css";

export default function Header() {
  function handleClick() {
    alert("Thanks for requesting a quote! We'll contact you soon.");
  }

  return (
    <header>
      <h1>Zola‑style Pest Solutions</h1>
      <p>Eco‑friendly pest control for your home and family</p>
      <a href="#contact" className="quote-button">
        Request a Quote
      </a>
    </header>
  );
}
