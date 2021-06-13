import React from 'react';
import Header from './Header';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';

function Resume() {
    return(
        <React.Fragment>
            <Header>
                <h1>Shubham Singh</h1>
                <div className="address-container">
                    <div className="mail-container">
                        <MailOutlineIcon />
                        <a href="mailto:shubhmsing@gmail.com">shubhmsing@gmail.com</a>
                    </div>
                    <div className="phone-container">
                        <PhoneIcon />
                        <a href="tel:+918707841019">+918707841019</a>
                    </div>
                </div>
            </Header>
            <main>
                <section aria-labelledby="Summary">
                    <h2>Summary</h2>
                    <ul>
                        <li>I have 4 years of experience in Application development and maintenance.</li>
                        <li>I have worked mostly on React application development in my 4 years of career.</li>
                        <li>I am experienced UI Developer certified in React, Front End Web Development and Open Source Development.</li>
                        <li>I have created Online Compiler, Face Recognition Application, PinkBlue PWA, PinkBlue AndroidApplication,Event management Applications from scratch.</li>
                    </ul>
                </section>
                <section aria-labelledby="Experience">
                    <h2>Experience</h2>
                    <ul>
                        <li>
                            <h3>Associate Consultant</h3>
                            <div className="companies">Infosys Ltd</div>
                            <div className="experience-years">Feb 2020 - Present (1 year 5 months +)</div>
                            <div>Responsibilities:</div>
                            <ul>
                                <li>React Application Development and Bug Fixes.</li>
                                <li>Create Sprint Boot APIs.</li>
                                <li>Optimising the current application frontend and backend.</li>
                                <li>Work under Agile Methodology.</li>
                                <li>Fix RWD issues.</li>
                                <li>Give suggestion to Product Owner for new Functionality and Application Improvements.</li>
                                <li>Designing the UI Frameworks.</li>
                            </ul>
                            <div>Technologies:</div>
                            <strong>ReactJS, Redux, HTML5, CSS3, JavaScript, Agile, Sprint Boot, Jenkins, SQL, Jest, NodeJS</strong>
                        </li>
                        <li>
                            <h3>Software Engineer</h3>
                            <div className="companies">PinkBlue.in</div>
                            <div className="companies">Infosys Ltd</div>
                            <div className="experience-years">Apr 2019 - Jan 2020 (10 months)</div>
                            <div>Responsibilities:</div>
                            <ul>
                                <li>Handling and Monitoring server.</li>
                                <li>Adding new features on Mobile Application and PWA.</li>
                                <li>Developing API’s.</li>
                                <li>Monitoring databases and resolving its issues.</li>
                                <li>Debugging issues in server, mobile app and PWA.</li>
                                <li>Magento framework issues and adding new Magento extensions</li>
                            </ul>
                            <div>Technologies:</div>
                            <strong>PHP, JavaScript, JWT, React Native, React JS, Slim, MySQL, Ajax, JSON, Github, NodeJS, Magento 2.</strong>
                        </li>
                        <li>
                            <h3>Senior Application Developer</h3>
                            <div className="companies">uCertify</div>
                            <div className="companies">Infosys Ltd</div>                            
                            <div className="experience-years">Jun 2017 - Mar 2019 (1 year 10 months)</div>
                            <div>Responsibilities:</div>
                            <ul>
                                <li>Implementation of fastest online compiler to compete with its rival competitors (SPOJ, Ideone, etc.)</li>
                                <li>Monitoring and Managing vmware virtual machine infra.</li>
                                <li>Delivering virtual machine to clients through browser.</li>
                                <li>Installing SSL certificates on vmware ESXI &amp; vCenter server and virtual machineenvironment setup.</li>
                                <li>Developing API’s for delivering and monitoring of virtual machines.</li>
                            </ul>
                            <div>Technologies:</div>
                            <strong>PHP, JavaScript, JWT, React Native, React JS, VMWare ESXi, VMWare, vCenter, Ajax, JSON, Github, Smarty.</strong>
                        </li>
                    </ul>
                </section>
                <section aria-labelledby="Education">
                    <h2>Education</h2>
                    <h3>Institute of Engineering and Rural technology</h3>
                    <div className="companies">Bachelor's of Technology, computer science and engineering</div>
                    <div className="experience-years">2013 - 2017</div>
                </section>
                <section aria-labelledby="Certifications">
                    <h2>Certifications</h2>
                    <ul>
                        <li>
                            <strong>JavaScript (Intermediate) - </strong> HackerRank
                            <div>201538570879</div>
                        </li>
                        <li>
                            <strong>Infosys Certified React Professional - </strong> Infosys
                        </li>
                        <li>
                            <strong>React (Basic) Certification - </strong> HackerRank
                            <div>d1a75ff8b278</div>
                        </li>
                        <li>
                            <strong>Infosys Certified Front End Web Developer - </strong> Infosys
                        </li>
                        <li>
                            <strong>Infosys Certified Open Chain Practitioner - </strong> Infosys
                        </li>
                    </ul>
                </section>
                <section aria-labelledby="Skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                        <li>Redux</li>
                        <li>Jest</li>
                        <li>Github</li>
                        <li>Agile Methodology</li>
                        <li>API Development</li>
                    </ul>
                </section>
                <section aria-labelledby="Honors and Awards">
                    <h2>Honors &amp; Awards</h2>
                    <ul>
                        <li>
                            <h3>Star Performer Award - uCertify</h3>
                            <div>Jan 2018</div>
                            <div>Got star performer award for my hard work and commitment to work on new technologies.</div>
                        </li>
                        <li>
                            <h3>Rockstar Award - PinkBlue.in</h3>
                            <div>Jul 2019</div>
                        </li>
                    </ul>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Resume;