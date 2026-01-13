import React, { useState } from 'react'
import './ClausesSection.css'

const ClausesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'marriage', name: 'Marriage' },
    { id: 'rights', name: 'Rights' },
    { id: 'responsibilities', name: 'Responsibilities' },
    // Add more categories if needed
  ]

  const clauses = [
    {
      id: 1,
      title: "Clause Title 1",
      category: "marriage",
      description: "Short description of clause 1",
      content: `This is the detailed explanation of clause 1.
You can use multiple lines here.`,
      importance: "High",
      instaPost: "https://www.instagram.com/p/example1"
    },
    {
      id: 2,
      title: "Clause Title 2",
      category: "rights",
      description: "Short description of clause 2",
      content: `This is the detailed explanation of clause 2.`,
      importance: "Medium",
      instaPost: "https://www.instagram.com/p/example2"
    },
    {
      id: 3,
      title: "Clause Title 3",
      category: "responsibilities",
      description: "Short description of clause 3",
      content: `This is the detailed explanation of clause 3.`,
      importance: "Low",
      instaPost: "https://www.instagram.com/p/example3"
    }
    // Add more clauses as needed
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
