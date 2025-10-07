import React from "react";
import "./Services.css";

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="card">
          <h3>🌐 Web Development</h3>
          <p>Custom websites built with modern technologies to grow your business.</p>
        </div>
        <div className="card">
          <h3>🎨 UI/UX Design</h3>
          <p>Beautiful, user-friendly designs that enhance your brand identity.</p>
        </div>
        <div className="card">
          <h3>📈 SEO Optimization</h3>
          <p>Boost your visibility and rank higher in search engines with our strategies.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
