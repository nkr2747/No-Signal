import React from 'react';
import './Support.css';

const terms = [
  'You confirm that the information you provide to the IIT Dharwad Library is accurate and complete.',
  'Use your IIT Dharwad Library login credentials as an individual. Do not share them or use one account to provide access to multiple users.',
  'The Library is not the creator or provider of every resource available through its services. Resources may be freely available, institutionally contributed, donated, or managed by publishers, and may be hosted by their respective providers.',
  'The organisation that provides a resource is responsible for its authenticity, relevance, completeness, accuracy, reliability, and suitability. The Library does not verify or guarantee the content of external resources.',
  'Use Library resources for personal, educational, and research purposes. Do not use them for commercial purposes.',
  'Copyright remains with the relevant author, publisher, or organisation. Do not copy, reproduce, or use protected material without the required permission.',
  'Intellectual property rights in material provided by the relevant author, source organisation, IIT Dharwad, or the Ministry of Education remain with their respective owners.',
  'To the extent permitted by applicable law, IIT Dharwad, the Ministry of Education, and providers of external resources are not responsible for loss, injury, claims, liabilities, or damages arising from your use of the Library website or resources, or your inability to use them.',
  'You agree to indemnify IIT Dharwad, the Ministry of Education, resource providers, and other parties associated with the Library against costs and claims arising from your breach of these terms, including reasonable legal fees where applicable.',
  'The Library may record access, session, and usage information to operate and secure its services, understand usage, and improve the user experience.',
  'The Library takes reasonable measures to protect the website and user information, but cannot guarantee absolute security or confidentiality of data transmitted or stored online.',
  'The Library works to keep its website available but is not responsible for interruptions caused by maintenance, technical issues, or circumstances beyond its control.',
  'If a provision of these terms is found invalid or unenforceable under applicable law, the remaining provisions continue to apply.',
  'The Library may revise these terms. The updated terms apply when they are published on this website.',
  'The Library may suspend or withdraw access to its website or linked services when required.',
  'The Library may suspend access for anyone who breaches these terms. Provisions relating to liability and indemnity continue to apply after access is suspended where permitted by law.',
];

export default function TermsConditions() {
  return (
    <main className="container py-4">
      <h1 className="text-center">Terms and Conditions of the IIT Dharwad Library</h1>
      <p>These terms apply to your use of the IIT Dharwad Library website and its services. Please read them before using the site.</p>
      <ol className="mt-4">
        {terms.map((term) => <li className="mb-3" key={term}>{term}</li>)}
      </ol>
      <p>Questions about these terms? Contact the Library at <a href="mailto:librarian@iitdh.ac.in">librarian@iitdh.ac.in</a>.</p>
      <footer id="foot" className="mt-4">
        <p>Knowledge Resource Centre (KRC), Indian Institute of Technology Dharwad · Knowledge Resource and Data Centre (KRDC) Block, Permanent Campus, Chikkamalligawad, Dharwad, Karnataka 580 011.</p>
        <p>Staff operations: 9:00 a.m. to 5:30 p.m. on Institute working days.</p>
        <p>VIOP: 7001 / 7002 · Email: <a href="mailto:kr.office@iitdh.ac.in">kr.office@iitdh.ac.in</a> / <a href="mailto:librarian@iitdh.ac.in">librarian@iitdh.ac.in</a></p>
      </footer>
    </main>
  );
}
