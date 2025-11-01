import React, { useState } from 'react'
import './ClausesSection.css'

const ClausesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const clauses = [
    {
      id: 1,
      title: "Meher (Dower)",
      category: "financial",
      description: "The mandatory gift from husband to wife",
      content: `Meher is a fundamental right of the wife in Islamic marriage. It can be:
• Prompt (Mu'ajjal) - Paid immediately
• Deferred (Mu'wajjal) - Paid later
• Combination of both

The amount should be specified clearly in the nikahnama.`,
      importance: "High",
      instaPost: "https://instagram.com/p/example-meher"
    },
    {
      id: 2,
      title: "Right to Education & Career",
      category: "rights",
      description: "Preserving personal and professional growth",
      content: `This clause ensures that marriage doesn't hinder educational or career pursuits. It can specify:
• Right to continue education
• Right to pursue career
• Financial support for education
• Mutual respect for professional goals`,
      importance: "Medium",
      instaPost: "https://instagram.com/p/example-education"
    },
    {
      id: 3,
      title: "Delegated Right to Divorce (Talaq-e-Tafweez)",
      category: "rights",
      description: "Empowering the wife with divorce rights",
      content: `This clause delegates the right of divorce to the wife under specific conditions:
• Husband's second marriage
• Desertion for specified period
• Cruelty or abuse
• Failure to provide maintenance

This provides security and equal rights.`,
      importance: "High",
      instaPost: "https://instagram.com/p/example-talaq"
    },
    {
      id: 4,
      title: "Maintenance & Support",
      category: "financial",
      description: "Financial responsibilities and support",
      content: `Details about financial obligations:
• Monthly maintenance amount
• Housing provisions
• Medical expenses
• Children's education costs

Should be realistic and mutually agreed upon.`,
      importance: "High",
      instaPost: "https://instagram.com/p/example-maintenance"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Clauses' },
    { id: 'financial', name: 'Financial' },
    { id: 'rights', name: 'Rights & Responsibilities' }
  ]

  const filteredClauses = activeCategory === 'all' 
    ? clauses 
    : clauses.filter(clause => clause.category === activeCategory)

  return (
    <section className="section clauses-section">
      <h2 className="section-title">Nikahnama Clauses Explained</h2>
      
      <div className="categories-filter">
        {categories.map(category => (
          <button
            key={category.id}
            className={activeCategory === category.id ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="clauses-grid">
        {filteredClauses.map(clause => (
          <div key={clause.id} className="clause-card">
            <div className="clause-header">
              <h3>{clause.title}</h3>
              <span className={`importance-badge ${clause.importance.toLowerCase()}`}>
                {clause.importance} Importance
              </span>
            </div>
            <p className="clause-description">{clause.description}</p>
            <div className="clause-content">
              {clause.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="clause-footer">
              <a 
                href={clause.instaPost} 
                className="insta-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 View on Instagram
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="clauses-notes">
        <div className="note-card">
          <h4>💡 Important Notes</h4>
          <ul>
            <li>All clauses must comply with Islamic principles</li>
            <li>Consult with a knowledgeable scholar before adding custom clauses</li>
            <li>Ensure both parties fully understand each clause</li>
            <li>Keep a copy of your signed nikahnama safe</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ClausesSection