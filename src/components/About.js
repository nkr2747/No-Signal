import React from 'react';
import './about.css';

const libraryContact = (
  <footer id="foot" className="mt-4">
    <h3>Contact IIT Dharwad KRC</h3>
    <p>Knowledge Resource and Data Centre (KRDC) Block, Permanent Campus, Chikkamalligawad, Dharwad, Karnataka 580 011.</p>
    <p>Staff operations: 9:00 a.m. to 5:30 p.m. on Institute working days. The general reading area is open 24×7.</p>
    <p>VIOP: 7001 / 7002 · Email: <a href="mailto:kr.office@iitdh.ac.in">kr.office@iitdh.ac.in</a> / <a href="mailto:librarian@iitdh.ac.in">librarian@iitdh.ac.in</a></p>
    <p>© Indian Institute of Technology Dharwad. All rights reserved.</p>
  </footer>
);

export default function About() {
  return (
    <main className="container py-4">
      <h1>About IIT Dharwad Library</h1>
      <p>The Knowledge Resource Centre (KRC), IIT Dharwad, supports the Institute’s teaching, learning, research, and lifelong learning through its collections, subscribed resources, study spaces, and library services.</p>
      <hr />
      <h2>Access e-resources off campus</h2>
      <p>IIT Dharwad patrons can access the KRC’s subscribed electronic resources off campus using their Institute LDAP credentials through the approved access service. Access is subject to each provider’s licence. Systematic downloading of electronic resources is prohibited.</p>
      <h2>Suggest a book for purchase</h2>
      <p>Faculty, staff, and students may recommend books for the Library to consider. The Library reviews suggestions in consultation with relevant faculty and subject to collection needs and available funds.</p>
      <p>Submit a suggestion through the <a href="https://opac.iitdh.ac.in/">IIT Dharwad Library catalogue</a> or email <a href="mailto:kr.office@iitdh.ac.in">kr.office@iitdh.ac.in</a>.</p>
      <h2>Scanning and copying</h2>
      <p>Scanning and copying services are available in accordance with applicable copyright requirements and Library guidelines. Please contact Library staff for assistance.</p>
      <h2>Inter-library requests</h2>
      <p>If a required scholarly resource is not available in the IIT Dharwad collection, contact the Library to ask whether it can be obtained through an inter-library service.</p>
      <h2>Donate a book</h2>
      <p>The KRC considers donations of new or gently used books and other learning resources that support the Institute’s teaching and research. Donated material is reviewed before it is added to the collection. Use the Contribute a Book form to submit a title for review.</p>
      <h2>Share feedback</h2>
      <p>Students, faculty, and staff are welcome to share suggestions about Library services or this website with the Library team.</p>
      {libraryContact}
    </main>
  );
}
