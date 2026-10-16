import React from 'react';
import './Support.css';

const faqs = [
  {
    question: 'How long may I borrow a book?',
    answer: 'The borrowing period and any renewal options depend on your user category and Library policy. Check your account or contact the Library to confirm the due date for an item.',
  },
  {
    question: 'How do I request a book?',
    answer: 'Sign in with your IIT Dharwad student account, find an available title in the catalogue, and submit a borrow request. You can follow its status under My Shelf. Requests awaiting review for more than 24 hours are cancelled automatically.',
  },
  {
    question: 'How do I return a borrowed book?',
    answer: 'Open My Shelf and choose Request return beside the borrowed title. The request will appear for Library staff to review. Please return the book to the Library as instructed.',
  },
  {
    question: 'Can I suggest or donate a book?',
    answer: 'Yes. Use the Contribute a Book form to submit the title for Library review. A submission is added to the collection only after it has been reviewed and approved.',
  },
  {
    question: 'How can I access e-resources off campus?',
    answer: 'IIT Dharwad patrons can access subscribed electronic resources off campus with their Institute LDAP credentials through the approved access service. Use is governed by each provider’s licence, and systematic downloading is prohibited.',
  },
  {
    question: 'Who can help with a Library account or website issue?',
    answer: 'Contact the Knowledge Resource Centre (KRC) at kr.office@iitdh.ac.in or librarian@iitdh.ac.in. For internal assistance, call VIOP 7001 or 7002.',
  },
];

export default function Support() {
  return (
    <main className="container py-4">
      <h1>Library Support</h1>
      <p>Find answers to common questions about IIT Dharwad Library services and this website.</p>
      <h2 className="mt-4">Frequently asked questions</h2>
      <div className="accordion" id="supportFaqs">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={faq.question}>
            <h3 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target={`#supportFaq${index}`} aria-expanded="false" aria-controls={`supportFaq${index}`}>
                {faq.question}
              </button>
            </h3>
            <div id={`supportFaq${index}`} className="accordion-collapse collapse" data-bs-parent="#supportFaqs">
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
      <section className="mt-5">
        <h2>Library spaces and facilities</h2>
        <h3 className="h5 mt-3">Cafeteria</h3>
        <ul>
          <li>Use the designated cafeteria seating area and courtyard for food and drinks.</li>
          <li>Clean up after yourself and place waste in the bins provided.</li>
          <li>Keep conversations at a considerate volume.</li>
          <li>Do not take food or drinks into the stack or reading areas, except plain drinking water.</li>
          <li>Keep Library equipment and reading material in the designated Library areas.</li>
        </ul>
        <h3 className="h5 mt-3">24×7 General Reading Area</h3>
        <ul>
          <li>The general reading area is open 24×7 and has more than 300 seats.</li>
          <li>Carry your valid IIT Dharwad ID card for entry. ID cards are not transferable.</li>
          <li>Maintain silence and respect other users’ study time.</li>
          <li>Take care of Institute property and help keep the space safe.</li>
          <li>The Reading Hall is monitored by CCTV. Follow Library staff instructions and applicable Institute rules.</li>
        </ul>
      </section>
      <footer id="foot" className="mt-5">
        <h2>Contact IIT Dharwad KRC</h2>
        <p>Knowledge Resource and Data Centre (KRDC) Block, Permanent Campus, Chikkamalligawad, Dharwad, Karnataka 580 011.</p>
        <p>Staff operations: 9:00 a.m. to 5:30 p.m. on Institute working days. The general reading area is open 24×7.</p>
        <p>VIOP: 7001 / 7002 · Email: <a href="mailto:kr.office@iitdh.ac.in">kr.office@iitdh.ac.in</a> / <a href="mailto:librarian@iitdh.ac.in">librarian@iitdh.ac.in</a></p>
        <p>© Indian Institute of Technology Dharwad. All rights reserved.</p>
      </footer>
    </main>
  );
}
