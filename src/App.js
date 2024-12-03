import React from "react";
import "./App.css";

// Import images section 
import photo1 from "./photo_1_assign.png";
import photo2 from "./photo_2_assign.png";
import photo3 from "./photo_3_assign.png";
import photo4 from "./photo_4_assign.png";
import photo5 from "./photo_5_assign.png";
import photo6 from "./photo_6_assign.png";
import photo7 from "./photo_7_assign.png";


// header section 


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
          <div className="feature-item">
            <h3>Share Team Inboxes</h3>
            <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
          </div>
          <div className="feature-item">
            <h3>Deliver Instant Answers</h3>
            <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
          </div>
          <div className="feature-item">
            <h3>Manage Your Team With Reports</h3>
            <p>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.</p>
          </div>

          <div className="feature-item">
            <h3>Connect with Customers</h3>
            <p>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
          </div>

          <div className="feature-item">
            <h3>Connect the tools you already use</h3>
            <p>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
          </div>

          <div className="feature-item">
            <h3>Our people make the difference</h3>
            <p>We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
          </div>
        </div>



        {/* Image Inserted Here */}

        <div className="feature-image-container">
          <img src={photo2} alt="Feature Visualization" className="feature-image" />
        </div>
      </section>



      {/* Feature Subsection */}


      <div className="feature-sub-container">
        <div className="feature-sub">
          <h3>Share Team Inboxes</h3>
          <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
          <button className="feature-button">Learn More</button>
        </div>

        <div className="feature-sub">
          <h3>Deliver Instant Answers</h3>
          <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
          <button className="feature-button">Learn More</button>
        </div>

        <div className="feature-sub">
          <h3>Manage Your Team with Reports</h3>
          <p>Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.</p>
          <button className="feature-button">Learn More</button>
        </div>
      </div>
      <img src={photo3} alt="Feature Visualization" className="feature-image" />



      {/* FAQ Section */}

      <section className="faq">
        <h3>Frequently Asked Questions</h3>
        <h2>Everything you need to know about the product and billing</h2>
        <ul>
          <li>
            Is there a free trial available? <button className="faq-button">-</button><br />
            Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
          </li>
          <li>
            Can I change my plan later? <button className="faq-button">+</button>
          </li>
          <li>
            What is your cancellation policy? <button className="faq-button">+</button>
          </li>
          <li>
            Can other info be added to an invoice? <button className="faq-button">+</button>
          </li>
          <li>
            How does billing work? <button className="faq-button">+</button>
          </li>
          <li>
            How do I change my account email? <button className="faq-button">+</button>
          </li>
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
          <div className="blog-item">
            <img src={photo5} alt="Feature Visualization" className="feature-image" />
            <h3>UX Review Presentations</h3>
            <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
            <p>By Olivia Rhye | 20 Jan 2024</p>
          </div>

          <div className="blog-item">
            <img src={photo6} alt="Feature Visualization" className="feature-image" />
            <h3>Migrating to Linear 101</h3>
            <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
            <p>By Phoenix Baker | 19 Jan 2024</p>
          </div>
          
          <div className="blog-item">
            <img src={photo7} alt="Feature Visualization" className="feature-image" />
            <h3>Building Your API Stack</h3>
            <p>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
            <p>By Lana Steiner | 18 Jan 2024</p>
          </div>
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
  <div className="footer-container"> {/* Changed the class name for clarity */}
    
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
      <h4>Use Cases</h4>
      <ul>
        <li>Startups</li>
        <li>Enterprise</li>
        <li>Government</li>
        <li>SaaS Center</li>
        <li>Marketplaces</li>
        <li>Ecommerce</li>
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

    
    <div className="footer-column">
      <h4>Legal</h4>
      <ul>
        <li>Terms</li>
        <li>Privacy</li>
        <li>Cookies</li>
        <li>Licenses</li>
        <li>Settings</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>

  <div className="footer-bottom">
    <div className="footer-logo">Untitled UI</div>
    <p>&copy; 2077 Untitled. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
};

export default App;