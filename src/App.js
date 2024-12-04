import React from "react";
import "./App.css";

// Import images
import photo1 from "./photo_1_assign.png";
import photo2 from "./photo_2_assign.png";
import photo3 from "./photo_3_assign.png";
import photo4 from "./photo_4_assign.png";
import photo5 from "./photo_5_assign.png";
import photo6 from "./photo_6_assign.png";
import photo7 from "./photo_7_assign.png";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="navbar">
          <div className="logo">Untitled UI</div>
          <nav>
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#resources">Resources</a>
            <a href="#pricing">Pricing</a>
          </nav>
        </div>

        {/* New Feature Box */}
        <div className="new-feature-box">
          <button className="feature-button">New Feature</button>
          <button className="feature-button">Check Out the Team Dashboard</button>
        </div>

        <div className="hero">
          <h1>Beautiful analytics to grow smarter</h1>
          <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
          <div className="cta-buttons">
            <button className="primary-button">Demo</button>
            <button className="secondary-button">Sign Up</button>
          </div>
        </div>
        <img src={photo1} alt="Feature Visualization" className="feature-image" />
      </header>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Analytics that feels like it's from the future</h2>
        <p>Cutting-edge features for advanced analytics.</p>
        <div className="feature-list">
          { /* Feature items */ }
          {["Share Team Inboxes", "Deliver Instant Answers", "Manage Your Team With Reports", "Connect with Customers", "Connect the tools you already use", "Our people make the difference"].map(feature => (
            <div className="feature-item" key={feature}>
              <h3>{feature}</h3>
              <p>Feature description here.</p>
            </div>
          ))}
        </div>

        <div className="feature-image-container">
          <img src={photo2} alt="Feature Visualization" className="feature-image" />
        </div>
      </section>

      {/* Feature Subsection */}
      <div className="feature-sub-container">
        {["Share Team Inboxes", "Deliver Instant Answers", "Manage Your Team with Reports"].map(feature => (
          <div className="feature-sub" key={feature}>
            <h3>{feature}</h3>
            <p>Feature description here.</p>
            <button className="feature-button">Learn More</button>
          </div>
        ))}
      </div>
      <img src={photo3} alt="Feature Visualization" className="feature-image" />

      {/* FAQ Section */}
      <section className="faq">
        <h3>Frequently Asked Questions</h3>
        <h2>Everything you need to know about the product and billing</h2>
        <ul>
          <li>Is there a free trial available? <button className="faq-button">-</button> Yes.</li>
          <li>Can I change my plan later? <button className="faq-button">+</button></li>
          <li>What is your cancellation policy? <button className="faq-button">+</button></li>
          <li>Can other info be added to an invoice? <button className="faq-button">+</button></li>
          <li>How does billing work? <button className="faq-button">+</button></li>
          <li>How do I change my account email? <button className="faq-button">+</button></li>
        </ul>
      </section>
      <img src={photo4} alt="Feature Visualization" className="feature-image" />

      {/* Blog Posts Section */}
      <section id="blog" className="blog-posts">
        <div className="blog-header">
          <h2>Our Blog</h2>
          <div className="blog-subheader">
            <h1>Latest Blog Posts</h1>
            <p>Tools and strategies modern teams need to help their companies grow</p>
          </div>
          <button className="view-all-button" onClick={() => window.location.href='/all-posts'}>
            View All Posts
          </button>
        </div>

        <div className="blog-list">
          { [photo5, photo6, photo7].map((photo, index) => (
            <div className="blog-item" key={index}>
              <img src={photo} alt="Blog Visualization" className="feature-image" />
              <h3>Blog Title {index + 1}</h3>
              <p>Blog description here.</p>
              <p>By Author Name | Date</p>
            </div>
          ))}
        </div>
      </section>

      {/* Free Trial Call to Action Section */}
      <section className="cta-free-trial">
        <h2>Start Your Free Trial</h2>
        <p>Join over 4,000+ startups already growing with Untitled.</p>
        <div className="cta-buttons">
          <button className="primary-button">Learn More</button>
          <button className="primary-button">Get Started</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Presentations</li>
              <li>News</li>
              <li>Media Kit</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Events</li>
              <li>Help Center</li>
              <li>Tutorials</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Social</h4>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>GitHub</li>
              <li>AngelList</li>
              <li>Dribbble</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">Untitled UI</div>
          <p>© 2077 Untitled. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;