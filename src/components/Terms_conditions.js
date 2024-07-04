import React from 'react';
import './Support.css';

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    };

    return (
        <div style={myStyle}>

            <h2 style={{ textAlign: 'center' }}>
            Terms and Conditions of Indian Institute of Technology Dharward Library (IITDhL)
            </h2>
            <br/>
            <br/>
            <ol>
                <li><h5>User certifies that the information s/he has submitted to IITDhL are correct and complete.</h5></li>
                <br/>
                <li><h5>User shall use the IITDhL access-credential to use IITDhL as an individual and not use the access credential for multiple users in a network or otherwise.</h5></li>
                <br/>
                <li><h5>User understands that IITDhL is not the creator or provider of any content being accessed through IITDhL. It is a conglomeration of freely available or institutionally contributed or donated or publisher managed contents. Almost all the contents found in IITDhL are hosted by and accessed from the respective sources.</h5></li>
                <br/>
                <li><h5>User understands that the responsibility for authenticity, relevance, completeness, accuracy, reliability and suitability of the contents accessed through IITDhL rests with the respective organization from where the contents are sourced, and IITDhL has no responsibility towards this.</h5></li>
                <br/>
                <li><h5>User understands that the contents of IITDhL are for personal and/or institutional learning and knowledge enrichment only and cannot be used for any commercial purpose.</h5></li>
                <br/>
                <li><h5>User understands that the copyright of the content rests with the respective author or publisher or organization from where the content is being accessed, as the case may be, and neither the full nor any part of the content can be copied or reproduced or used for any purpose without permission of the respective copyright holder.</h5></li>
                <br/>
                <li><h5>User understands that the respective author or the source organization or Indian Institute of Technology Dharward or Ministry of Education, as the case may be, owns rights to the intellectual property of the respective material of IITDhL or accessed through IITDhL and all such rights are reserved.</h5></li>
                <br/>
                <li><h5>User understands that Indian Institute of Technology Dharward, Ministry of Education or any source organization of IITDhL is not liable for any loss, injury, claim, liability or damage of any kind resulting from her/his use of IITDhL or any information or data accessed through IITDhL. User also understands that Indian Institute of Technology Dharward, Ministry of Education or any source organization of IITDhL is not liable for any special, indirect, incidental or consequential damages of any kind whatsoever (including, without limitation, legal fees) in any way due to, resulting from, or arising in connection with the use of or inability to use IITDhL portal or portal/website of any source organization of IITDhL.

</h5></li>
                <br/>
                <li><h5>User indemnifies Indian Institute of Technology Dharward, Ministry of Education, content source organizations, and any other third party associated with IITDhL the fullest extent from and against all liabilities, costs, demands, causes of action, damages and expenses, including reasonable legal fees arising out of or in any way related to her/his breach of any of the provisions of these Terms and Conditions.</h5></li>
                <br/>
                <li><h5>User understands that IITDhL may log her/his access, session and usage of the IITDhL for user experience tracking, to display recent searches or to improve upon user service and user interface.</h5></li>
            <br/>
            <li><h5>User understands that IITDhL has taken all reasonable measures to secure access to IITDhL portal and protect user data and users’ access, session and usage information. However, IITDhL cannot guarantee absolute secrecy of these data.</h5></li>
            <br/>
            <li><h5>User understands that IITDhL makes every effort to keep the IITDhL portal up and running smoothly. However, IITDhL takes no responsibility for, and will not be liable for, the portal being unavailable for some time due to technical issues or otherwise.</h5></li>
            <br/>
            <li><h5>User understands that if any provision of these Terms and Conditions is found to be unenforceable or invalid under applicable law, such unenforceability or invalidity shall not render these Terms and Conditions unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein.</h5></li>
            <br/>
            <li><h5>User understands that IITDhL reserves the right to revise these Terms and Conditions at any time as it sees fit and s/he shall be bound by the prevailing Terms and Conditions.</h5></li>
            <br/>
            <li><h5>User understands that IITDhL reserves the right to withdraw or suspend IITDhL portal or portal/website of any source organization of IITDhL.</h5></li>
            <br/>
            <li><h5>User understands that IITDhL reserves the right to withdraw or suspend the use of IITDhL by any person who uses IITDhL in breach of these Terms and Conditions. The limitation of liability and indemnity above survive any such termination.</h5></li>
            <br/>
            </ol>
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

