import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Nikahnama Guide</h3>
            <p>Empowering individuals with knowledge about Islamic marital rights and responsibilities.</p>
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
            <p>Email: info@nikahnama.org</p>
            <p>Follow us on social media</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Nikahnama Guide. All rights reserved.</p>
          <p>Built with ❤️ for community education</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer