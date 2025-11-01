import React from 'react'
import './SuggestionsSection.css'

const SuggestionsSection = () => {
  return (
    <section className="section suggestions-section">
      <h2 className="section-title">Your Suggestions Matter</h2>
      
      <div className="suggestions-container">
        <div className="suggestions-info">
          <div className="info-card">
            <h3>Share Your Thoughts</h3>
            <p>
              We value your feedback and suggestions. Help us improve our resources 
              and services by sharing your thoughts, ideas, and experiences.
            </p>
            <div className="suggestion-types">
              <h4>You can suggest:</h4>
              <ul>
                <li>New clauses to explain</li>
                <li>Improvements to our website</li>
                <li>Topics for future discussions</li>
                <li>Community events or workshops</li>
                <li>Any other ideas to help our mission</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="google-form-container">
          <div className="form-placeholder">
            <h3>📝 Suggestions Form</h3>
            <p>We'll embed a Google Form here for your suggestions</p>
            <div className="form-preview">
              <div className="form-field"></div>
              <div className="form-field"></div>
              <div className="form-field"></div>
              <button className="btn-primary">Submit Suggestion</button>
            </div>
            <p className="form-note">
              <strong>Note:</strong> Replace this with your actual Google Form embed code
            </p>
          </div>
          
          {/* Uncomment and add your Google Form embed code here */}
          {/*
          <iframe 
            src="YOUR_GOOGLE_FORM_EMBED_LINK_HERE"
            width="100%" 
            height="800" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
          >
            Loading…
          </iframe>
          */}
        </div>
      </div>

      <div className="community-guidelines">
        <h3>Community Guidelines</h3>
        <div className="guidelines-grid">
          <div className="guideline-card">
            <h4>🤝 Respectful</h4>
            <p>Please maintain respect and courtesy in all communications</p>
          </div>
          <div className="guideline-card">
            <h4>🔒 Confidential</h4>
            <p>Your suggestions are confidential and will be reviewed carefully</p>
          </div>
          <div className="guideline-card">
            <h4>💡 Constructive</h4>
            <p>We appreciate constructive feedback that helps us improve</p>
          </div>
          <div className="guideline-card">
            <h4>⏰ Responsive</h4>
            <p>We review all suggestions and respond to important queries</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuggestionsSection