import React from 'react'
import './TeamSection.css'

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Eeshal Imran Akram",
      role: "Founder & CEO",
      description: "A Levels @ ISL",
      image: ""
    },
    {
      id: 2,
      name: "Shiza Imtiaz",
      role: "Co-Founder",
      description: "A Levels @ Lahore Alma",
      image: ""
    },
    {
      id: 3,
      name: "Yahya Burhan",
      role: "Founders Associate",
      description: "A Levels @ Westminister Islamabad",
      image: ""
    },
    {
      id: 4,
      name: "Test ",
      role: "Test role",
      description: "Test description",
      image: ""
    }
  ]

  const mission = {
    vision: "To create awareness about Islamic marital rights and empower individuals with knowledge for equitable relationships.",
    values: [
      "Empowerment through education",
      "Respect for Islamic principles",
      "Confidentiality and trust",
      "Community support",
    ]
  }

  return (
    <section className="section team-section">
      <h2 className="section-title">Meet Our Team</h2>
      
      <div className="mission-section">
        <div className="mission-card">
          <h3>Our Mission</h3>
          <p>{mission.vision}</p>
          <div className="values-list">
            <h4>Our Values</h4>
            <ul>
              {mission.values.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="team-grid">
        {teamMembers.map(member => (
          <div key={member.id} className="team-card">
            <div className="team-image">{member.image}</div>
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>

      <div className="what-we-stand-for">
        <h3>What We Stand For</h3>
        <div className="stand-for-grid">
          <div className="stand-card">
            <h4>📚 Education</h4>
            <p>Providing accurate information about nikahnama clauses and their implications</p>
          </div>
          <div className="stand-card">
            <h4>⚖️ Rights</h4>
            <p>Ensuring both partners understand and protect their Islamic rights</p>
          </div>
          <div className="stand-card">
            <h4>🤝 Support</h4>
            <p>Offering guidance and support for marital issues and questions</p>
          </div>
          <div className="stand-card">
            <h4>🌍 Community</h4>
            <p>Building a supportive community for shared learning and growth</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection