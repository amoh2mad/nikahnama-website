import React, { useState } from 'react'
import './QuerySection.css'

const QuerySection = () => {
  const [activeFAQ, setActiveFAQ] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "Who are we?",
      answer: "We’re a group of teenagers passionate about helping people understand their Nikahnama and what it really says, what it protects, and why it matters."
    },
      id: 2,
      question: "What do we do?",
      answer: "We guide people through the Nikahnama so they know exactly what they’re signing. Our goal is to make sure no one signs it blindly, but with full understanding of their rights and responsibilities."
    {
      id: 3,
      question: "Who runs this initiative?",
      answer: "It’s completely youth-led , run by dedicated teenagers who believe knowledge can empower and protect people in marriage."
    },
    {
      id: 4,
      question: "Are the laws the same for all Pakistani nationals?",
      answer: "Yes, they are. But many people don’t know what these laws actually mean for them. 
      For example : If someone is a foreign national and marries a person whose age is below Pakistan’s legal minimum, even if it’s acceptable in their country, that marriage won’t be accepted or registered in Pakistan and they won’t be able to bring their spouse here.

    },
    {
      id: 5,
      question: "Can I share my personal story or feedback?",
      answer: "Through workshops, social media, and open conversations that make the Nikahnama easy to understand for everyone."
    },
    {
      id: 6,
      question: "How can I contribute or collaborate?",
      answer: "You can spread awareness, share our work, or join our future cohorts. Details about how to get involved will be posted on our Instagram soon."
    },
  ]

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id)
  }

  return (
    <section className="section query-section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      
      <div className="faq-container">
        <div className="faq-intro">
          <div className="intro-card">
            <h3>💡 Need More Help?</h3>
            <p>
              If you don't find answers to your questions here, feel free to reach out to us 
              through our social media channels or email. We're here to help you understand 
              your rights and responsibilities.
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> thenikahnama.org@gmail.com</p>
              <p><strong>Instagram:</strong> @thenikahnamaorg</p>
            </div>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${activeFAQ === faq.id ? 'active' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h4>{faq.question}</h4>
                <span className="faq-toggle">
                  {activeFAQ === faq.id ? '−' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-notes">
          <div className="note-card">
            <h4>📝 Important Reminder</h4>
            <p>
              Every marriage is unique, and while these FAQs provide general guidance, 
              it's always recommended to consult with knowledgeable scholars or legal 
              experts for your specific situation. Your Nikahnama should reflect your 
              mutual understanding and agreement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuerySection