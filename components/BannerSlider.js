"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/banner1.jpg",
    title: "Escape to the North Coast",
    subtitle: "Beachfront chalets, unforgettable sunsets",
  },
  {
    image: "/banner2.jpg",
    title: "El Gouna Awaits You",
    subtitle: "Book your stay by the lagoon",
  },
  {
    image: "/banner3.jpg",
    title: "Summer Offers Are Here",
    subtitle: "Up to 20% off early bookings",
  },
];

export default function BannerSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`slide ${i === active ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay"></div>
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
          </div>
        </div>
      ))}
      <div className="slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}