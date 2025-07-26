import React from "react";
import "./App.css";

const HomePage = () => {
  return (
    <div className="homepage">

      {/* Header Section */}
      <header className="header">
        <div className="logo">Interior design</div>
         <div className="hero-text">
          <h4>INTERIOR STUDIO</h4>
          <h1>Home is not a place it's a feeling</h1>
          <p>Unique touch, timeless style.</p>
        </div>
      </header>

      {/* Service Section */}
      <section className="service">
        <div className="service-box">
          <img src="https://images.pexels.com/photos/15848140/pexels-photo-15848140.png" alt="Design 1" />
          <h3>Interior Design and Space Planning</h3>
          <p>
            Modern interior designs with a touch of magic. Space optimization
            and layout planning that suits your lifestyle.
          </p>
          <button>Learn More</button>
        </div>
        <div className="service-circle">
          <img src="https://images.pexels.com/photos/8583874/pexels-photo-8583874.jpeg" alt="Design 2" />
          </div><br></br>
          <div></div>
      </section>

      {/* Highlight Section */}
      <section className="highlight">
        <div className="highlight-number">01</div>
        <div className="highlight-text">
          <h2>
            We can envision a new fresh look for your apartment, house, office
            or practice.
          </h2>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <img src="https://images.pexels.com/photos/7533851/pexels-photo-7533851.jpeg" alt="Gallery 1" />
        <img src="https://images.pexels.com/photos/7174113/pexels-photo-7174113.jpeg" alt="Gallery 2" />
        <img src="https://images.pexels.com/photos/7535050/pexels-photo-7535050.jpeg" alt="Gallery 3" />
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h3>Latest Projects</h3>
        <p>
          Practical, welcoming, and beautiful—take a look at our latest
          favorites.
        </p>
        <div className="project-images">
          <img src="https://images.pexels.com/photos/20259352/pexels-photo-20259352.jpeg" alt="Proj 1" />
          <img src="https://images.pexels.com/photos/12700475/pexels-photo-12700475.jpeg" alt="Proj 2" />
          <img src="https://images.pexels.com/photos/7587831/pexels-photo-7587831.jpeg" alt="Proj 3" />
          <img src="https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg" alt="Proj 4" />
          <img src="https://images.pexels.com/photos/6301169/pexels-photo-6301169.jpeg" alt="Proj 5" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;