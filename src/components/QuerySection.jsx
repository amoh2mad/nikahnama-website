import React, { useState } from 'react'
import './QuerySection.css'

const QuerySection = () => {
  const [activeFAQ, setActiveFAQ] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "What is the importance of Meher in Nikahnama?",
      answer: "Meher is a mandatory gift from the groom to the bride, representing respect, love, and financial security. It's a fundamental right of the wife in Islamic marriage and can be prompt (paid immediately) or deferred (paid later), or a combination of both."
    },
    {
      id: 2,
      question: "Can I add custom clauses to my Nikahnama?",
      answer: "Yes, you can add custom clauses as long as they don't contradict Islamic principles. Common additions include education continuation rights, career rights, dispute resolution methods, and conditions for delegated divorce rights."
    },
    {
      id: 3,
      question: "What is Talaq-e-Tafweez?",
      answer: "Talaq-e-Tafweez is the delegated right to divorce where the husband gives the wife the right to divorce under specific conditions. This provides security and equal rights to the wife in case of specific circumstances like second marriage, desertion, or failure to provide maintenance."
    },
    {
      id: 4,
      question: "Is Nikahnama legally binding?",
      answer: "Yes, Nikahnama is a legally binding contract in Pakistan under the Muslim Family Laws Ordinance. It's recognized by courts and can be enforced legally, especially regarding financial matters like Meher and maintenance."
    },
    {
      id: 5,
      question: "What should I do if my Nikahnama is not in a language I understand?",
      answer: "You have the right to understand every clause in your Nikahnama. If it's in a language you don't understand, request a translation or explanation before signing. Never sign documents you don't fully comprehend."
    },
    {
      id: 6,
      question: "Can Meher amount be changed after marriage?",
      answer: "Yes, the Meher amount can be increased after marriage through mutual consent. However, it cannot be decreased or waived without the wife's free will and consent."
    },
    {
      id: 7,
      question: "What is the difference between prompt and deferred Meher?",
      answer: "Prompt Meher (Mu'ajjal) is payable immediately upon demand, while deferred Meher (Mu'wajjal) is payable at a specified future time or upon the occurrence of a specific event, such as divorce or the husband's death."
    },
    {
      id: 8,
      question: "Are there any clauses that protect a woman's right to work?",
      answer: "Yes, you can include specific clauses that protect your right to education, career, and professional growth. These clauses ensure that marriage doesn't hinder your personal and professional development."
    }
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
              <p><strong>Email:</strong> info@nikahnama.org</p>
              <p><strong>Instagram:</strong> @nikahnamaguide</p>
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