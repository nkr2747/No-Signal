import React from 'react';
import './Support.css';

export default function Support(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    };

    return (
        <div className='container' style={myStyle}>
            <h1>Support</h1>
            <br/>
            <br/>
            <br/>
            <h3>Some FAQ's</h3>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Q: What is the last Date of submission after the date of issue of the book ???
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>After 24 days from the date of issue.</strong>Late fees are $0.25 per day for books, $1.00 per day for DVDs, and $0.10 per day for magazines. We encourage timely returns to avoid fines and ensure availability for other patrons.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Q: How can I reserve a book?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        You can reserve a book online through our catalog, over the phone, or by visiting the library. We will notify you when the book is available for pickup.    
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Q: Does the library offer digital resources?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Yes, we offer a variety of digital resources including e-books, audiobooks, online databases, and streaming services. Access these resources through our website using your library card.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Q: Are there computers and Wi-Fi available?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Yes, we provide public computers with internet access and free Wi-Fi throughout the library. You can use your library card to log in to the computers.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Q: Can I print, copy, or scan documents at the library?
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Yes, we have printing, copying, and scanning services available. Printing and copying cost $0.10 per page for black and white and $0.50 per page for color.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                         Q: How can I volunteer at the library?
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        We welcome volunteers! Please visit our volunteer page on the website or speak to a staff member for more information on how to get involved.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                         Q: Who do I contact for additional questions or support?
                        </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        For any further inquiries, you can contact us via phone at [Library Phone Number], email at [Library Email Address], or visit the library in person.
                        </div>
                    </div>
                </div>
            </div>
            <br/>

            <h2>Library Cafeteria Usage Guidelines</h2>
            <ul>
                <li><h4>Respect Designated Eating Areas:</h4></li>
                <h6>Kindly use the cafeteria seating area and courtyard for consuming food and beverages.
                This helps organize the space and ensures a pleasant experience for everyone.</h6>
                <br/>
                <li><h4>Avoid Leaving a Mess:</h4></li>
                <h6>Take a moment to clean up after yourself; this includes crumbs, spills, and any other
                debris. Let's work together to maintain a tidy space for everyone's benefit.</h6>
                <br/>
                <li><h4>Maintain Cleanliness:</h4></li>
                <h6>Dispose of wrappers, containers, and leftover food responsibly in the trash bin/dust bin to
                uphold a clean and inviting environment for all users.</h6>
                <br/>
                <li><h4>Keep Conversations at a Low Volume:</h4></li>
                <h6>Refrain from engaging in loud conversations while eating to prevent disturbances.
                Keeping discussions at a low volume contributes to a quiet and focused atmosphere.</h6>
                <br/>
                <li><h4>Food and Drinks Policy:</h4></li>
                <h6>Avoid bringing other edibles or drinks into the Stack area and reading section except for
                plain drinking water.</h6>
                <br/>
                <li><h4>Library Reading Materials:</h4></li>
                <h6>Avoid bringing library equipment or reading materials to the courtyard area. Let's
                maintain the integrity of the reading spaces for everyone's enjoyment.</h6>
                <br/>
            </ul>
            <br/>
            <h2>24X7 Reading Hall Usage Guidelines</h2>
            <ul>
                <li><h5>Use your valid IITDh ID for entry into 24X7 Reading Hall.</h5></li>
                <li><h5>ID is not transferable.</h5></li>
                <li><h5>Maintain silence inside the 24X7 Reading Hall.</h5></li>
                <li><h5>Do not middle with private and Institute Property</h5></li>
                <li><h5>Ensure a safe environment for others.</h5></li>
                <li><h5>24 hours Reading Hall is under CCTV surveillance.</h5></li>
                <li><h5>Don't threaten personal safety or the security of personal or institute property.</h5></li>
                <li><h5>Don't disrupt the activities of other library users or Staff. Avoid noise, cell
phones, music, hostility, rudeness, and consumption of food and drink etc.
inside the 24X7 Reading Hall.</h5></li>
                <li><h5>The IITDh Central Library may limit or refuse access to individuals or groups
                who fail to comply with these guidelines.</h5></li>
                <li><h5>Please also note that the 24X7 Reading Hall is under the CCTV surveillance
                and the miscreant found guilty will be punished as per Rules.</h5></li>
            </ul>

           <h3>Support staff emails</h3>
           <ul class="list-group">
    <li class="list-group-item">Mohit<br/><a href="mailto:me23bt022@iitdh.ac.in">me23bt022@iitdh.ac.in</a></li>
    <li class="list-group-item">Saurabh<br/><a href="mailto:ch23bt001@iitdh.ac.in">ch23bt001@iitdh.ac.in</a></li>
    <li class="list-group-item">Nilesh<br/><a href="mailto:cs23bt006@iitdh.ac.in">cs23bt006@iitdh.ac.in</a></li>
    <li class="list-group-item">Siddharth<br/><a href="mailto:ce23bt007@iitdh.ac.in">ce23bt007@iitdh.ac.in</a></li>
</ul>


            <footer id="foot">
                <table>
                    <tr>
                        <th>QUICK LINKS</th>
                        <th>CONTACT US</th>
                    </tr>
                    <tr>
                        <td><a href="#new">What's New</a></td>
                        <td>Room No. 102</td>
                    </tr>
                    <tr>
                        <td><a href="#remote-access">E-Resource Remote Access</a></td>
                        <td>IITD Library</td>
                    </tr>
                    <tr>
                        <td>Library Timings: All working days</td>
                        <td>KNOWLEDGE RESOURCE CENTRE</td>
                    </tr>
                    <tr>
                        <td>From 9:00 a.m. to 5:30 p.m. (Mon-Sat, Sunday Holiday)</td>
                        <td>Indian Institute of Technology DHARWAD</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>KARNATAKA</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>PHONE: +91 854 000 2229</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Email: <a href="mailto:librarian@iitdh.ac.in">librarian@iitdh.ac.in</a></td>
                    </tr>
                </table>
                <br />
                &#169;2024 Indian Institute of Technology DHARWAD, WALMI, KARNATAKA, India. All rights reserved.
            </footer>
        </div>
    );
}

