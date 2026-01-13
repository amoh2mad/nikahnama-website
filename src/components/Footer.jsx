import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>The Nikahnama Org</h3>
            <p>Because Qabool Hai Comes with Clauses!</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#clauses">Nikahnama Clauses</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#queries">Q&A</a></li>
              <li><a href="#suggestions">Suggestions</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: thenikahnama.org@gmail.com</p>
            <p>Follow us on social media</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 The Nikahnama Org. All rights reserved.</p>
          <p>Built with ❤️ for community education</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer