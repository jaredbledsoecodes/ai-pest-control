import { useState } from "react";
import "./FAQ.css";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span>{isOpen ? "−" : "+"}</span>
      </button>

      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "Are your treatments safe for pets and children?",
      answer:
        "Yes! We use eco-friendly treatments that are safe for your family and pets.",
    },
    {
      question: "How often do you provide pest control services?",
      answer:
        "Most homes benefit from quarterly treatments, but we customize plans as needed.",
    },
    {
      question: "Do you offer a guarantee?",
      answer: "Absolutely. If pests return, so do we — at no additional cost.",
    },
  ];

  return (
    <section id="faq" className="faq fade-in">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
