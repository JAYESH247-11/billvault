import { useState } from 'react';
import { faqs } from './homeData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="home-section home-faq" id="faq" aria-labelledby="faq-title">
      <div className="home-content home-section-layout">
        <header className="home-section-heading">
          <p className="home-eyebrow">FAQ</p>
          <h2 id="faq-title">Frequently asked questions</h2>
        </header>
        <div className="faq-list">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index + 1}`;
            return (
              <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={question}>
                <h3>
                  <button
                    aria-controls={answerId}
                    aria-expanded={isOpen}
                    className="faq-question"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span>{question}</span>
                    <span aria-hidden="true" className="faq-question__toggle">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                <div className="faq-answer" hidden={!isOpen} id={answerId}>
                  <p>{answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
